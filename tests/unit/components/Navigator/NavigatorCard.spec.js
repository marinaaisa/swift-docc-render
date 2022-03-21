/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2022 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import NavigatorCard from '@/components/Navigator/NavigatorCard.vue';
import { shallowMount } from '@vue/test-utils';
import { TopicTypes } from '@/constants/TopicTypes';
import { RecycleScroller } from 'vue-virtual-scroller';
import 'intersection-observer';
import { INDEX_ROOT_KEY, SIDEBAR_ITEM_SIZE } from '@/constants/sidebar';
import NavigatorCardItem from '@/components/Navigator/NavigatorCardItem.vue';
import { sessionStorage } from 'docc-render/utils/storage';
import Reference from '@/components/ContentNode/Reference.vue';
import FilterInput from '@/components/Filter/FilterInput.vue';
import { BreakpointName } from '@/utils/breakpoints';
import { waitFor } from '@/utils/loading';
import { flushPromises } from '../../../../test-utils';

jest.mock('docc-render/utils/debounce', () => jest.fn(fn => fn));
jest.mock('docc-render/utils/storage');
jest.mock('docc-render/utils/loading');

sessionStorage.get.mockImplementation((key, def) => def);

const {
  STORAGE_KEYS,
  FILTER_TAGS,
  FILTER_TAGS_TO_LABELS,
  NO_CHILDREN,
  NO_RESULTS,
  ERROR_FETCHING,
  ITEMS_FOUND,
} = NavigatorCard.constants;

const RecycleScrollerStub = {
  props: RecycleScroller.props,
  template: '<div class="vue-recycle-scroller-stub"><template v-for="item in items"><slot :item="item" /></template></div>',
  methods: {
    scrollToItem: jest.fn(),
  },
};
const root0 = {
  type: 'overview',
  path: '/tutorials/fookit',
  title: 'TopLevel',
  uid: 0,
  parent: INDEX_ROOT_KEY,
  depth: 0,
  index: 0,
  childUIDs: [
    1,
    2,
  ],
};

const root0Child0 = {
  type: 'tutorial',
  path: '/tutorials/fookit/first-child-depth-1',
  title: 'First Child, Depth 1',
  uid: 1,
  parent: '0',
  depth: 1,
  index: 0,
  childUIDs: [],
};
const root0Child1 = {
  type: 'tutorial',
  path: '/tutorials/fookit/second-child-depth-1',
  title: 'Second Child, Depth 1',
  uid: 2,
  parent: '0',
  depth: 1,
  index: 1,
  childUIDs: [
    3,
  ],
};
const root0Child1GrandChild0 = {
  type: 'tutorial',
  path: '/tutorials/fookit/second-child-depth-1/first-child-depth-2',
  title: 'First Child, Depth 2',
  uid: 3,
  parent: 2,
  depth: 2,
  index: 0,
  childUIDs: [],
};
const root1 = {
  abstract: [{
    text: 'Create a tutorial.',
    type: 'text',
  }],
  type: 'article',
  path: '/documentation/fookit/gettingstarted',
  title: 'Getting Started',
  uid: 4,
  parent: INDEX_ROOT_KEY,
  depth: 0,
  index: 1,
  childUIDs: [],
};

const children = [
  root0,
  root0Child0,
  root0Child1,
  root0Child1GrandChild0,
  root1,
];

const activePath = [root0.path, root0Child0.path];

const defaultProps = {
  technology: 'TestKit',
  technologyPath: '/path/to/technology',
  children,
  activePath,
  type: TopicTypes.module,
  scrollLockID: 'foo',
  breakpoint: 'large',
};

const createWrapper = ({ propsData, ...others } = {}) => shallowMount(NavigatorCard, {
  propsData: {
    ...defaultProps,
    ...propsData,
  },
  stubs: {
    RecycleScroller: RecycleScrollerStub,
    NavigatorCardItem,
  },
  sync: false,
  ...others,
});

