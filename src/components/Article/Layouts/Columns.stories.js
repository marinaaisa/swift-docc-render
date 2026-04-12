/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Columns from './Columns.vue';

export default {
  title: 'Article/Layouts/Columns',
  component: Columns,
};

const Template = (args, { argTypes }) => ({
  components: { Columns },
  props: Object.keys(argTypes),
  provide: { references: {} },
  template: '<Columns v-bind="$props" />',
});

export const TwoColumns = Template.bind({});
TwoColumns.args = {
  columns: [
    {
      media: 'image-left.png',
      content: [
        {
          type: 'paragraph',
          inlineContent: [{ type: 'text', text: 'Use @State to store simple value types that belong to the current view.' }],
        },
      ],
    },
    {
      media: 'image-right.png',
      content: [
        {
          type: 'paragraph',
          inlineContent: [{ type: 'text', text: 'Use @Binding to create a two-way connection to state owned by a parent view.' }],
        },
      ],
    },
  ],
};

export const ThreeColumns = Template.bind({});
ThreeColumns.args = {
  columns: [
    {
      media: 'state.png',
      content: [
        {
          type: 'paragraph',
          inlineContent: [{ type: 'text', text: '@State — a value owned by the view.' }],
        },
      ],
    },
    {
      media: 'binding.png',
      content: [
        {
          type: 'paragraph',
          inlineContent: [{ type: 'text', text: '@Binding — a reference to state owned elsewhere.' }],
        },
      ],
    },
    {
      media: 'observed-object.png',
      content: [
        {
          type: 'paragraph',
          inlineContent: [{ type: 'text', text: '@ObservedObject — an external reference type.' }],
        },
      ],
    },
  ],
};

export const MediaOnly = Template.bind({});
MediaOnly.args = {
  columns: [
    { media: 'image-a.png' },
    { media: 'image-b.png' },
  ],
};
