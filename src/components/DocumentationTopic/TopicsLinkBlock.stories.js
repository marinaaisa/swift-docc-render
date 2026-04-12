/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import TopicsLinkBlock from './TopicsLinkBlock.vue';

export default {
  title: 'DocumentationTopic/TopicsLinkBlock',
  component: TopicsLinkBlock,
};

const Template = (args, { argTypes }) => ({
  components: { TopicsLinkBlock },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    references: {},
    store: {
      state: { apiChanges: null },
    },
  },
  template: '<TopicsLinkBlock v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  isSymbolBeta: false,
  isSymbolDeprecated: false,
  topic: {
    identifier: 'doc://com.example/documentation/MyClass',
    title: 'MyClass',
    url: '/documentation/MyClass',
    kind: 'symbol',
    role: 'symbol',
    type: 'topic',
    abstract: [{ type: 'text', text: 'A class that does something useful.' }],
  },
};

export const Deprecated = Template.bind({});
Deprecated.args = {
  isSymbolBeta: false,
  isSymbolDeprecated: false,
  topic: {
    identifier: 'doc://com.example/documentation/OldClass',
    title: 'OldClass',
    url: '/documentation/OldClass',
    kind: 'symbol',
    role: 'symbol',
    type: 'topic',
    abstract: [],
    deprecated: true,
  },
};
