/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import DeclarationList from './DeclarationList.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/DeclarationList',
  component: DeclarationList,
};

const Template = (args, { argTypes }) => ({
  components: { DeclarationList },
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
  template: '<DeclarationList v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  declaration: {
    platforms: ['iOS', 'macOS'],
    tokens: [
      { kind: 'keyword', text: 'func' },
      { kind: 'text', text: ' ' },
      { kind: 'identifier', text: 'hello' },
      { kind: 'text', text: '()' },
    ],
  },
  shouldCaption: false,
  declListExpanded: false,
};
