/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import ReferenceInternal from './ReferenceInternal.vue';

export default {
  title: 'ContentNode/ReferenceInternal',
  component: ReferenceInternal,
};

const Template = (args, { argTypes }) => ({
  components: { ReferenceInternal },
  props: Object.keys(argTypes),
  template: '<ReferenceInternal v-bind="$props">SwiftUI Documentation</ReferenceInternal>',
});

export const Default = Template.bind({});
Default.args = {
  url: '/documentation/swiftui',
  isActive: true,
};

export const Inactive = Template.bind({});
Inactive.args = {
  url: '/documentation/swiftui',
  isActive: false,
};
Inactive.storyName = 'Inactive (renders as span)';
