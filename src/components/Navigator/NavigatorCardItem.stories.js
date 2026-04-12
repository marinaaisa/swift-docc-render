/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import NavigatorCardItem from './NavigatorCardItem.vue';

// NavigatorCardItem uses IdState from vue-virtual-scroller which requires a
// virtualizer context. Wrap it so the component renders without errors.
export default {
  title: 'Navigator/NavigatorCardItem',
  component: NavigatorCardItem,
};

const leafItem = {
  uid: 101,
  type: 'func',
  path: '/documentation/mykit/init',
  title: 'init()',
  depth: 0,
  index: 0,
  parent: 'root',
  childUIDs: [],
  siblingsCount: 3,
};

const parentItem = {
  uid: 200,
  type: 'class',
  path: '/documentation/mykit/myclass',
  title: 'MyClass',
  depth: 0,
  index: 0,
  parent: 'root',
  childUIDs: [201, 202],
  siblingsCount: 1,
};

const groupMarkerItem = {
  uid: 300,
  type: 'groupMarker',
  path: '',
  title: 'Instance Methods',
  depth: 1,
  index: 0,
  parent: 200,
  childUIDs: [],
  siblingsCount: 1,
};

const Template = (args, { argTypes }) => ({
  components: { NavigatorCardItem },
  props: Object.keys(argTypes),
  template: '<NavigatorCardItem v-bind="$props" />',
});

export const LeafItem = Template.bind({});
LeafItem.args = {
  item: leafItem,
  isRendered: true,
  expanded: false,
  isActive: false,
  isBold: false,
  isFocused: false,
  enableFocus: true,
  filterPattern: undefined,
  filterText: null,
  apiChange: null,
  navigatorReferences: {},
};

export const ParentItem = Template.bind({});
ParentItem.args = {
  item: parentItem,
  isRendered: true,
  expanded: false,
  isActive: false,
  isBold: false,
  isFocused: false,
  enableFocus: true,
  filterPattern: undefined,
  filterText: null,
  apiChange: null,
  navigatorReferences: {},
};

export const ExpandedParent = Template.bind({});
ExpandedParent.args = {
  ...ParentItem.args,
  expanded: true,
  isActive: true,
  isBold: true,
};

export const GroupMarker = Template.bind({});
GroupMarker.args = {
  item: groupMarkerItem,
  isRendered: true,
  expanded: false,
  isActive: false,
  isBold: false,
  isFocused: false,
  enableFocus: true,
  filterPattern: undefined,
  filterText: null,
  apiChange: null,
  navigatorReferences: {},
};

export const WithApiChange = Template.bind({});
WithApiChange.args = {
  ...LeafItem.args,
  apiChange: 'modified',
};

export const BetaItem = Template.bind({});
BetaItem.args = {
  item: { ...leafItem, beta: true },
  isRendered: true,
  expanded: false,
  isActive: false,
  isBold: false,
  isFocused: false,
  enableFocus: true,
  filterPattern: undefined,
  filterText: null,
  apiChange: null,
  navigatorReferences: {},
};

export const DeprecatedItem = Template.bind({});
DeprecatedItem.args = {
  item: { ...leafItem, deprecated: true },
  isRendered: true,
  expanded: false,
  isActive: false,
  isBold: false,
  isFocused: false,
  enableFocus: true,
  filterPattern: undefined,
  filterText: null,
  apiChange: null,
  navigatorReferences: {},
};
