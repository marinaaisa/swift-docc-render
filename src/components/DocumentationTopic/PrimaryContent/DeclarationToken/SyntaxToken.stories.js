/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import SyntaxToken from './SyntaxToken.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/DeclarationToken/SyntaxToken',
  component: SyntaxToken,
};

const Template = (args, { argTypes }) => ({
  components: { SyntaxToken },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<code><SyntaxToken v-bind="$props" /></code>',
});

export const Keyword = Template.bind({});
Keyword.args = { kind: 'keyword', text: 'func' };

export const Number = Template.bind({});
Number.args = { kind: 'number', text: '42' };

export const StringLiteral = Template.bind({});
StringLiteral.args = { kind: 'string', text: '"hello"' };

export const Attribute = Template.bind({});
Attribute.args = { kind: 'attribute', text: '@discardableResult' };
