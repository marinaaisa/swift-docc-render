/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import * as dataUtils from 'docc-render/utils/data';
import { shallowMount } from '@vue/test-utils';
import DocumentationTopicStore from 'docc-render/stores/DocumentationTopicStore';
import onPageLoadScrollToFragment from 'docc-render/mixins/onPageLoadScrollToFragment';
import DocumentationNav from 'docc-render/components/DocumentationTopic/DocumentationNav.vue';
import NavBase from 'docc-render/components/NavBase.vue';
import AdjustableSidebarWidth from '@/components/AdjustableSidebarWidth.vue';
import NavigatorDataProvider from '@/components/Navigator/NavigatorDataProvider.vue';
import Language from '@/constants/Language';
import Navigator from '@/components/Navigator.vue';
import { storage } from '@/utils/storage';
import { BreakpointName } from 'docc-render/utils/breakpoints';
import StaticContentWidth from 'docc-render/components/DocumentationTopic/StaticContentWidth.vue';
import NavigatorLayout from 'docc-render/components/NavigatorLayout.vue';
import { getSetting } from 'docc-render/utils/theme-settings';
import { flushPromises } from '../../../test-utils';

jest.mock('docc-render/mixins/onPageLoadScrollToFragment');
jest.mock('docc-render/utils/FocusTrap');
jest.mock('docc-render/utils/scroll-lock');
jest.mock('docc-render/utils/storage');
jest.mock('docc-render/utils/theme-settings');

const TechnologyWithChildren = {
  path: '/documentation/foo',
  children: [],
};

const navigatorReferences = { foo: {} };

jest.spyOn(dataUtils, 'fetchIndexPathsData').mockResolvedValue({
  interfaceLanguages: {
    [Language.swift.key.url]: [TechnologyWithChildren, { path: 'another/technology' }],
  },
  references: navigatorReferences,
});
getSetting.mockReturnValue(false);

const {
  CodeTheme,
  Nav,
  QuickNavigationModal,
} = NavigatorLayout.components;
const { NAVIGATOR_HIDDEN_ON_LARGE_KEY } = NavigatorLayout.constants;

const TechnologiesRootIdentifier = 'topic://technologies';

const references = {
  [TechnologiesRootIdentifier]: { kind: 'technologies', url: '/documentation/technologies' },
  'topic://foo': { title: 'FooTechnology', url: '/documentation/foo' },
  'topic://bar': { title: 'BarTechnology', url: '/documentation/bar' },
};

const mocks = {
  $bridge: {
    on: jest.fn(),
    off: jest.fn(),
    send: jest.fn(),
  },
  $route: {
    path: '/documentation/somepath',
    params: {
      locale: 'en-US',
    },
    query: {
      changes: 'latest_minor',
    },
  },
};

const propsData = {
  interfaceLanguage: 'swift',
  isSymbolDeprecated: false,
  isSymbolBeta: false,
  parentTopicIdentifiers: [
    'topic://foo',
    'topic://bar',
  ],
  references,
  technology: references['topic://foo'],
  enableNavigator: false,
  objcPath: 'documentation/objc',
  swiftPath: 'documentation/swift',
};

const AdjustableSidebarWidthSmallStub = {
  render() {
    return this.$scopedSlots.aside({
      scrollLockID: AdjustableSidebarWidth.constants.SCROLL_LOCK_ID,
      breakpoint: BreakpointName.small,
    });
  },
};

const stubs = {
  AdjustableSidebarWidth,
  NavigatorDataProvider,
  NavigatorLayout,
};

const provide = { isTargetIDE: false };

const createWrapper = props => shallowMount(NavigatorLayout, {
  propsData,
  stubs,
  provide,
  mocks,
  ...props,
});

