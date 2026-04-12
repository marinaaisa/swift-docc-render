/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import QuickNavigationButton from './QuickNavigationButton.vue';

export default {
  title: 'Navigator/QuickNavigationButton',
  component: QuickNavigationButton,
};

const Template = (args, { argTypes }) => ({
  components: { QuickNavigationButton },
  props: Object.keys(argTypes),
  template: '<QuickNavigationButton v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {};
