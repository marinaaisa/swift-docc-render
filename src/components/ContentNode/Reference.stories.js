/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Reference from './Reference.vue';

export default {
  title: 'ContentNode/Reference',
  component: Reference,
};

const Template = (args, { argTypes }) => ({
  components: { Reference },
  props: Object.keys(argTypes),
  template: '<Reference v-bind="$props">View the full documentation</Reference>',
});

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  url: 'https://developer.apple.com/documentation/swiftui',
  isActive: true,
};

export const InactiveLink = Template.bind({});
InactiveLink.args = {
  url: 'https://developer.apple.com/documentation/swiftui',
  isActive: false,
};
InactiveLink.storyName = 'Inactive (renders as span)';

export const NoUrl = Template.bind({});
NoUrl.args = {
  isActive: true,
};
NoUrl.storyName = 'No URL (renders as span)';
