/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import CallToAction from './CallToAction.vue';

const references = {};

export default {
  title: 'CallToAction',
  component: CallToAction,
};

const Template = (args, { argTypes }) => ({
  components: { CallToAction },
  props: Object.keys(argTypes),
  provide: { references },
  template: '<CallToAction v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Get Started with Swift',
  label: 'Featured',
  abstract: [{ type: 'text', text: 'Swift is a powerful and intuitive programming language for Apple platforms.' }],
};

export const WithAction = Template.bind({});
WithAction.args = {
  title: 'Download Xcode',
  label: 'Tools',
  abstract: [{ type: 'text', text: 'Build, run, and distribute apps with Xcode.' }],
  action: {
    type: 'link',
    title: 'Download',
    destination: 'https://developer.apple.com/xcode/',
  },
};

export const Minimal = Template.bind({});
Minimal.args = {
  title: 'Learn More',
  label: 'Resources',
};
