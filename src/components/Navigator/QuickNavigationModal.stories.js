/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import QuickNavigationModal from './QuickNavigationModal.vue';
import { INDEX_ROOT_KEY } from 'docc-render/constants/sidebar';

export default {
  title: 'Navigator/QuickNavigationModal',
  component: QuickNavigationModal,
};

const children = [
  {
    uid: 1,
    type: 'collection',
    path: '/documentation/mykit',
    title: 'MyKit',
    depth: 0,
    index: 0,
    parent: INDEX_ROOT_KEY,
    childUIDs: [2, 3],
    siblingsCount: 1,
  },
  {
    uid: 2,
    type: 'class',
    path: '/documentation/mykit/myclass',
    title: 'MyClass',
    depth: 1,
    index: 0,
    parent: 1,
    childUIDs: [],
    siblingsCount: 2,
  },
  {
    uid: 3,
    type: 'func',
    path: '/documentation/mykit/init',
    title: 'init(value:)',
    depth: 1,
    index: 1,
    parent: 1,
    childUIDs: [],
    siblingsCount: 2,
  },
];

const Template = (args, { argTypes }) => ({
  components: { QuickNavigationModal },
  props: Object.keys(argTypes),
  template: '<QuickNavigationModal v-bind="$props" @update:showQuickNavigationModal="showQuickNavigationModal = $event" />',
});

export const Visible = Template.bind({});
Visible.args = {
  children,
  showQuickNavigationModal: true,
  technology: 'MyKit',
  placeholder: undefined,
};

export const WithCustomPlaceholder = Template.bind({});
WithCustomPlaceholder.args = {
  children,
  showQuickNavigationModal: true,
  technology: 'MyKit',
  placeholder: 'Search symbols…',
};
