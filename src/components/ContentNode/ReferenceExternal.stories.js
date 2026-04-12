/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import ReferenceExternal from './ReferenceExternal.vue';

export default {
  title: 'ContentNode/ReferenceExternal',
  component: ReferenceExternal,
};

const Template = (args, { argTypes }) => ({
  components: { ReferenceExternal },
  props: Object.keys(argTypes),
  template: '<ReferenceExternal v-bind="$props">Apple Developer</ReferenceExternal>',
});

export const Default = Template.bind({});
Default.args = {
  url: 'https://developer.apple.com',
  isActive: true,
};

export const Inactive = Template.bind({});
Inactive.args = {
  url: 'https://developer.apple.com',
  isActive: false,
};
Inactive.storyName = 'Inactive (renders as span)';
