/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import DeclarationSource from './DeclarationSource.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/DeclarationSource',
  component: DeclarationSource,
};

const Template = (args, { argTypes }) => ({
  components: { DeclarationSource },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<DeclarationSource v-bind="$props" />',
});

export const Swift = Template.bind({});
Swift.args = {
  language: 'swift',
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
};

export const ObjC = Template.bind({});
ObjC.args = {
  language: 'occ',
  tokens: [
    { kind: 'text', text: '- (' },
    { kind: 'typeIdentifier', text: 'void' },
    { kind: 'text', text: ')' },
    { kind: 'identifier', text: 'helloWithName' },
    { kind: 'text', text: ':(' },
    { kind: 'typeIdentifier', text: 'NSString' },
    { kind: 'text', text: ' *)name' },
  ],
};
