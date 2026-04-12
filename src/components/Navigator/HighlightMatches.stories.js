/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import HighlightMatches from './HighlightMatches.vue';

export default {
  title: 'Navigator/HighlightMatches',
  component: HighlightMatches,
};

const Template = (args, { argTypes }) => ({
  components: { HighlightMatches },
  props: Object.keys(argTypes),
  template: '<HighlightMatches v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  text: 'NavigationBar',
  matcher: undefined,
};

export const WithHighlight = Template.bind({});
WithHighlight.args = {
  text: 'NavigationBar',
  matcher: /nav/i,
};

export const MultipleMatches = Template.bind({});
MultipleMatches.args = {
  text: 'URLSession configuration',
  matcher: /url|con/gi,
};
