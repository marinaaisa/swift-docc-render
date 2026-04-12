/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import ReferenceInternalSymbol from './ReferenceInternalSymbol.vue';

export default {
  title: 'ContentNode/ReferenceInternalSymbol',
  component: ReferenceInternalSymbol,
};

const Template = (args, { argTypes }) => ({
  components: { ReferenceInternalSymbol },
  props: Object.keys(argTypes),
  template: '<ReferenceInternalSymbol v-bind="$props">View.body</ReferenceInternalSymbol>',
});

export const Default = Template.bind({});
Default.args = {
  url: '/documentation/swiftui/view/body',
  isActive: true,
};

export const Inactive = Template.bind({});
Inactive.args = {
  url: '/documentation/swiftui/view/body',
  isActive: false,
};
Inactive.storyName = 'Inactive (renders as code span)';
