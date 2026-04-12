/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import QuickNavigationHighlighter from './QuickNavigationHighlighter.vue';

export default {
  title: 'Navigator/QuickNavigationHighlighter',
  component: QuickNavigationHighlighter,
};

const Template = (args, { argTypes }) => ({
  components: { QuickNavigationHighlighter },
  props: Object.keys(argTypes),
  template: '<QuickNavigationHighlighter v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  text: 'NavigationBar',
  matcherText: '',
};

export const WithMatch = Template.bind({});
WithMatch.args = {
  text: 'NavigationBar',
  matcherText: 'nb',
};

export const FullMatch = Template.bind({});
FullMatch.args = {
  text: 'URLSession',
  matcherText: 'urls',
};