describe('NavigatorLayout', () => {
  /** @type {import('@vue/test-utils').Wrapper} */
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = createWrapper();
  });

  afterEach(() => {
    window.renderedTimes = null;
  });

  it('calls the onPageLoadScrollToFragment mixin', () => {
    expect(onPageLoadScrollToFragment.mounted).toHaveBeenCalled();
  });

  it('provides a global store', () => {
    // eslint-disable-next-line no-underscore-dangle
    expect(wrapper.vm._provided.store).toEqual(DocumentationTopicStore);
  });

  it('renders an CodeTheme', () => {
    const codeTheme = wrapper.find(CodeTheme);
    expect(codeTheme.exists()).toBe(true);
  });

  it('renders the Navigator and AdjustableSidebarWidth when enabled', async () => {
    wrapper.setProps({
      enableNavigator: true,
    });

    const adjustableWidth = wrapper.find(AdjustableSidebarWidth);
    expect(adjustableWidth.classes())
      .toEqual(expect.arrayContaining(['full-width-container', 'topic-wrapper']));
    expect(adjustableWidth.props()).toEqual({
      shownOnMobile: false,
      hiddenOnLarge: false,
      fixedWidth: null,
    });
    const {
      technology,
      parentTopicIdentifiers,
    } = propsData;
    expect(wrapper.find(NavigatorDataProvider).props()).toEqual({
      interfaceLanguage: Language.swift.key.url,
      technologyUrl: technology.url,
      apiChangesVersion: null,
    });
    // its rendered by default
    const navigator = wrapper.find(Navigator);
    expect(navigator.exists()).toBe(true);
    expect(navigator.props()).toEqual({
      errorFetching: false,
      isFetching: true,
      // assert we are passing the first set of paths always
      parentTopicIdentifiers,
      references,
      scrollLockID: AdjustableSidebarWidth.constants.SCROLL_LOCK_ID,
      // assert we are passing the default technology, if we dont have the children yet
      technology,
      apiChanges: null,
      flatChildren: [],
      navigatorReferences: {},
      renderFilterOnTop: false,
    });
    expect(dataUtils.fetchIndexPathsData).toHaveBeenCalledTimes(1);
    await flushPromises();
    expect(navigator.props()).toEqual({
      errorFetching: false,
      isFetching: false,
      scrollLockID: AdjustableSidebarWidth.constants.SCROLL_LOCK_ID,
      renderFilterOnTop: false,
      parentTopicIdentifiers,
      references,
      technology: TechnologyWithChildren,
      apiChanges: null,
      flatChildren: [],
      navigatorReferences,
    });
    // assert the nav is in wide format
    const nav = wrapper.find(Nav);
    expect(nav.props('displaySidenav')).toBe(true);
  });

  it('renders QuickNavigation if enableQuickNavigation is true', () => {
    getSetting.mockReturnValueOnce(true);
    wrapper = createWrapper({
      stubs: {
        ...stubs,
        Nav: DocumentationNav,
        NavBase,
      },
    });

    wrapper.setProps({
      enableNavigator: true,
    });

    const quickNavigationModalComponent = wrapper.find(QuickNavigationModal);
    expect(quickNavigationModalComponent.exists()).toBe(true);
  });

  it('does not render QuickNavigation if enableQuickNavigation is false', () => {
    wrapper = createWrapper({
      stubs: {
        ...stubs,
        Nav: DocumentationNav,
        NavBase,
      },
    });

    wrapper.setProps({
      enableNavigator: true,
    });

    const quickNavigationModalComponent = wrapper.find(QuickNavigationModal);
    expect(quickNavigationModalComponent.exists()).toBe(false);
  });

  it('does not render QuickNavigation and MagnifierIcon if enableNavigation is false', () => {
    getSetting.mockReturnValueOnce(true);
    wrapper = createWrapper({
      stubs: {
        ...stubs,
        Nav: DocumentationNav,
        NavBase,
      },
    });

    const quickNavigationModalComponent = wrapper.find(QuickNavigationModal);
    expect(quickNavigationModalComponent.exists()).toBe(false);
  });

  it('does not render QuickNavigation if enableQuickNavigation is true but IDE is being targeted', () => {
    getSetting.mockReturnValueOnce(true);
    wrapper = createWrapper({
      provide: { isTargetIDE: true },
      stubs: {
        ...stubs,
        Nav: DocumentationNav,
        NavBase,
      },
    });

    wrapper.setProps({
      enableNavigator: true,
    });

    const quickNavigationModalComponent = wrapper.find(QuickNavigationModal);
    expect(quickNavigationModalComponent.exists()).toBe(false);
  });

  describe('if breakpoint is small', () => {
    beforeEach(() => {
      wrapper = createWrapper({
        stubs: {
          AdjustableSidebarWidth: AdjustableSidebarWidthSmallStub,
          NavigatorDataProvider,
        },
      });
    });

    it('applies display none to Navigator if is closed', async () => {
      // renders a closed navigator
      wrapper.setProps({
        enableNavigator: true,
      });
      await wrapper.vm.$nextTick();
      // assert navigator has display: none
      expect(wrapper.find(Navigator).attributes('style')).toContain('display: none');
    });

    it('reverses the filter position of the navigator', async () => {
      // renders a closed navigator
      wrapper.setProps({
        enableNavigator: true,
      });
      await wrapper.vm.$nextTick();
      // assert navigator has display: none
      expect(wrapper.find(Navigator).props('renderFilterOnTop')).toBe(true);
    });

    it('does not apply display none to Navigator if is open', async () => {
      // renders an open navigator
      wrapper.setData({
        sidenavVisibleOnMobile: true,
      });
      wrapper.setProps({
        enableNavigator: true,
      });
      await wrapper.vm.$nextTick();
      // assert navigator doesn't have display: none
      expect(wrapper.find(Navigator).attributes('style')).toBeFalsy();
    });
  });

  it('provides the selected api changes, to the NavigatorDataProvider', () => {
    wrapper.vm.store.state.selectedAPIChangesVersion = 'latest_major';
    wrapper.setProps({
      enableNavigator: true,
    });
    const dataProvider = wrapper.find(NavigatorDataProvider);
    expect(dataProvider.props('apiChangesVersion')).toEqual('latest_major');
  });

  it('renders the Navigator with data when no reference is found for a top-level item', () => {
    const technologies = {
      id: 'topic://not-existing',
      title: 'Technologies',
      url: '/technologies',
      kind: 'technologies',
    };

    wrapper.setProps({
      enableNavigator: true,
      parentTopicIdentifiers: [
        technologies.id,
        'topic://bar',
      ],
    });

    const navigator = wrapper.find(Navigator);
    expect(navigator.exists()).toBe(true);
    // assert the technology is the last fallback
    expect(navigator.props('technology')).toEqual({
      title: 'FooTechnology',
      url: '/documentation/foo',
    });
  });

  it('renders the Navigator with data when no reference is found, even when there is a reference data error', () => {
    const technologies = {
      id: 'topic://not-existing',
      title: 'Technologies',
      url: '/technologies',
      kind: 'technologies',
    };

    wrapper.setProps({
      enableNavigator: true,
      parentTopicIdentifiers: [
        technologies.id,
        'topic://bar',
      ],
      // simulate reference data error
      references: {},
    });

    const navigator = wrapper.find(Navigator);
    expect(navigator.exists()).toBe(true);
    // assert the technology is the last fallback
    expect(navigator.props('technology')).toEqual({
      title: 'FooTechnology',
      url: '/documentation/foo',
    });
  });

  it('renders the Navigator with data when no hierarchy and reference is found for the current page', () => {
    wrapper.setProps({
      enableNavigator: true,
      parentTopicIdentifiers: [],
      references: {},
    });

    const navigator = wrapper.find(Navigator);
    expect(navigator.exists()).toBe(true);
    // assert the technology is the last fallback
    expect(navigator.props('technology')).toEqual(propsData.technology);
  });

  it('renders without a sidebar', () => {
    // assert the Nav
    const nav = wrapper.find(Nav);
    expect(nav.props()).toEqual({
      isDark: false,
      hasNoBorder: false,
      displaySidenav: false,
      interfaceLanguage: propsData.interfaceLanguage,
      objcPath: propsData.objcPath,
      swiftPath: propsData.swiftPath,
    });
    expect(nav.attributes()).toMatchObject({
      interfacelanguage: 'swift',
      objcpath: propsData.objcPath,
      swiftpath: propsData.swiftPath,
    });

    // assert the sidebar
    expect(wrapper.find(AdjustableSidebarWidth).exists()).toBe(false);
    const staticContentWidth = wrapper.find(StaticContentWidth);
    expect(staticContentWidth.exists()).toBe(true);
    expect(wrapper.find(Navigator).exists()).toBe(false);
    // assert the proper container class is applied
    expect(staticContentWidth.classes())
      .toEqual(expect.arrayContaining(['topic-wrapper', 'full-width-container']));
  });

  it('renders without NavigatorDataProvider', async () => {
    expect(wrapper.find(NavigatorDataProvider).exists()).toBe(false);
  });

  it('handles the `@close`, on Navigator, for Mobile breakpoints', async () => {
    wrapper.setProps({
      enableNavigator: true,
    });
    await flushPromises();
    const navigator = wrapper.find(Navigator);
    const nav = wrapper.find(Nav);
    // toggle the navigator from the Nav component, in Small breakpoint
    nav.vm.$emit('toggle-sidenav', BreakpointName.small);
    const sidebar = wrapper.find(AdjustableSidebarWidth);
    // set the breakpoint to small on the sidebar
    sidebar.vm.breakpoint = BreakpointName.small;
    expect(sidebar.props('shownOnMobile')).toBe(true);
    await flushPromises();
    navigator.vm.$emit('close');
    expect(sidebar.props('shownOnMobile')).toBe(false);
    // Test that Medium works with the same set of props/events
    // toggle the navigator from the Nav component, in Medium breakpoint
    nav.vm.$emit('toggle-sidenav', BreakpointName.medium);
    expect(sidebar.props('shownOnMobile')).toBe(true);
    await flushPromises();
    sidebar.vm.breakpoint = BreakpointName.medium;
    navigator.vm.$emit('close');
    expect(sidebar.props('shownOnMobile')).toBe(false);
    expect(storage.set).toHaveBeenCalledTimes(0);
  });

  it('handles the `@close`, on Navigator, for `Large` breakpoints', async () => {
    wrapper.setProps({
      enableNavigator: true,
    });
    await flushPromises();
    const sidebar = wrapper.find(AdjustableSidebarWidth);
    const nav = wrapper.find(Nav);
    // close the navigator
    wrapper.find(Navigator).vm.$emit('close');
    // assert its closed on Large
    expect(sidebar.props('hiddenOnLarge')).toBe(true);
    // now toggle it back from the Nav
    nav.vm.$emit('toggle-sidenav', BreakpointName.large);
    await flushPromises();
    // assert its no longer hidden
    expect(sidebar.props('hiddenOnLarge')).toBe(false);
  });

  it('handles `@toggle-sidenav` on Nav, for `Large` breakpoint', async () => {
    // assert that the storage was called to get the navigator closed state from LS
    expect(storage.get).toHaveBeenCalledTimes(1);
    expect(storage.get).toHaveBeenCalledWith(NAVIGATOR_HIDDEN_ON_LARGE_KEY, false);

    wrapper.setProps({
      enableNavigator: true,
    });
    await flushPromises();
    const nav = wrapper.find(Nav);
    const sidebar = wrapper.find(AdjustableSidebarWidth);
    // assert the hidden prop is false
    expect(sidebar.props('hiddenOnLarge')).toBe(false);
    // Now close from the sidebar
    sidebar.vm.$emit('update:hiddenOnLarge', true);
    expect(sidebar.props('hiddenOnLarge')).toBe(true);
    expect(storage.set).toHaveBeenLastCalledWith(NAVIGATOR_HIDDEN_ON_LARGE_KEY, true);
    // now toggle it back, from within the Nav button
    nav.vm.$emit('toggle-sidenav', BreakpointName.large);
    // assert we are storing the updated values
    expect(sidebar.props('hiddenOnLarge')).toBe(false);
    expect(storage.set).toHaveBeenLastCalledWith(NAVIGATOR_HIDDEN_ON_LARGE_KEY, false);
  });

  describe('isTargetIDE', () => {
    const provideWithIDETarget = { isTargetIDE: true };

    it('does not render a `Nav`', () => {
      wrapper = createWrapper({ provide: provideWithIDETarget });
      expect(wrapper.contains(Nav)).toBe(false);
    });

    it('does not render an AdjustableSidebarWidth', () => {
      wrapper = createWrapper({ provide: provideWithIDETarget });
      expect(wrapper.find(AdjustableSidebarWidth).exists()).toBe(false);
    });
  });
});
