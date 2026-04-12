/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import PrimaryContent from './PrimaryContent.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent',
  component: PrimaryContent,
};

const Template = (args, { argTypes }) => ({
  components: { PrimaryContent },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    references: {},
    identifier: 'doc://com.example/documentation/MyClass',
    store: {
      state: { apiChanges: null, references: {} },
      setPreferredLanguage() {},
    },
    languages: new Set(['swift']),
    interfaceLanguage: 'swift',
    symbolKind: 'func',
  },
  template: '<PrimaryContent v-bind="$props" />',
});

export const Content = Template.bind({});
Content.args = {
  sections: [
    {
      kind: 'content',
      content: [
        {
          type: 'paragraph',
          inlineContent: [
            { type: 'text', text: 'Calls a closure with a pointer to the array\'s contiguous storage.' },
          ],
        },
      ],
    },
  ],
};

export const WithDeclaration = Template.bind({});
WithDeclaration.args = {
  sections: [
    {
      kind: 'declarations',
      declarations: [
        {
          languages: ['swift'],
          platforms: ['iOS', 'macOS'],
          tokens: [
            { kind: 'keyword', text: 'func' },
            { kind: 'text', text: ' ' },
            { kind: 'identifier', text: 'hello' },
            { kind: 'text', text: '()' },
          ],
        },
      ],
    },
  ],
};

export const WithParameters = Template.bind({});
WithParameters.args = {
  sections: [
    {
      kind: 'parameters',
      parameters: [
        {
          name: 'name',
          content: [
            {
              type: 'paragraph',
              inlineContent: [{ type: 'text', text: 'The name to greet.' }],
            },
          ],
        },
      ],
    },
  ],
};
