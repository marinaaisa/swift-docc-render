/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import DecoratedTopicTitle from './DecoratedTopicTitle.vue';

export default {
  title: 'DocumentationTopic/DecoratedTopicTitle',
  component: DecoratedTopicTitle,
};

const Template = (args, { argTypes }) => ({
  components: { DecoratedTopicTitle },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<DecoratedTopicTitle v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
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
