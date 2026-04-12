/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import TopicsTable from './TopicsTable.vue';

export default {
  title: 'DocumentationTopic/TopicsTable',
  component: TopicsTable,
};

const Template = (args, { argTypes }) => ({
  components: { TopicsTable },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    references: {
      'doc://com.example/documentation/MyClass': {
        identifier: 'doc://com.example/documentation/MyClass',
        title: 'MyClass',
        url: '/documentation/MyClass',
        kind: 'symbol',
        role: 'symbol',
        type: 'topic',
        abstract: [{ type: 'text', text: 'A useful class.' }],
      },
    },
    store: {
      state: { apiChanges: null },
    },
  },
  template: '<TopicsTable v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Topics',
  anchor: 'topics',
  isSymbolDeprecated: false,
  isSymbolBeta: false,
  sections: [
    {
      title: 'Classes',
      anchor: 'classes',
      identifiers: ['doc://com.example/documentation/MyClass'],
    },
  ],
};
