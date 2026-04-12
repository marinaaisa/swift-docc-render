/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import MobileCodePreviewToggle from './MobileCodePreviewToggle.vue';

export default {
  title: 'Tutorial/MobileCodePreviewToggle',
  component: MobileCodePreviewToggle,
};

const Template = (args, { argTypes }) => ({
  components: { MobileCodePreviewToggle },
  props: Object.keys(argTypes),
  template: '<MobileCodePreviewToggle v-bind="$props" />',
});

export const Actionable = Template.bind({});
Actionable.args = {
  isActionable: true,
};

export const NotActionable = Template.bind({});
NotActionable.args = {
  isActionable: false,
};
