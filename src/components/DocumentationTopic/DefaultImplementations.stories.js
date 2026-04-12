/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import DefaultImplementations from './DefaultImplementations.vue';

export default {
  title: 'DocumentationTopic/DefaultImplementations',
  component: DefaultImplementations,
};

const Template = (args, { argTypes }) => ({
  components: { DefaultImplementations },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    references: {
      'doc://com.example/documentation/MyClass/hello()': {
        identifier: 'doc://com.example/documentation/MyClass/hello()',
        title: 'hello()',
        url: '/documentation/MyClass/hello()',
        kind: 'symbol',
        role: 'symbol',
        type: 'topic',
      },
    },
    store: {
      state: { apiChanges: null },
    },
  },
  template: '<DefaultImplementations v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  isSymbolDeprecated: false,
  isSymbolBeta: false,
  sections: [
    {
      title: 'Equatable Implementations',
      anchor: 'equatable-implementations',
      identifiers: ['doc://com.example/documentation/MyClass/hello()'],
    },
  ],
};
