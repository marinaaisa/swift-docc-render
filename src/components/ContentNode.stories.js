/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import ContentNode from './ContentNode.vue';

const references = {};

export default {
  title: 'ContentNode',
  component: ContentNode,
};

const Template = (args, { argTypes }) => ({
  components: { ContentNode },
  props: Object.keys(argTypes),
  provide: { references },
  template: '<ContentNode v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  content: [
    {
      type: 'paragraph',
      inlineContent: [
        { type: 'text', text: 'This is a simple paragraph of content rendered by the ContentNode component.' },
      ],
    },
  ],
};

export const WithHeading = Template.bind({});
WithHeading.args = {
  content: [
    {
      type: 'heading',
      level: 2,
      anchor: 'overview',
      text: 'Overview',
    },
    {
      type: 'paragraph',
      inlineContent: [
        { type: 'text', text: 'Swift is a powerful, intuitive programming language.' },
      ],
    },
  ],
};

export const WithList = Template.bind({});
WithList.args = {
  content: [
    {
      type: 'unorderedList',
      items: [
        { content: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: 'First item' }] }] },
        { content: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: 'Second item' }] }] },
        { content: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: 'Third item' }] }] },
      ],
    },
  ],
};

export const WithAside = Template.bind({});
WithAside.args = {
  content: [
    {
      type: 'aside',
      style: 'Note',
      content: [
        {
          type: 'paragraph',
          inlineContent: [{ type: 'text', text: 'This is a note aside.' }],
        },
      ],
    },
  ],
};

export const WithCodeListing = Template.bind({});
WithCodeListing.args = {
  content: [
    {
      type: 'codeListing',
      syntax: 'swift',
      code: ['let greeting = "Hello, World!"', 'print(greeting)'],
    },
  ],
};
