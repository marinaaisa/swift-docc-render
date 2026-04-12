/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import BodyContent from './BodyContent.vue';

export default {
  title: 'Article/BodyContent',
  component: BodyContent,
};

const Template = (args, { argTypes }) => ({
  components: { BodyContent },
  props: Object.keys(argTypes),
  provide: { references: {} },
  template: '<BodyContent v-bind="$props" />',
});

export const FullWidth = Template.bind({});
FullWidth.args = {
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

export const ContentAndMedia = Template.bind({});
ContentAndMedia.args = {
  content: [
    {
      kind: 'contentAndMedia',
      content: [
        {
          type: 'paragraph',
          inlineContent: [{ type: 'text', text: 'Use the @State property wrapper to declare a value type whose changes you want to manage in SwiftUI.' }],
        },
      ],
      media: 'state-illustration.png',
      mediaPosition: 'trailing',
    },
  ],
};

export const Columns = Template.bind({});
Columns.args = {
  content: [
    {
      kind: 'columns',
      content: [
        {
          content: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: 'Left column content describing the first concept.' }] }],
          media: 'left-column.png',
        },
        {
          content: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: 'Right column content describing the second concept.' }] }],
          media: 'right-column.png',
        },
      ],
    },
  ],
};

export const Mixed = Template.bind({});
Mixed.args = {
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
          inlineContent: [{ type: 'text', text: 'An overview of Swift property wrappers.' }],
        },
      ],
    },
    {
      kind: 'contentAndMedia',
      content: [
        {
          type: 'paragraph',
          inlineContent: [{ type: 'text', text: 'Diagram showing how a property wrapper intercepts access.' }],
        },
      ],
      media: 'wrapper-diagram.png',
      mediaPosition: 'leading',
    },
    {
      kind: 'columns',
      content: [
        {
          content: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: 'Getting started with @State.' }] }],
          media: 'state.png',
        },
        {
          content: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: 'Getting started with @Binding.' }] }],
          media: 'binding.png',
        },
        {
          content: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: 'Getting started with @ObservedObject.' }] }],
          media: 'observed-object.png',
        },
      ],
    },
  ],
};
