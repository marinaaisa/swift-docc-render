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

export default {
  title: 'Article/ContentNode',
  component: ContentNode,
};

const Template = (args, { argTypes }) => ({
  components: { ContentNode },
  props: Object.keys(argTypes),
  provide: { references: {} },
  template: '<ContentNode v-bind="$props" />',
});

export const Paragraph = Template.bind({});
Paragraph.args = {
  content: [
    {
      type: 'paragraph',
      inlineContent: [
        { type: 'text', text: 'Property wrappers add a layer of separation between code that manages how a property is stored and the code that defines a property.' },
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
        { type: 'text', text: 'This section provides an overview of the topic.' },
      ],
    },
    {
      type: 'heading',
      anchor: 'details',
      level: 3,
      text: 'Details',
    },
    {
      type: 'paragraph',
      inlineContent: [
        { type: 'text', text: 'Here are the details of the topic.' },
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
        { type: 'text', text: 'Here is an example of a property wrapper in Swift:' },
      ],
    },
    {
      type: 'codeListing',
      syntax: 'swift',
      code: [
        '@propertyWrapper',
        'struct TwelveOrLess {',
        '    private var number = 0',
        '    var wrappedValue: Int {',
        '        get { return number }',
        '        set { number = min(newValue, 12) }',
        '    }',
        '}',
      ],
    },
  ],
};

export const WithAside = Template.bind({});
WithAside.args = {
  content: [
    {
      type: 'paragraph',
      inlineContent: [
        { type: 'text', text: 'Before you proceed, note the following:' },
      ],
    },
    {
      type: 'aside',
      style: 'note',
      name: 'Note',
      content: [
        {
          type: 'paragraph',
          inlineContent: [
            { type: 'text', text: 'Property wrappers are available in Swift 5.1 and later.' },
          ],
        },
      ],
    },
  ],
};
