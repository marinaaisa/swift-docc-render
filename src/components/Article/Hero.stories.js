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
  title: 'Article/Hero',
  component: Hero,
};

const Template = (args, { argTypes }) => ({
  components: { Hero },
  props: Object.keys(argTypes),
  provide: { references: {} },
  template: '<Hero v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Swift Property Wrappers',
  chapter: 'Learning Swift',
  content: [
    {
      type: 'paragraph',
      inlineContent: [
        {
          type: 'text',
          text: 'Property wrappers add a layer of separation between code that manages how a property is stored and the code that defines a property.',
        },
      ],
    },
  ],
  estimatedTimeInMinutes: 20,
};

export const Minimal = Template.bind({});
Minimal.args = {
  title: 'Getting Started with Swift',
};

export const WithEstimatedTime = Template.bind({});
WithEstimatedTime.args = {
  title: 'Building Your First App',
  chapter: 'SwiftUI Essentials',
  content: [
    {
      type: 'paragraph',
      inlineContent: [
        { type: 'text', text: 'Learn how to build a complete iOS app from scratch using SwiftUI.' },
      ],
    },
  ],
  estimatedTimeInMinutes: 42,
};
