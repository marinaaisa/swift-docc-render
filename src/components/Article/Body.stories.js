/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Body from './Body.vue';

export default {
  title: 'Article/Body',
  component: Body,
};

const Template = (args, { argTypes }) => ({
  components: { Body },
  props: Object.keys(argTypes),
  provide: { references: {} },
  template: '<Body v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  content: [
    {
      kind: 'fullWidth',
      content: [
        {
          type: 'paragraph',
          inlineContent: [{ type: 'text', text: 'Property wrappers add a layer of separation between code that manages how a property is stored and the code that defines a property.' }],
        },
      ],
    },
  ],
};

export const MultipleLayouts = Template.bind({});
MultipleLayouts.args = {
  content: [
    {
      kind: 'fullWidth',
      content: [
        {
          type: 'heading',
          anchor: 'overview',
          level: 2,
          text: 'Overview',
        },
        {
          type: 'paragraph',
          inlineContent: [{ type: 'text', text: 'This article explains property wrappers in Swift.' }],
        },
      ],
    },
    {
      kind: 'contentAndMedia',
      content: [
        {
          type: 'paragraph',
          inlineContent: [{ type: 'text', text: 'A property wrapper adds behavior to the wrapped property.' }],
        },
      ],
      media: 'property-wrapper-illustration.png',
      mediaPosition: 'trailing',
    },
    {
      kind: 'columns',
      content: [
        {
          content: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: 'Column one content.' }] }],
          media: 'column-one.png',
        },
        {
          content: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: 'Column two content.' }] }],
          media: 'column-two.png',
        },
      ],
    },
  ],
};
