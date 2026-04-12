/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import InlineImage from './InlineImage.vue';

export default {
  title: 'ContentNode/InlineImage',
  component: InlineImage,
};

const Template = (args, { argTypes }) => ({
  components: { InlineImage },
  props: Object.keys(argTypes),
  template: '<InlineImage v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  alt: 'A Swift logo',
  variants: [
    {
      traits: ['1x', 'light'],
      url: 'https://via.placeholder.com/200x100/F05138/ffffff?text=1x',
      size: { width: 200, height: 100 },
    },
  ],
};

export const WithMultipleVariants = Template.bind({});
WithMultipleVariants.args = {
  alt: 'Feature diagram',
  variants: [
    {
      traits: ['1x', 'light'],
      url: 'https://via.placeholder.com/300x150/4A90D9/ffffff?text=1x+light',
      size: { width: 300, height: 150 },
    },
    {
      traits: ['2x', 'light'],
      url: 'https://via.placeholder.com/600x300/4A90D9/ffffff?text=2x+light',
      size: { width: 600, height: 300 },
    },
    {
      traits: ['1x', 'dark'],
      url: 'https://via.placeholder.com/300x150/1a1a2e/ffffff?text=1x+dark',
      size: { width: 300, height: 150 },
    },
  ],
};
