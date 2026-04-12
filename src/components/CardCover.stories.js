/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import CardCover from './CardCover.vue';

const sampleVariants = [
  { url: 'https://via.placeholder.com/400x220', traits: ['1x', 'light'] },
  { url: 'https://via.placeholder.com/800x440', traits: ['2x', 'light'] },
];

export default {
  title: 'CardCover',
  component: CardCover,
};

const Template = (args, { argTypes }) => ({
  components: { CardCover },
  props: Object.keys(argTypes),
  template: '<CardCover v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  variants: sampleVariants,
  alt: 'Sample card cover image',
  rounded: false,
};

export const Rounded = Template.bind({});
Rounded.args = {
  variants: sampleVariants,
  alt: 'Rounded card cover',
  rounded: true,
};

export const EmptyVariants = Template.bind({});
EmptyVariants.args = {
  variants: [],
  alt: 'No image available',
  rounded: false,
};
