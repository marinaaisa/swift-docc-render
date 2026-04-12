/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import FullWidth from './FullWidth.vue';

export default {
  title: 'Article/Layouts/FullWidth',
  component: FullWidth,
};

const Template = (args, { argTypes }) => ({
  components: { FullWidth },
  props: Object.keys(argTypes),
  provide: { references: {} },
  template: '<FullWidth v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  content: [
    {
      type: 'paragraph',
      inlineContent: [
        { type: 'text', text: 'Swift is a general-purpose programming language built using a modern approach to safety, performance, and software design patterns.' },
      ],
    },
  ],
};

export const WithHeadings = Template.bind({});
WithHeadings.args = {
  content: [
    {
      type: 'heading',
      anchor: 'overview',
      level: 2,
      text: 'Overview',
    },
    {
      type: 'paragraph',
      inlineContent: [
        { type: 'text', text: 'Swift incorporates modern programming features that developers love.' },
      ],
    },
    {
      type: 'heading',
      anchor: 'safety',
      level: 2,
      text: 'Safety',
    },
    {
      type: 'paragraph',
      inlineContent: [
        { type: 'text', text: 'Swift eliminates entire classes of unsafe code by design.' },
      ],
    },
    {
      type: 'heading',
      anchor: 'subsection',
      level: 3,
      text: 'Memory Safety',
    },
    {
      type: 'paragraph',
      inlineContent: [
        { type: 'text', text: 'Swift uses automatic reference counting (ARC) to track and manage your app\'s memory usage.' },
      ],
    },
  ],
};

export const WithCodeListing = Template.bind({});
WithCodeListing.args = {
  content: [
    {
      type: 'paragraph',
      inlineContent: [
        { type: 'text', text: 'Here is a simple Swift example:' },
      ],
    },
    {
      type: 'codeListing',
      syntax: 'swift',
      code: [
        'let greeting = "Hello, Swift!"',
        'print(greeting)',
      ],
    },
  ],
};
