/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import ImageAsset from './ImageAsset.vue';

const lightVariants = [
  { url: 'https://via.placeholder.com/300x200', traits: ['1x', 'light'] },
  { url: 'https://via.placeholder.com/600x400', traits: ['2x', 'light'] },
];

const darkVariants = [
  { url: 'https://via.placeholder.com/300x200/333/fff', traits: ['1x', 'dark'] },
  { url: 'https://via.placeholder.com/600x400/333/fff', traits: ['2x', 'dark'] },
];

export default {
  title: 'ImageAsset',
  component: ImageAsset,
};

const Template = (args, { argTypes }) => ({
  components: { ImageAsset },
  props: Object.keys(argTypes),
  template: '<ImageAsset v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  variants: lightVariants,
  alt: 'A placeholder image',
  shouldCalculateOptimalWidth: false,
};

export const WithDarkVariant = Template.bind({});
WithDarkVariant.args = {
  variants: [...lightVariants, ...darkVariants],
  alt: 'An image with dark mode variant',
  shouldCalculateOptimalWidth: false,
};

export const NoAlt = Template.bind({});
NoAlt.args = {
  variants: lightVariants,
  alt: '',
  shouldCalculateOptimalWidth: false,
};
