/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import TagList from './TagList.vue';

export default {
  title: 'Filter/TagList',
  component: TagList,
};

const Template = (args, { argTypes }) => ({
  components: { TagList },
  props: Object.keys(argTypes),
  template: '<TagList v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  tags: ['Swift', 'SwiftUI', 'UIKit'],
  activeTags: [],
  ariaLabel: 'Suggested tags',
  id: 'suggested-tags',
  input: '',
  areTagsRemovable: false,
};

export const Removable = Template.bind({});
Removable.args = {
  tags: ['SwiftUI', 'Combine'],
  activeTags: [],
  ariaLabel: 'Selected tags',
  id: 'selected-tags',
  input: '',
  areTagsRemovable: true,
};

export const WithActiveTags = Template.bind({});
WithActiveTags.args = {
  tags: ['Swift', 'SwiftUI', 'UIKit', 'AppKit'],
  activeTags: ['SwiftUI', 'AppKit'],
  ariaLabel: 'Suggested tags',
  id: 'suggested-tags',
  input: '',
  areTagsRemovable: false,
};

export const ManyTags = Template.bind({});
ManyTags.args = {
  tags: ['Swift', 'SwiftUI', 'UIKit', 'AppKit', 'Combine', 'StoreKit', 'ARKit', 'RealityKit', 'CoreData', 'CloudKit'],
  activeTags: [],
  ariaLabel: 'Suggested tags',
  id: 'suggested-tags',
  input: '',
  areTagsRemovable: false,
};

export const WithFilterText = Template.bind({});
WithFilterText.args = {
  tags: ['Swift', 'SwiftUI', 'UIKit'],
  activeTags: [],
  ariaLabel: 'Suggested tags',
  id: 'suggested-tags',
  input: 'Swift',
  areTagsRemovable: false,
};
