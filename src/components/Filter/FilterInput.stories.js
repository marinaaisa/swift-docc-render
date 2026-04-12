/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import FilterInput from './FilterInput.vue';

export default {
  title: 'Filter/FilterInput',
  component: FilterInput,
};

const Template = (args, { argTypes }) => ({
  components: { FilterInput },
  props: Object.keys(argTypes),
  template: '<FilterInput v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  value: '',
  tags: ['Swift', 'SwiftUI', 'UIKit', 'AppKit', 'Combine'],
  selectedTags: [],
  placeholder: 'Filter',
  disabled: false,
};

export const WithSelectedTags = Template.bind({});
WithSelectedTags.args = {
  value: '',
  tags: ['Swift', 'SwiftUI', 'UIKit', 'AppKit', 'Combine'],
  selectedTags: ['SwiftUI', 'Combine'],
  placeholder: 'Filter',
  disabled: false,
};

export const WithInputValue = Template.bind({});
WithInputValue.args = {
  value: 'Swift',
  tags: ['Swift', 'SwiftUI', 'UIKit', 'AppKit', 'Combine'],
  selectedTags: [],
  placeholder: 'Filter',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: '',
  tags: ['Swift', 'SwiftUI', 'UIKit', 'AppKit'],
  selectedTags: [],
  placeholder: 'Filter',
  disabled: true,
};

export const PositionReversed = Template.bind({});
PositionReversed.args = {
  value: '',
  tags: ['Swift', 'SwiftUI', 'UIKit', 'AppKit', 'Combine'],
  selectedTags: [],
  placeholder: 'Filter',
  positionReversed: true,
};

export const NoBorderStyle = Template.bind({});
NoBorderStyle.args = {
  value: '',
  tags: ['Swift', 'SwiftUI', 'UIKit'],
  selectedTags: [],
  placeholder: 'Search…',
  preventBorderStyle: true,
};

export const WithTruncatedTags = Template.bind({});
WithTruncatedTags.args = {
  value: '',
  tags: ['Swift', 'SwiftUI', 'UIKit', 'AppKit', 'Combine', 'StoreKit', 'ARKit', 'RealityKit'],
  selectedTags: [],
  placeholder: 'Filter',
  shouldTruncateTags: true,
};
