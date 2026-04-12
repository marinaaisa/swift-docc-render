/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import OverridableAsset from './OverridableAsset.vue';

const imageOverride = {
  variants: [
    { url: 'https://via.placeholder.com/64', traits: ['1x', 'light'] },
    { url: 'https://via.placeholder.com/128', traits: ['2x', 'light'] },
  ],
  alt: 'Override image',
};

export default {
  title: 'OverridableAsset',
  component: OverridableAsset,
};

const Template = (args, { argTypes }) => ({
  components: { OverridableAsset },
  props: Object.keys(argTypes),
  template: '<OverridableAsset v-bind="$props" style="width: 64px; height: 64px; display: block;" />',
});

export const Default = Template.bind({});
Default.args = {
  imageOverride,
  shouldCalculateOptimalWidth: false,
};

export const NoOverride = Template.bind({});
NoOverride.args = {
  imageOverride: null,
  shouldCalculateOptimalWidth: false,
};
