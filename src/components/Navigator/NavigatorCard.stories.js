/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import NavigatorCard from './NavigatorCard.vue';
import { INDEX_ROOT_KEY } from 'docc-render/constants/sidebar';

export default {
  title: 'Navigator/NavigatorCard',
  component: NavigatorCard,
};

const root = {
  uid: 1,
  type: 'collection',
  path: '/documentation/mykit',
  title: 'MyKit',
  depth: 0,
  index: 0,
  parent: INDEX_ROOT_KEY,
  childUIDs: [2, 3],
  siblingsCount: 1,
};

const child1 = {
  uid: 2,
  type: 'class',
  path: '/documentation/mykit/myclass',
  title: 'MyClass',
  depth: 1,
  index: 0,
  parent: 1,
  childUIDs: [],
  siblingsCount: 2,
};

const child2 = {
  uid: 3,
  type: 'func',
  path: '/documentation/mykit/myfunc',
  title: 'myFunc()',
  depth: 1,
  index: 1,
  parent: 1,
  childUIDs: [],
  siblingsCount: 2,
};

const children = [root, child1, child2];

const Template = (args, { argTypes }) => ({
  components: { NavigatorCard },
  props: Object.keys(argTypes),
  template: '<div style="width: 300px; height: 600px; position: relative;"><NavigatorCard v-bind="$props" /></div>',
});

export const Default = Template.bind({});
Default.args = {
  technology: 'MyKit',
  technologyPath: '/documentation/mykit',
  children,
  activePath: ['/documentation/mykit'],
  type: 'collection',
  scrollLockID: 'nav-scroll',
  errorFetching: false,
  apiChanges: null,
  isTechnologyBeta: false,
  navigatorReferences: {},
  renderFilterOnTop: false,
  hideAvailableTags: false,
};

export const Beta = Template.bind({});
Beta.args = {
  ...Default.args,
  isTechnologyBeta: true,
};

export const ErrorFetching = Template.bind({});
ErrorFetching.args = {
  ...Default.args,
  errorFetching: true,
};

export const FilterOnTop = Template.bind({});
FilterOnTop.args = {
  ...Default.args,
  renderFilterOnTop: true,
};
