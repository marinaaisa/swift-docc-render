/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Topics from './Topics.vue';

export default {
  title: 'DocumentationTopic/Topics',
  component: Topics,
};

const Template = (args, { argTypes }) => ({
  components: { Topics },
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
        abstract: [],
      },
    },
    store: {
      state: { apiChanges: null },
    },
  },
  template: '<Topics v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  isSymbolDeprecated: false,
  isSymbolBeta: false,
  topicStyle: 'list',
  sections: [
    {
      title: 'Classes',
      anchor: 'classes',
      identifiers: ['doc://com.example/documentation/MyClass'],
    },
  ],
};
