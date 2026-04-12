/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import DeclarationToken from './DeclarationToken.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/DeclarationToken',
  component: DeclarationToken,
};

const Template = (args, { argTypes }) => ({
  components: { DeclarationToken },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<code><DeclarationToken v-bind="$props" /></code>',
});

export const Keyword = Template.bind({});
Keyword.args = { kind: 'keyword', text: 'func' };

export const Identifier = Template.bind({});
Identifier.args = { kind: 'identifier', text: 'myFunction' };

export const TypeIdentifier = Template.bind({});
TypeIdentifier.args = { kind: 'typeIdentifier', text: 'String', identifier: '' };

export const Text = Template.bind({});
Text.args = { kind: 'text', text: '(' };

export const Attribute = Template.bind({});
Attribute.args = { kind: 'attribute', text: '@discardableResult' };

export const ExternalParam = Template.bind({});
ExternalParam.args = { kind: 'externalParam', text: 'name' };
