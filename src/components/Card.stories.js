/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Card from './Card.vue';

const references = {
  'card-image': {
    type: 'image',
    alt: 'Card cover image',
    variants: [
      { url: 'https://via.placeholder.com/400x220', traits: ['1x', 'light'] },
    ],
  },
};

export default {
  title: 'Card',
  component: Card,
};

const Template = (args, { argTypes }) => ({
  components: { Card },
  props: Object.keys(argTypes),
  provide: { references },
  template: '<Card v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Getting Started with Swift',
  url: '/documentation/swift',
  eyebrow: 'Article',
  linkText: 'Read more',
  size: 'small',
};

export const WithImage = Template.bind({});
WithImage.args = {
  title: 'Swift Language Guide',
  url: '/documentation/swift',
  eyebrow: 'Guide',
  image: 'card-image',
  linkText: 'Read more',
  size: 'large',
};

export const Floating = Template.bind({});
Floating.args = {
  title: 'Swift Package Manager',
  url: '/documentation/swift/package-manager',
  eyebrow: 'Tool',
  image: 'card-image',
  linkText: 'Explore',
  floatingStyle: true,
};

export const WithExternalLink = Template.bind({});
WithExternalLink.args = {
  title: 'Swift Forums',
  url: 'https://forums.swift.org',
  eyebrow: 'Community',
  linkText: 'Visit forums',
  showExternalLinks: true,
};
