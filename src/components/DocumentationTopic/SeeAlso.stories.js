/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import SeeAlso from './SeeAlso.vue';

export default {
  title: 'DocumentationTopic/SeeAlso',
  component: SeeAlso,
};

const Template = (args, { argTypes }) => ({
  components: { SeeAlso },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    references: {
      'doc://com.example/documentation/RelatedTopic': {
        identifier: 'doc://com.example/documentation/RelatedTopic',
        title: 'Related Topic',
        url: '/documentation/RelatedTopic',
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
  template: '<SeeAlso v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  isSymbolDeprecated: false,
  isSymbolBeta: false,
  sections: [
    {
      title: 'Related',
      anchor: 'related',
      identifiers: ['doc://com.example/documentation/RelatedTopic'],
    },
  ],
};
