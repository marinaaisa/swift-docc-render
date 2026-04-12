/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Hero from './Hero.vue';

export default {
  title: 'TutorialsOverview/Hero',
  component: Hero,
};

const Template = (args, { argTypes }) => ({
  components: { Hero },
  props: Object.keys(argTypes),
  provide: {
    references: {},
  },
  template: '<Hero v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'SwiftUI Tutorials',
  content: [
    { type: 'text', text: 'Learn how to build beautiful, responsive apps using SwiftUI.' },
  ],
  estimatedTime: '4 hr 25 min',
  action: {
    type: 'reference',
    identifier: 'doc://com.example.MyKit/tutorials/getting-started',
    overridingTitle: 'Get Started',
  },
  image: undefined,
};

export const TitleOnly = Template.bind({});
TitleOnly.args = {
  title: 'SwiftUI Tutorials',
};

export const NoAction = Template.bind({});
NoAction.args = {
  title: 'SwiftUI Tutorials',
  content: [
    { type: 'text', text: 'Explore tutorials to build apps with SwiftUI.' },
  ],
  estimatedTime: '2 hr 10 min',
  action: undefined,
  image: undefined,
};
