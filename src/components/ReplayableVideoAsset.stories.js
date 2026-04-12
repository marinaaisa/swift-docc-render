/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import ReplayableVideoAsset from './ReplayableVideoAsset.vue';

const videoVariants = [
  { url: 'https://www.w3schools.com/html/mov_bbb.mp4', traits: ['light'] },
];

export default {
  title: 'ReplayableVideoAsset',
  component: ReplayableVideoAsset,
};

const Template = (args, { argTypes }) => ({
  components: { ReplayableVideoAsset },
  props: Object.keys(argTypes),
  template: '<ReplayableVideoAsset v-bind="$props" style="max-width: 400px;" />',
});

export const Default = Template.bind({});
Default.args = {
  variants: videoVariants,
  id: 'story-video-1',
  showsDefaultControls: false,
  autoplays: false,
  muted: true,
  posterVariants: [],
  alt: 'A sample video',
};

export const WithDefaultControls = Template.bind({});
WithDefaultControls.args = {
  variants: videoVariants,
  id: 'story-video-2',
  showsDefaultControls: true,
  autoplays: false,
  muted: true,
  posterVariants: [],
  alt: 'A sample video with default controls',
};
