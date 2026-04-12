/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Declaration from './Declaration.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/Declaration',
  component: Declaration,
};

const Template = (args, { argTypes }) => ({
  components: { Declaration },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    references: {},
    identifier: 'doc://com.example/documentation/MyClass/hello()',
    store: {
      state: { apiChanges: null, references: {} },
    },
    languages: new Set(['swift']),
    interfaceLanguage: 'swift',
    symbolKind: 'func',
  },
  template: '<Declaration v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  declarations: [
    {
      languages: ['swift'],
      platforms: ['iOS', 'macOS'],
      tokens: [
        { kind: 'keyword', text: 'func' },
        { kind: 'text', text: ' ' },
        { kind: 'identifier', text: 'hello' },
        { kind: 'text', text: '(' },
        { kind: 'externalParam', text: 'name' },
        { kind: 'text', text: ': ' },
        { kind: 'typeIdentifier', text: 'String' },
        { kind: 'text', text: ')' },
      ],
    },
  ],
};

export const MultiPlatform = Template.bind({});
MultiPlatform.args = {
  declarations: [
    {
      languages: ['swift'],
      platforms: ['iOS'],
      tokens: [
        { kind: 'keyword', text: 'func' },
        { kind: 'text', text: ' ' },
        { kind: 'identifier', text: 'hello' },
        { kind: 'text', text: '()' },
      ],
    },
    {
      languages: ['swift'],
      platforms: ['macOS'],
      tokens: [
        { kind: 'keyword', text: 'func' },
        { kind: 'text', text: ' ' },
        { kind: 'identifier', text: 'hello' },
        { kind: 'text', text: '() -> ' },
        { kind: 'typeIdentifier', text: 'Void' },
      ],
    },
  ],
};
