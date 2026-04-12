/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import VideoAsset from './VideoAsset.vue';

const videoVariants = [
  { url: 'https://www.w3schools.com/html/mov_bbb.mp4', traits: ['light'] },
];

export default {
  title: 'VideoAsset',
  component: VideoAsset,
};

const Template = (args, { argTypes }) => ({
  components: { VideoAsset },
  props: Object.keys(argTypes),
  template: '<VideoAsset v-bind="$props" style="max-width: 400px;" />',
});

export const Default = Template.bind({});
Default.args = {
  variants: videoVariants,
  id: 'story-video-asset-1',
  showsDefaultControls: true,
  autoplays: false,
  muted: true,
  posterVariants: [],
};

export const Autoplays = Template.bind({});
Autoplays.args = {
  variants: videoVariants,
  id: 'story-video-asset-2',
  showsDefaultControls: false,
  autoplays: true,
  muted: true,
  posterVariants: [],
};

export const WithAlt = Template.bind({});
WithAlt.args = {
  variants: videoVariants,
  id: 'story-video-asset-3',
  showsDefaultControls: true,
  autoplays: false,
  muted: true,
  posterVariants: [],
  alt: 'A bunny running through a meadow',
};
