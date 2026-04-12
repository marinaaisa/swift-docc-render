/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import ColorSchemeToggle from './ColorSchemeToggle.vue';

export default {
  title: 'ColorSchemeToggle',
  component: ColorSchemeToggle,
};

const Template = (args, { argTypes }) => ({
  components: { ColorSchemeToggle },
  props: Object.keys(argTypes),
  template: '<ColorSchemeToggle v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {};
