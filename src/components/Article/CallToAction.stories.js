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
  title: 'Article/CallToAction',
  component: CallToAction,
};

const Template = (args, { argTypes }) => ({
  components: { CallToAction },
  props: Object.keys(argTypes),
  template: '<CallToAction v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Continue Learning',
  abstract: [
    {
      type: 'paragraph',
      inlineContent: [
        { type: 'text', text: 'Next, learn about how to use the Observation framework in your app.' },
      ],
    },
  ],
  action: {
    identifier: 'topic://swift.org/observation',
    overridingTitle: 'Get started',
  },
};

export const WithMedia = Template.bind({});
WithMedia.args = {
  title: 'Explore SwiftUI',
  abstract: [
    {
      type: 'paragraph',
      inlineContent: [
        { type: 'text', text: 'Discover how to build great apps with SwiftUI.' },
      ],
    },
  ],
  action: {
    identifier: 'topic://swift.org/swiftui',
    overridingTitle: 'Start exploring',
  },
  media: 'swiftui-hero.png',
};

export const NoAbstract = Template.bind({});
NoAbstract.args = {
  title: 'Next Steps',
  action: {
    identifier: 'topic://swift.org/next',
    overridingTitle: 'Continue',
  },
};
