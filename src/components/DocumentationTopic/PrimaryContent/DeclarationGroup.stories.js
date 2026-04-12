/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import DeclarationGroup from './DeclarationGroup.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/DeclarationGroup',
  component: DeclarationGroup,
};

const Template = (args, { argTypes }) => ({
  components: { DeclarationGroup },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    references: {},
    languages: new Set(['swift']),
    interfaceLanguage: 'swift',
    symbolKind: 'func',
    store: {
      state: { apiChanges: null },
    },
  },
  template: '<DeclarationGroup v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  declaration: {
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
  shouldCaption: false,
};

export const WithCaption = Template.bind({});
WithCaption.args = {
  declaration: {
    platforms: ['iOS', 'macOS'],
    tokens: [
      { kind: 'keyword', text: 'func' },
      { kind: 'text', text: ' ' },
      { kind: 'identifier', text: 'hello' },
      { kind: 'text', text: '()' },
    ],
  },
  shouldCaption: true,
};