describe('NavigatorCard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('renders the NavigatorCard', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    expect(wrapper.find('.card-icon').props('type')).toEqual(defaultProps.type);
    // assert link
    expect(wrapper.find(Reference).props('url')).toEqual(defaultProps.technologyPath);
    expect(wrapper.find('.card-link').text()).toBe(defaultProps.technology);
    // assert scroller
    const scroller = wrapper.find(RecycleScroller);
    expect(scroller.props()).toMatchObject({
      items: [
        root0,
        root0Child0,
        root0Child1, // we skip the grandchild, its parent is not open
        root1,
      ],
      itemSize: SIDEBAR_ITEM_SIZE,
      keyField: 'uid',
    });
    expect(wrapper.find(RecycleScroller).attributes('aria-label')).toBe('Sidebar Tree Navigator');
    expect(scroller.attributes('id')).toEqual(defaultProps.scrollLockID);
    // assert CardItem
    const items = wrapper.findAll(NavigatorCardItem);
    expect(items).toHaveLength(4);
    expect(items.at(0).props()).toEqual({
      expanded: true,
      isActive: false,
      isRendered: false,
      filterPattern: null,
      isFocused: false,
      isBold: true,
      item: root0,
      apiChange: null,
      lastFocusWasInside: false,
    });
    // assert no-items-wrapper
    expect(wrapper.find('.no-items-wrapper').exists()).toBe(true);
    // assert filter
    const filter = wrapper.find(FilterInput);
    expect(filter.props()).toEqual({
      disabled: false,
      focusInputWhenCreated: false,
      placeholder: 'Filter in TestKit',
      positionReversed: true,
      preventedBlur: false,
      selectedTags: [],
      shouldTruncateTags: false,
      tags: [
        'Sample Code',
        'Tutorials',
        'Articles',
      ],
      value: '',
    });
  });

  it('renders lastFocusWasInside as true when last focus was inside the component', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    const scroller = wrapper.find(RecycleScroller);
    scroller.trigger('focusin');
    expect(wrapper.vm.lastFocusWasInside).toBe(true);
  });

  it('focuses the current page', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    expect(wrapper.vm.focusedIndex).toBe(1);
  });

  it('focus the first item if there is no active item', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    expect(wrapper.vm.focusedIndex).toBe(1);

    wrapper.setProps({
      activePath: [],
    });
    await flushPromises();
    expect(wrapper.vm.focusedIndex).toBe(0);
  });

  it('allows the user to navigate through arrow keys', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    expect(wrapper.vm.focusedIndex).toBe(1);
    wrapper.findAll(NavigatorCardItem).at(0).trigger('keydown.down');
    expect(wrapper.vm.focusedIndex).toBe(2);

    wrapper.findAll(NavigatorCardItem).at(1).trigger('keydown.up');
    expect(wrapper.vm.focusedIndex).toBe(1);
  });

  it('allows the user to navigate to the last item on the list when pressing alt + down key', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    wrapper.findAll(NavigatorCardItem).at(0).trigger('keydown', {
      key: 'ArrowDown',
      altKey: true,
    });
    // assert that focusedIndex is restore
    expect(wrapper.vm.focusedIndex).toBe(null);
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.focusedIndex).toBe(wrapper.findAll(NavigatorCardItem).length - 1);
  });

  it('allows the user to navigate to the first item on the list when pressing alt + up key', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    wrapper.findAll(NavigatorCardItem).at(3).trigger('keydown', {
      key: 'ArrowUp',
      altKey: true,
    });
    expect(wrapper.vm.focusedIndex).toBe(0);
  });

  it('reverses the FilterInput, on mobile', () => {
    const wrapper = createWrapper({
      propsData: {
        breakpoint: BreakpointName.medium,
      },
    });
    expect(wrapper.find(FilterInput).props('positionReversed')).toBe(false);
  });

  it('renders aria-live regions for polite and assertive notifications', () => {
    const wrapper = createWrapper();
    expect(wrapper.find('[aria-live="polite"]').exists()).toBe(true);
    expect(wrapper.find('[aria-live="assertive"]').exists()).toBe(true);
  });

  it('hides the RecycleScroller, if no items to show', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    const scroller = wrapper.find(RecycleScroller);
    expect(scroller.isVisible()).toBe(true);
    wrapper.find(FilterInput).vm.$emit('input', 'bad-query');
    await wrapper.vm.$nextTick();
    expect(scroller.isVisible()).toBe(false);
  });

  it('renders a message updating aria-live, if no items found when filtering', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    const scroller = wrapper.find(RecycleScroller);
    expect(scroller.isVisible()).toBe(true);
    wrapper.find(FilterInput).vm.$emit('input', 'bad-query');
    await wrapper.vm.$nextTick();
    expect(scroller.props('items')).toEqual([]);
    expect(scroller.isVisible()).toBe(false);
    expect(wrapper.find('[aria-live="assertive"].no-items-wrapper').text()).toBe(NO_RESULTS);
  });

  it('renders a message updating aria-live, if no children', async () => {
    const wrapper = createWrapper({
      propsData: {
        children: [],
      },
    });
    await flushPromises();
    const scroller = wrapper.find(RecycleScroller);
    expect(scroller.isVisible()).toBe(false);
    expect(wrapper.find('[aria-live="assertive"].no-items-wrapper').text()).toBe(NO_CHILDREN);
  });

  it('renders an error message updating aria-live, when there is an error in fetching', async () => {
    const wrapper = createWrapper({
      propsData: {
        children: [],
        errorFetching: true,
      },
    });
    await flushPromises();
    expect(wrapper.find('[aria-live="assertive"].no-items-wrapper').text()).toBe(ERROR_FETCHING);
    expect(wrapper.find('.filter-wrapper').exists()).toBe(false);
  });

  it('renders an hidden message updating aria-live, notifying how many items were found', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    const unopenedItem = wrapper.findAll(NavigatorCardItem).at(2);
    unopenedItem.vm.$emit('toggle', root0Child1);
    await wrapper.vm.$nextTick();
    let message = [children.length, ITEMS_FOUND].join(' ');
    expect(wrapper.find('[aria-live="polite"].visuallyhidden').text()).toBe(message);

    wrapper.find(FilterInput).vm.$emit('input', root0.title);
    await wrapper.vm.$nextTick();
    message = [1, ITEMS_FOUND].join(' ');
    expect(wrapper.find('[aria-live="polite"].visuallyhidden').text()).toBe(message);
  });

  it('opens an item, on @toggle', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    const item = root0Child1;
    let all = wrapper.findAll(NavigatorCardItem);
    const unopenedItem = all.at(2);
    expect(unopenedItem.props()).toEqual({
      expanded: false,
      isActive: false,
      isBold: false,
      isFocused: false,
      item,
      filterPattern: null,
      isRendered: false,
      apiChange: null,
      lastFocusWasInside: false,
    });
    unopenedItem.vm.$emit('toggle', item);
    await wrapper.vm.$nextTick();
    expect(unopenedItem.props('expanded')).toBe(true);
    all = wrapper.findAll(NavigatorCardItem);
    // assert all items are now visible
    expect(all).toHaveLength(children.length);
    // assert the grandchild item is now visible
    expect(all.at(3).props('item')).toEqual(root0Child1GrandChild0);
  });

  it('closes an item and all of its children, on @toggle', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    const item = root0;
    let all = wrapper.findAll(NavigatorCardItem);
    expect(all).toHaveLength(4);
    const openItem = all.at(0);
    openItem.vm.$emit('toggle', item);
    await wrapper.vm.$nextTick();
    all = wrapper.findAll(NavigatorCardItem);
    // only the two top items are visible
    expect(all).toHaveLength(2);
  });

  it('opens an item, and all of its children, on @toggle-full', async () => {
    const wrapper = createWrapper({
      propsData: {
        // make sure no items are open
        activePath: [root0.path],
      },
    });
    await flushPromises();
    const item = root0;
    let all = wrapper.findAll(NavigatorCardItem);
    expect(all).toHaveLength(2);
    const openItem = all.at(0);
    openItem.vm.$emit('toggle-full', item);
    await flushPromises();
    all = wrapper.findAll(NavigatorCardItem);
    // only the two top items are visible
    expect(all).toHaveLength(children.length);
    openItem.vm.$emit('toggle-full', item);
    await flushPromises();
    expect(wrapper.findAll(NavigatorCardItem)).toHaveLength(2);
  });

  it('highlights the current page, and expands all of its parents', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    const all = wrapper.findAll(NavigatorCardItem);
    expect(all).toHaveLength(4); // assert all are rendered, except the grandchild
    expect(all.at(0).props()).toMatchObject({
      item: root0, // the first item
      isBold: true,
      isActive: false,
      expanded: true,
    });
    expect(all.at(1).props()).toMatchObject({
      item: root0Child0,
      isBold: true,
      isActive: true,
    });
  });

  it('allows filtering the items, opening all items, that have matches in children', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenCalledTimes(1);
    const filter = wrapper.find(FilterInput);
    filter.vm.$emit('input', root0Child1GrandChild0.title);
    await flushPromises();
    expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenCalledTimes(2);
    // assert only the parens of the match are visible
    const all = wrapper.findAll(NavigatorCardItem);
    expect(all).toHaveLength(3);
    expect(all.at(0).props('item')).toEqual(root0);
    expect(all.at(1).props('item')).toEqual(root0Child1);
    expect(all.at(2).props('item')).toEqual(root0Child1GrandChild0);
    expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenCalledWith(0);
  });

  it('filters items, keeping only direct matches, removing siblings, even if parent is a direct match', async () => {
    const root0Updated = {
      ...root0,
      title: `Second ${root0}`,
    };
    const newChildren = [
      root0Updated,
      root0Child0,
      root0Child1,
      root0Child1GrandChild0,
      root1,
    ];

    const wrapper = createWrapper({
      propsData: {
        children: newChildren,
      },
    });
    const filter = wrapper.find(FilterInput);
    await flushPromises();
    expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenCalledTimes(1);
    // make sure we match at both the top item as well as one of its children
    filter.vm.$emit('input', 'Second');
    await flushPromises();
    expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenCalledTimes(2);
    // assert only the parens of the match are visible
    const all = wrapper.findAll(NavigatorCardItem);
    expect(all).toHaveLength(2);
    expect(all.at(0).props('item')).toEqual(root0Updated);
    expect(all.at(1).props('item')).toEqual(root0Child1);
    expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenCalledWith(0);
  });

  it('renders all the children of a directly matched parent', async () => {
    const wrapper = createWrapper();
    const filter = wrapper.find(FilterInput);
    await flushPromises();
    expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenCalledTimes(1);
    filter.vm.$emit('input', root0.title);
    await flushPromises();
    expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenCalledTimes(2);
    // assert only the parens of the match are visible
    let all = wrapper.findAll(NavigatorCardItem);
    expect(all).toHaveLength(1);
    expect(all.at(0).props('item')).toEqual(root0);
    expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenCalledWith(0);
    // open the item
    all.at(0).vm.$emit('toggle', root0);
    await flushPromises();
    all = wrapper.findAll(NavigatorCardItem);
    expect(all).toHaveLength(3);
    expect(all.at(1).props('item')).toEqual(root0Child0);
    expect(all.at(2).props('item')).toEqual(root0Child1);
    // open last child
    all.at(2).vm.$emit('toggle', root0Child1);
    await flushPromises();
    all = wrapper.findAll(NavigatorCardItem);
    expect(all).toHaveLength(4);
    expect(all.at(3).props('item')).toEqual(root0Child1GrandChild0);
  });

  it('allows filtering the items using Tags, opening all items, that have matches in children', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    const filter = wrapper.find(FilterInput);
    expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenCalledTimes(1);
    filter.vm.$emit('update:selectedTags', [FILTER_TAGS_TO_LABELS.articles]);
    await flushPromises();
    expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenCalledTimes(2);
    // assert only the parens of the match are visible
    const all = wrapper.findAll(NavigatorCardItem);
    expect(all).toHaveLength(1);
    expect(all.at(0).props('item')).toEqual(root1);
    // assert we reset the scroll to the top
    expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenLastCalledWith(0);
  });

  it('aliases `project` to `tutorial`, when filtering using tags', async () => {
    const wrapper = createWrapper();
    const filter = wrapper.find(FilterInput);
    await flushPromises();
    expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenCalledTimes(1);
    filter.vm.$emit('update:selectedTags', [FILTER_TAGS_TO_LABELS.tutorials]);
    await flushPromises();
    expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenCalledTimes(2);
    // assert only the parens of the match are visible
    const all = wrapper.findAll(NavigatorCardItem);
    expect(all).toHaveLength(4);
    expect(all.at(0).props('item')).toEqual(root0);
    expect(all.at(1).props('item')).toEqual(root0Child0);
    expect(all.at(2).props('item')).toEqual(root0Child1);
    expect(all.at(3).props('item')).toEqual(root0Child1GrandChild0);
    expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenCalledWith(0);
  });

  it('allows filtering the items with filter and Tags, opening all items, that have matches in children', async () => {
    const wrapper = createWrapper();
    const filter = wrapper.find(FilterInput);
    await flushPromises();
    expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenCalledTimes(1);
    filter.vm.$emit('update:selectedTags', [FILTER_TAGS_TO_LABELS.tutorials]);
    await flushPromises();
    expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenCalledTimes(2);
    // assert only the parens of the match are visible
    let all = wrapper.findAll(NavigatorCardItem);
    expect(all).toHaveLength(4);
    expect(all.at(0).props('item')).toEqual(root0);
    expect(all.at(1).props('item')).toEqual(root0Child0);
    expect(all.at(2).props('item')).toEqual(root0Child1);
    expect(all.at(3).props('item')).toEqual(root0Child1GrandChild0);
    // add filtering in top
    filter.vm.$emit('input', root0Child0.title);
    await flushPromises();
    all = wrapper.findAll(NavigatorCardItem);
    expect(all).toHaveLength(2);
    expect(all.at(0).props('item')).toEqual(root0);
    expect(all.at(1).props('item')).toEqual(root0Child0);
    expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenCalledWith(0);
  });

  it('allows opening an item, that has a filter match', async () => {
    const wrapper = createWrapper();
    const filter = wrapper.find(FilterInput);
    await flushPromises();
    filter.vm.$emit('input', root0Child1.title);
    await flushPromises();
    // assert match and all if it's parents are visible
    let all = wrapper.findAll(NavigatorCardItem);
    expect(all).toHaveLength(2);
    expect(all.at(0).props('item')).toEqual(root0);
    expect(all.at(1).props('item')).toEqual(root0Child1);
    // open the last match
    all.at(1).vm.$emit('toggle', root0Child1);
    await flushPromises();
    all = wrapper.findAll(NavigatorCardItem);
    // assert the last match child is visible
    expect(all).toHaveLength(3);
    expect(all.at(2).props('item')).toEqual(root0Child1GrandChild0);
    // close the match
    all.at(1).vm.$emit('toggle', root0Child1);
    await flushPromises();
    // assert there are again only 2 matches
    expect(wrapper.findAll(NavigatorCardItem)).toHaveLength(2);
  });

  it('removes duplicate items, when multiple items with the same parent match the filter', async () => {
    const wrapper = createWrapper();
    const filter = wrapper.find(FilterInput);
    // make sure both child elements match
    filter.vm.$emit('input', 'Child');
    await flushPromises();
    // assert only the parens of the match are visible
    const all = wrapper.findAll(NavigatorCardItem);
    expect(all).toHaveLength(4);
    // the root is rendered only once, even though multiple children match
    expect(all.at(0).props('item')).toEqual(root0);
    expect(all.at(1).props('item')).toEqual(root0Child0);
    expect(all.at(2).props('item')).toEqual(root0Child1);
    expect(all.at(3).props('item')).toEqual(root0Child1GrandChild0);
  });

  it('renders only direct matches or parents, when apiChanges are provided', async () => {
    const apiChanges = {
      [root0Child0.path]: 'modified',
      [root0Child1.path]: 'modified',
    };
    const wrapper = createWrapper({
      propsData: {
        apiChanges,
      },
    });
    await flushPromises();
    const all = wrapper.findAll(NavigatorCardItem);
    expect(all).toHaveLength(3);
    expect(all.at(0).props('item')).toEqual(root0);
    expect(all.at(1).props('item')).toEqual(root0Child0);
    expect(all.at(2).props('item')).toEqual(root0Child1);
  });

  it('allows filtering while API changes are ON', async () => {
    const apiChanges = {
      [root0Child0.path]: 'modified',
      [root0Child1.path]: 'modified',
    };
    const wrapper = createWrapper({
      propsData: {
        apiChanges,
      },
    });
    await flushPromises();
    let all = wrapper.findAll(NavigatorCardItem);
    expect(all).toHaveLength(3);
    expect(all.at(0).props('item')).toEqual(root0);
    expect(all.at(1).props('item')).toEqual(root0Child0);
    expect(all.at(2).props('item')).toEqual(root0Child1);
    // filter
    wrapper.find(FilterInput).vm.$emit('input', root0Child0.title);
    await flushPromises();
    all = wrapper.findAll(NavigatorCardItem);
    expect(all).toHaveLength(2);
    expect(all.at(0).props('item')).toEqual(root0);
    expect(all.at(1).props('item')).toEqual(root0Child0);
  });

  it('clears previously open items, when filtering and clearing the filter', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    wrapper.find(FilterInput).vm.$emit('input', 'First Child, Depth 2');
    await flushPromises();
    let all = wrapper.findAll(NavigatorCardItem);
    expect(all).toHaveLength(3);
    expect(all.at(2).props('item')).toEqual(root0Child1GrandChild0);
    wrapper.find(FilterInput).vm.$emit('input', '');
    await flushPromises();
    all = wrapper.findAll(NavigatorCardItem);
    expect(all).toHaveLength(4);
    // assert that the previously open child is no longer visible
    expect(all.at(2).props('item')).toEqual(root0Child1);
    expect(all.at(3).props('item')).toEqual(root1);
  });

  it('emits a `close` event', async () => {
    const wrapper = createWrapper();
    wrapper.find('.close-card-mobile').trigger('click');
    await flushPromises();
    expect(wrapper.emitted('close')).toHaveLength(1);
  });

  it('persists the filtered state', async () => {
    const wrapper = createWrapper();
    await flushPromises();
    // called for the initial 5 things
    expect(sessionStorage.set).toHaveBeenCalledTimes(5);
    expect(sessionStorage.set)
      .toHaveBeenCalledWith(STORAGE_KEYS.technology, defaultProps.technology);
    expect(sessionStorage.set)
      .toHaveBeenCalledWith(STORAGE_KEYS.openNodes, [0, 1]);
    expect(sessionStorage.set)
      .toHaveBeenCalledWith(STORAGE_KEYS.nodesToRender, [0, 1, 2, 4]);
    expect(sessionStorage.set)
      .toHaveBeenCalledWith(STORAGE_KEYS.apiChanges, false);
    expect(sessionStorage.set)
      .toHaveBeenCalledWith(STORAGE_KEYS.activeUID, 1);
    await flushPromises();
    sessionStorage.set.mockClear();
    wrapper.find(FilterInput).vm.$emit('input', root0Child1GrandChild0.title);
    wrapper.find(FilterInput).vm.$emit('update:selectedTags', [FILTER_TAGS_TO_LABELS.tutorials]);
    await flushPromises();
    expect(sessionStorage.set).toHaveBeenCalledTimes(6);
    expect(sessionStorage.set)
      .toHaveBeenCalledWith(STORAGE_KEYS.filter, root0Child1GrandChild0.title);
    expect(sessionStorage.set)
      .toHaveBeenCalledWith(STORAGE_KEYS.selectedTags, [FILTER_TAGS.tutorials]);
    expect(sessionStorage.set)
      .toHaveBeenCalledWith(STORAGE_KEYS.openNodes, [0, 2]);
    expect(sessionStorage.set)
      .toHaveBeenCalledWith(STORAGE_KEYS.nodesToRender, [0, 2, 3]);
    expect(sessionStorage.set)
      .toHaveBeenCalledWith(STORAGE_KEYS.apiChanges, false);
    expect(sessionStorage.set)
      .toHaveBeenCalledWith(STORAGE_KEYS.technology, defaultProps.technology);
  });

  it('restores the persisted state, from sessionStorage', async () => {
    sessionStorage.get.mockImplementation((key) => {
      if (key === STORAGE_KEYS.filter) return root0.title;
      if (key === STORAGE_KEYS.technology) return defaultProps.technology;
      if (key === STORAGE_KEYS.nodesToRender) return [root0.uid];
      if (key === STORAGE_KEYS.openNodes) return [root0.uid];
      if (key === STORAGE_KEYS.selectedTags) return [FILTER_TAGS.tutorials];
      if (key === STORAGE_KEYS.apiChanges) return false;
      if (key === STORAGE_KEYS.activeUID) return root0.uid;
      return '';
    });

    const wrapper = createWrapper();
    await flushPromises();
    const all = wrapper.findAll(NavigatorCardItem);
    expect(all).toHaveLength(1);
    expect(all.at(0).props('item')).toEqual(root0);
    expect(wrapper.find(FilterInput).props('selectedTags'))
      .toEqual([FILTER_TAGS_TO_LABELS.tutorials]);
  });

  it('does not restore the state, if the technology is different', async () => {
    sessionStorage.get.mockImplementation((key) => {
      if (key === STORAGE_KEYS.technology) return 'some-other';
      if (key === STORAGE_KEYS.nodesToRender) return [root0.uid];
      return '';
    });
    const wrapper = createWrapper();
    await flushPromises();
    // assert we are render more than just the single item in the store
    expect(wrapper.findAll(NavigatorCardItem)).toHaveLength(4);
  });

  it('does not restore the state, if the activeUID is not in the rendered items', async () => {
    sessionStorage.get.mockImplementation((key) => {
      if (key === STORAGE_KEYS.filter) return '';
      if (key === STORAGE_KEYS.technology) return defaultProps.technology;
      // simulate we have collapses all, but the top item
      if (key === STORAGE_KEYS.nodesToRender) return [root0.uid, root0Child0.uid, root0Child1.uid];
      if (key === STORAGE_KEYS.openNodes) return [root0.uid, root0Child1.uid];
      if (key === STORAGE_KEYS.selectedTags) return [];
      if (key === STORAGE_KEYS.apiChanges) return true;
      if (key === STORAGE_KEYS.activeUID) return root0Child1GrandChild0.uid;
      return '';
    });
    const wrapper = createWrapper();
    await flushPromises();
    // assert we are render more than just the single item in the store
    const all = wrapper.findAll(NavigatorCardItem);
    expect(all).toHaveLength(4);
    expect(all.at(3).props('item')).not.toEqual(root0Child1GrandChild0);
  });

  it('does not restore the state, if the nodesToRender do not match what we have', async () => {
    sessionStorage.get.mockImplementation((key) => {
      if (key === STORAGE_KEYS.technology) return defaultProps.technology;
      if (key === STORAGE_KEYS.nodesToRender) return [root0.uid, 'something-different'];
      return '';
    });
    const wrapper = createWrapper();
    await flushPromises();
    // assert we are render more than just the single item in the store
    expect(wrapper.findAll(NavigatorCardItem)).toHaveLength(4);
  });

  it('does not restore the state, if the nodesToRender and filter are empty', async () => {
    sessionStorage.get.mockImplementation((key) => {
      if (key === STORAGE_KEYS.technology) return defaultProps.technology;
      if (key === STORAGE_KEYS.nodesToRender) return [];
      if (key === STORAGE_KEYS.filter) return '';
      return '';
    });
    const wrapper = createWrapper();
    await flushPromises();
    // assert we are render more than just the single item in the store
    expect(wrapper.findAll(NavigatorCardItem)).toHaveLength(4);
  });

  it('does not restore the state, if the API changes mismatch', async () => {
    sessionStorage.get.mockImplementation((key) => {
      if (key === STORAGE_KEYS.filter) return '';
      if (key === STORAGE_KEYS.technology) return defaultProps.technology;
      // simulate we have collapses all, but the top item
      if (key === STORAGE_KEYS.nodesToRender) return [root0.uid];
      if (key === STORAGE_KEYS.openNodes) return [root0.uid];
      if (key === STORAGE_KEYS.selectedTags) return [];
      if (key === STORAGE_KEYS.apiChanges) return true;
      return '';
    });
    const wrapper = createWrapper();
    await flushPromises();
    expect(wrapper.findAll(NavigatorCardItem)).toHaveLength(4);
  });

  it('keeps the open state, if there are API changes', async () => {
    sessionStorage.get.mockImplementation((key) => {
      if (key === STORAGE_KEYS.filter) return '';
      if (key === STORAGE_KEYS.technology) return defaultProps.technology;
      // simulate we have collapses all, but the top item
      if (key === STORAGE_KEYS.nodesToRender) return [root0.uid, root0Child0.uid, root0Child1.uid];
      if (key === STORAGE_KEYS.openNodes) return [root0.uid];
      if (key === STORAGE_KEYS.selectedTags) return [];
      if (key === STORAGE_KEYS.apiChanges) return true;
      return '';
    });
    const wrapper = createWrapper({
      propsData: {
        apiChanges: {
          [root0Child0.path]: 'modified',
          [root0Child1.path]: 'modified',
        },
      },
    });
    await flushPromises();
    expect(wrapper.findAll(NavigatorCardItem)).toHaveLength(3);
  });

  it('keeps the open state, even if there is a title filter', async () => {
    sessionStorage.get.mockImplementation((key) => {
      if (key === STORAGE_KEYS.filter) return root0Child1GrandChild0.title;
      if (key === STORAGE_KEYS.technology) return defaultProps.technology;
      // simulate we have collapses all, but the top item
      if (key === STORAGE_KEYS.nodesToRender) return [root0.uid, root0Child1.uid];
      if (key === STORAGE_KEYS.openNodes) return [root0.uid];
      if (key === STORAGE_KEYS.selectedTags) return [];
      if (key === STORAGE_KEYS.apiChanges) return false;
      if (key === STORAGE_KEYS.activeUID) return root0.uid;
      return '';
    });
    const wrapper = createWrapper();
    await flushPromises();
    // assert we are render more than just whats in the store,
    // so the filter does not trigger re-calculations
    expect(wrapper.findAll(NavigatorCardItem)).toHaveLength(2);
  });

  it('keeps the open state, even if there is a Tag filter applied', async () => {
    sessionStorage.get.mockImplementation((key) => {
      if (key === STORAGE_KEYS.filter) return '';
      if (key === STORAGE_KEYS.technology) return defaultProps.technology;
      // simulate we have collapses all, but the top item
      if (key === STORAGE_KEYS.nodesToRender) return [root0.uid, root0Child1.uid];
      if (key === STORAGE_KEYS.openNodes) return [root0.uid];
      if (key === STORAGE_KEYS.selectedTags) return [FILTER_TAGS.tutorials];
      if (key === STORAGE_KEYS.apiChanges) return false;
      if (key === STORAGE_KEYS.activeUID) return root0.uid;
      return '';
    });
    const wrapper = createWrapper();
    await flushPromises();
    // assert we are render more than just whats in the store,
    // so the filter does not trigger re-calculations
    expect(wrapper.findAll(NavigatorCardItem)).toHaveLength(2);
  });

  it('removes other tag suggestions, when picking one', async () => {
    sessionStorage.get.mockImplementation((key, def) => def);
    const wrapper = createWrapper();
    await flushPromises();
    const filter = wrapper.find(FilterInput);
    expect(filter.props('tags')).toHaveLength(3);
    filter.vm.$emit('update:selectedTags', [FILTER_TAGS_TO_LABELS.articles]);
    await flushPromises();
    expect(filter.props('tags')).toEqual([]);
  });

  describe('navigating', () => {
    it('changes the open item, when navigating across pages, keeping the previously open items', async () => {
      // simulate navigating to the bottom most item
      const wrapper = createWrapper();
      wrapper.setProps({
        activePath: [
          root0.path,
          root0Child1.path,
          root0Child1GrandChild0.path,
        ],
      });
      await flushPromises();
      expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenLastCalledWith(3);
      // assert all are open
      const all = wrapper.findAll(NavigatorCardItem);
      expect(all).toHaveLength(5);
      // assert it auto opens
      expect(all.at(0).props()).toMatchObject({
        expanded: true,
        isActive: false,
        isBold: true,
        item: root0,
      });
      expect(all.at(1).props()).toMatchObject({
        expanded: true,
        isActive: false,
        isBold: false,
        item: root0Child0,
      });
      expect(all.at(2).props()).toMatchObject({
        expanded: true,
        isActive: false,
        isBold: true,
        item: root0Child1,
      });
      expect(all.at(3).props()).toMatchObject({
        expanded: true,
        isActive: true,
        isBold: true,
        item: root0Child1GrandChild0,
      });
      // navigate to the top level sibling
      wrapper.setProps({
        activePath: [
          root1.path,
        ],
      });
      await flushPromises();
      // assert it scrolls to the item
      expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenLastCalledWith(4);
      // assert items are still open
      expect(all.at(0).props()).toMatchObject({
        expanded: true,
        isActive: false,
        isBold: false,
        item: root0,
      });
      expect(all.at(1).props()).toMatchObject({
        expanded: true,
        isActive: false,
        isBold: false,
        item: root0Child0,
      });
      expect(all.at(2).props()).toMatchObject({
        expanded: true,
        isActive: false,
        isBold: false,
        item: root0Child1,
      });
      expect(all.at(3).props()).toMatchObject({
        expanded: true,
        isActive: false,
        isBold: false,
        item: root0Child1GrandChild0,
      });
      expect(all.at(4).props()).toMatchObject({
        expanded: true,
        isActive: true,
        isBold: true,
        item: root1,
      });
    });

    it('tracks current open item, from clicking child items, handling duplicate router changes on the way', async () => {
      const wrapper = createWrapper();
      await flushPromises();
      let allItems = wrapper.findAll(NavigatorCardItem);
      const targetChild = allItems.at(2);
      expect(targetChild.props('item')).toEqual(root0Child1);
      // trigger a navigation
      targetChild.vm.$emit('navigate', root0Child1.uid);
      await wrapper.vm.$nextTick();
      expect(sessionStorage.set)
        .toHaveBeenCalledWith(STORAGE_KEYS.activeUID, root0Child1.uid);
      // assert all items are still there, even the new one is open
      expect(wrapper.findAll(NavigatorCardItem)).toHaveLength(5);
      // assert the target child is active
      expect(targetChild.props()).toEqual({
        apiChange: null,
        expanded: true,
        filterPattern: null,
        isActive: true,
        isBold: true,
        isFocused: false,
        isRendered: false, // this is not passed in the mock
        item: root0Child1,
        lastFocusWasInside: false,
      });
      // assert item is scrolled to
      expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenLastCalledWith(2); // 3-rd item
      expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenCalledTimes(2);
      // now simulate the router change
      wrapper.setProps({ activePath: [root0.path, root0Child1.path] });
      await flushPromises();
      // assert its not called again
      expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenCalledTimes(2);
      // assert items have not changed
      allItems = wrapper.findAll(NavigatorCardItem);
      expect(allItems).toHaveLength(5);
      expect(allItems.at(2).props()).toEqual({
        apiChange: null,
        expanded: true,
        filterPattern: null,
        isActive: true,
        isBold: true,
        isFocused: false,
        isRendered: false, // this is not passed in the mock
        item: root0Child1,
        lastFocusWasInside: false,
      });
    });

    it('allows going back/forward, relative to last opened item, ignoring foreign trees', async () => {
      const duplicatedTree = {
        type: 'article',
        path: '/documentation/duplicated',
        title: 'Duplicated Tree',
        uid: 5,
        parent: INDEX_ROOT_KEY,
        depth: 0,
        index: 2,
        // this makes sure we have a duplicate tree segment
        childUIDs: [root0Child1],
      };
      const wrapper = createWrapper({
        propsData: {
          children: [
            ...children,
            duplicatedTree,
          ],
        },
      });
      await flushPromises();
      let allItems = wrapper.findAll(NavigatorCardItem);
      expect(allItems).toHaveLength(5);
      expect(allItems.at(1).props('item')).toEqual(root0Child0);
      expect(allItems.at(1).props('isActive')).toEqual(true);
      // navigate to the second child
      wrapper.setProps({
        activePath: [
          root0.path,
          root0Child1.path,
        ],
      });
      await wrapper.vm.$nextTick();
      // re-fetch the items
      allItems = wrapper.findAll(NavigatorCardItem);
      // assert old item is no longer active
      expect(allItems.at(1).props('item')).toEqual(root0Child0);
      expect(allItems.at(1).props('isActive')).toEqual(false);
      // assert new active item
      expect(allItems.at(2).props('item')).toEqual(root0Child1);
      expect(allItems.at(2).props('isActive')).toEqual(true);
      // navigate to the grand child
      wrapper.setProps({
        activePath: [
          root0.path,
          root0Child1.path,
          root0Child1GrandChild0.path,
        ],
      });
      await wrapper.vm.$nextTick();
      // re-fetch the items
      allItems = wrapper.findAll(NavigatorCardItem);
      expect(allItems.at(2).props('item')).toEqual(root0Child1);
      expect(allItems.at(2).props('isActive')).toEqual(false);
      // assert grandchild is active
      expect(allItems.at(3).props('item')).toEqual(root0Child1GrandChild0);
      expect(allItems.at(3).props('isActive')).toEqual(true);
      // navigate to the second child
      wrapper.setProps({
        activePath: [
          root0.path,
          root0Child1.path,
        ],
      });
      await wrapper.vm.$nextTick();
      // re-fetch the items
      allItems = wrapper.findAll(NavigatorCardItem);
      // assert old item is no longer active
      expect(allItems.at(3).props('item')).toEqual(root0Child1GrandChild0);
      expect(allItems.at(3).props('isActive')).toEqual(false);
      // assert new active item
      expect(allItems.at(2).props('item')).toEqual(root0Child1);
      expect(allItems.at(2).props('isActive')).toEqual(true);
    });
  });

  describe('scroll to item', () => {
    const itemRect = jest.fn(() => ({ y: 12 }));
    jest.spyOn(document, 'getElementById').mockReturnValue({
      getBoundingClientRect: itemRect,
    });

    it('resets the scroll position, if initiating a filter', async () => {
      const wrapper = createWrapper();
      await flushPromises();
      expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenCalledTimes(1);
      expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenLastCalledWith(1);
      // initiate a filter
      wrapper.find(FilterInput).vm.$emit('input', root0Child1.title);
      await wrapper.vm.$nextTick();
      // assert filter is applied
      expect(wrapper.findAll(NavigatorCardItem)).toHaveLength(2);
      // assert scroller has been reset
      expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenCalledTimes(2);
      expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenLastCalledWith(0);
    });

    it('keeps the scroll position, if the item is already in the viewport, on navigation', async () => {
      const wrapper = createWrapper();
      await flushPromises();
      const scroller = wrapper.find({ ref: 'scroller' });
      expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenCalledTimes(1);
      // mock the bounding rects
      const scrollerRect = jest.spyOn(scroller.element, 'getBoundingClientRect').mockReturnValue({
        y: 10,
        height: 200,
      });
      wrapper.findAll(NavigatorCardItem).at(2).vm.$emit('navigate', root0Child1.uid);
      await flushPromises();
      // make sure scrollToItem is not called, because active item is already in the viewport
      expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenCalledTimes(1);
      wrapper.findAll(NavigatorCardItem).at(3).vm.$emit('navigate', root0Child1GrandChild0.uid);
      itemRect.mockReturnValue({
        y: 200, // near the end
      });
      await flushPromises();
      // make sure scrollToItem is not called, because active item is already in the viewport
      expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenCalledTimes(1);
      // simulate header scroll
      scrollerRect.mockReturnValue({
        y: 0,
        height: 210,
      });
      wrapper.findAll(NavigatorCardItem).at(2).vm.$emit('navigate', root0Child1.uid);
      await flushPromises();
      // make sure scrollToItem is not called, because active item is already in the viewport
      expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenCalledTimes(1);
    });

    it('scrolls to item, if outside of visible viewport, on page navigation', async () => {
      const wrapper = createWrapper();
      await flushPromises();
      const scroller = wrapper.find({ ref: 'scroller' });
      expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenCalledTimes(1);
      // mock the bounding rects
      jest.spyOn(scroller.element, 'getBoundingClientRect').mockReturnValue({
        y: 10,
        height: 200,
      });
      itemRect.mockReturnValue({
        y: -20,
      });
      // scroll to the item
      wrapper.findAll(NavigatorCardItem).at(2).vm.$emit('navigate', root0Child1.uid);
      await flushPromises();
      // make sure scrollToItem is called
      expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenCalledTimes(2);
      // assert it was called for the 3-rd item
      expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenLastCalledWith(2);
      // assert scrolling beyond
      itemRect.mockReturnValue({
        y: 250,
      });
      // scroll to the item
      wrapper.findAll(NavigatorCardItem).at(2).vm.$emit('navigate', root0Child0.uid);
      await flushPromises();
      // make sure scrollToItem is called
      expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenCalledTimes(3);
      // assert it was called for the 3-rd item
      expect(RecycleScrollerStub.methods.scrollToItem).toHaveBeenLastCalledWith(1);
    });
  });

  describe('handles focus/blur state issues with the RecycleScroller', () => {
    it('keeps track of the currently focused item', async () => {
      const wrapper = createWrapper();
      await flushPromises();
      const button = wrapper.find(NavigatorCardItem).find('button');
      // should be focus, but jsdom does not propagate that
      button.trigger('focusin');
      await wrapper.vm.$nextTick();
      expect(wrapper.vm.lastFocusTarget).toEqual(button.element);
    });

    it('resets the `lastFocusTarget`, if the related target is outside the scroller', async () => {
      const wrapper = createWrapper();
      await flushPromises();
      const button = wrapper.find(NavigatorCardItem).find('button');
      // should be focus, but jsdom does not propagate that
      button.trigger('focusin');
      await wrapper.vm.$nextTick();
      button.trigger('focusout', {
        relatedTarget: document.body,
      });
      expect(wrapper.vm.lastFocusTarget).toEqual(null);
    });

    it('does not do anything, if there is no `relatedTarget`, if no relatedTarget', async () => {
      const wrapper = createWrapper();
      await flushPromises();
      const button = wrapper.find(NavigatorCardItem).find('button');
      // should be focus, but jsdom does not propagate that
      button.trigger('focusin');
      await wrapper.vm.$nextTick();
      button.trigger('focusout', {
        relatedTarget: null,
      });
      // assert we are still focusing the button
      expect(wrapper.vm.lastFocusTarget).toEqual(button.element);
    });

    it('on RecycleScroller@update, does nothing, if there is no focusTarget', async () => {
      const wrapper = createWrapper();
      await flushPromises();
      wrapper.find(RecycleScroller).vm.$emit('update');
      await flushPromises();
      expect(waitFor).toHaveBeenLastCalledWith(300);
      expect(wrapper.vm.lastFocusTarget).toEqual(null);
    });

    it('on RecycleScroller@update, does nothing, if focusTarget is outside scroller', async () => {
      const wrapper = createWrapper();
      await flushPromises();
      // Set the focus item to be something outside the scroller.
      // This might happen if it deletes an item, that was in focus
      const button = wrapper.find(NavigatorCardItem).find('button');
      // should be focus, but jsdom does not propagate that
      button.trigger('focusin');
      const focusSpy = jest.spyOn(button.element, 'focus');
      await flushPromises();
      // now make the component go away
      wrapper.setData({
        nodesToRender: [],
      });
      await flushPromises();
      // trigger an update
      wrapper.find(RecycleScroller).vm.$emit('update');
      await flushPromises();
      expect(waitFor).toHaveBeenLastCalledWith(300);
      // we may still have the lastFocusTarget, as it did not emit a focusOut
      expect(wrapper.vm.lastFocusTarget).not.toEqual(null);
      // but the spy will not be called, because its no longer in the DOM
      expect(focusSpy).toHaveBeenCalledTimes(0);
    });

    it('on RecycleScroller@update, does nothing, if `lastFocusTarget === activeElement`', async () => {
      const wrapper = createWrapper();
      await flushPromises();
      // Set the focus item to be something outside the scroller.
      // This might happen if it deletes an item, that was in focus
      const button = wrapper.find(NavigatorCardItem).find('button');
      // should be focus, but jsdom does not propagate that
      button.trigger('focusin');
      button.element.focus();
      // move the spy below the manual focus, so we dont count it
      const focusSpy = jest.spyOn(button.element, 'focus');
      await flushPromises();
      expect(document.activeElement).toEqual(button.element);
      // trigger an update
      wrapper.find(RecycleScroller).vm.$emit('update');
      await flushPromises();
      expect(wrapper.vm.lastFocusTarget).toEqual(button.element);
      expect(focusSpy).toHaveBeenCalledTimes(0);
    });

    it('on RecycleScroller@update, re-focuses the `lastFocusTarget` if not the current focus item', async () => {
      const wrapper = createWrapper();
      await flushPromises();
      // Set the focus item to be something outside the scroller.
      // This might happen if it deletes an item, that was in focus
      const button = wrapper.find(NavigatorCardItem).find('button');
      const focusSpy = jest.spyOn(button.element, 'focus');
      button.trigger('focusin');
      await flushPromises();
      // trigger an update
      wrapper.find(RecycleScroller).vm.$emit('update');
      await flushPromises();
      expect(wrapper.vm.lastFocusTarget).toEqual(button.element);
      expect(focusSpy).toHaveBeenCalledTimes(1);
    });

    it('clears the focusTarget on filter', async () => {
      const wrapper = createWrapper();
      await flushPromises();
      // Set the focus item to be something outside the scroller.
      // This might happen if it deletes an item, that was in focus
      const button = wrapper.find(NavigatorCardItem).find('button');
      // should be focus, but jsdom does not propagate that
      button.trigger('focusin');
      const focusSpy = jest.spyOn(button.element, 'focus');
      await flushPromises();
      // initiate a filter
      wrapper.find(FilterInput).vm.$emit('input', 'Child');
      await flushPromises();
      // trigger an update
      wrapper.find(RecycleScroller).vm.$emit('update');
      await flushPromises();
      expect(wrapper.vm.lastFocusTarget).toEqual(null);
      expect(focusSpy).toHaveBeenCalledTimes(0);
    });

    it('clears the focusTarget on page nav', async () => {
      const wrapper = createWrapper();
      await flushPromises();
      // Set the focus item to be something outside the scroller.
      // This might happen if it deletes an item, that was in focus
      const button = wrapper.find(NavigatorCardItem).find('button');
      // should be focus, but jsdom does not propagate that
      button.trigger('focusin');
      const focusSpy = jest.spyOn(button.element, 'focus');
      await flushPromises();
      // simulate a page nav
      wrapper.setProps({
        activePath: [root1.path],
      });
      await flushPromises();
      // trigger an update
      wrapper.find(RecycleScroller).vm.$emit('update');
      await flushPromises();
      expect(wrapper.vm.lastFocusTarget).toEqual(null);
      expect(focusSpy).toHaveBeenCalledTimes(0);
    });
  });
});
