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

export default {
  title: 'Tutorial/CallToAction',
  component: CallToAction,
};

const Template = (args, { argTypes }) => ({
  components: { CallToAction },
  props: Object.keys(argTypes),
  provide: {
    references: {},
  },
  template: '<CallToAction v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Continue Your Journey',
  abstract: [
    { type: 'text', text: 'You have completed this tutorial. Continue with the next one to keep learning.' },
  ],
  action: {
    type: 'reference',
    identifier: 'doc://com.example.MyKit/tutorials/gettingstarted',
    overridingTitle: 'Start Next Tutorial',
  },
  media: undefined,
};

export const NoAbstract = Template.bind({});
NoAbstract.args = {
  title: 'Next: Advanced Topics',
  abstract: undefined,
  action: {
    type: 'reference',
    identifier: 'doc://com.example.MyKit/tutorials/advanced',
    overridingTitle: 'Start',
  },
  media: undefined,
};
