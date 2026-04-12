/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import RelationshipsList from './RelationshipsList.vue';

export default {
  title: 'DocumentationTopic/RelationshipsList',
  component: RelationshipsList,
};

const Template = (args, { argTypes }) => ({
  components: { RelationshipsList },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    references: {},
    store: {
      state: { apiChanges: null },
    },
    identifier: 'doc://com.example/documentation/MyClass',
  },
  template: '<RelationshipsList v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  symbols: [
    {
      identifier: 'doc://com.example/documentation/Equatable',
      title: 'Equatable',
      url: '/documentation/Equatable',
      kind: 'symbol',
      role: 'symbol',
    },
    {
      identifier: 'doc://com.example/documentation/Hashable',
      title: 'Hashable',
      url: '/documentation/Hashable',
      kind: 'symbol',
      role: 'symbol',
    },
  ],
  type: 'conformsTo',
};
