/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import StrikeThrough from './StrikeThrough.vue';

export default {
  title: 'ContentNode/StrikeThrough',
  component: StrikeThrough,
};

const Template = (args, { argTypes }) => ({
  components: { StrikeThrough },
  props: Object.keys(argTypes),
  template: '<p>This API is <StrikeThrough v-bind="$props">deprecated in iOS 14</StrikeThrough> and replaced with a newer alternative.</p>',
});

export const Default = Template.bind({});
Default.args = {};

export const Standalone = (args, { argTypes }) => ({
  components: { StrikeThrough },
  props: Object.keys(argTypes),
  template: '<StrikeThrough>Removed feature — no longer supported</StrikeThrough>',
});
Standalone.args = {};
