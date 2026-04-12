/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import CallToActionButton from './CallToActionButton.vue';

const references = {};

export default {
  title: 'CallToActionButton',
  component: CallToActionButton,
};

const Template = (args, { argTypes }) => ({
  components: { CallToActionButton },
  props: Object.keys(argTypes),
  provide: { references, isTargetIDE: false },
  template: '<CallToActionButton v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  action: {
    type: 'link',
    title: 'Get Started',
    destination: 'https://swift.org',
  },
  isDark: false,
  linksToAsset: false,
};

export const DarkVariant = Template.bind({});
DarkVariant.args = {
  action: {
    type: 'link',
    title: 'Download Now',
    destination: 'https://swift.org',
  },
  isDark: true,
  linksToAsset: false,
};
