/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Relationships from './Relationships.vue';

export default {
  title: 'DocumentationTopic/Relationships',
  component: Relationships,
};

const Template = (args, { argTypes }) => ({
  components: { Relationships },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    references: {
      'doc://com.example/documentation/Equatable': {
        identifier: 'doc://com.example/documentation/Equatable',
        title: 'Equatable',
        url: '/documentation/Equatable',
        kind: 'symbol',
        role: 'symbol',
        type: 'topic',
      },
    },
    store: {
      state: { apiChanges: null },
    },
    identifier: 'doc://com.example/documentation/MyClass',
  },
  template: '<Relationships v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  sections: [
    {
      type: 'conformsTo',
      title: 'Conforms To',
      anchor: 'conforms-to',
      identifiers: ['doc://com.example/documentation/Equatable'],
    },
  ],
  enableMinimized: false,
};
