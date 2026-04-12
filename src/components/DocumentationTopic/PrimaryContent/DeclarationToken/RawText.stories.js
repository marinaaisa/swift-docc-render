/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import RawText from './RawText.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/DeclarationToken/RawText',
  component: RawText,
};

const Template = (args, { argTypes }) => ({
  components: { RawText },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<code><RawText v-bind="$props" /></code>',
});

export const Default = Template.bind({});
Default.args = {
  text: '(',
};

export const Whitespace = Template.bind({});
Whitespace.args = {
  text: ' ',
};

export const Punctuation = Template.bind({});
Punctuation.args = {
  text: ') -> ',
};
