/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import DeclarationDiff from './DeclarationDiff.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/DeclarationDiff',
  component: DeclarationDiff,
};

const Template = (args, { argTypes }) => ({
  components: { DeclarationDiff },
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
  template: '<DeclarationDiff v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  changes: {
    declaration: {
      new: [
        {
          languages: ['swift'],
          platforms: ['iOS'],
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
      previous: [
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
      ],
    },
  },
};
