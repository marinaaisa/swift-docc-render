/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Asset from './Asset.vue';

const imageReferences = {
  'my-image': {
    type: 'image',
    alt: 'A sample image',
    variants: [
      { url: 'https://via.placeholder.com/300', traits: ['1x', 'light'] },
      { url: 'https://via.placeholder.com/600', traits: ['2x', 'light'] },
    ],
  },
};

export default {
  title: 'Asset',
  component: Asset,
};

const Template = (args, { argTypes }) => ({
  components: { Asset },
  props: Object.keys(argTypes),
  provide: { references: imageReferences },
  template: '<Asset v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  identifier: 'my-image',
  showsReplayButton: true,
  showsVideoControls: false,
  videoAutoplays: false,
  videoMuted: false,
};
