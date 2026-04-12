/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import PropertyTable from './PropertyTable.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/PropertyTable',
  component: PropertyTable,
};

const Template = (args, { argTypes }) => ({
  components: { PropertyTable },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    references: {},
    identifier: 'doc://com.example/documentation/MyClass',
    store: {
      state: { apiChanges: null },
    },
  },
  template: '<PropertyTable v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Properties',
  properties: [
    {
      name: 'name',
      type: [{ kind: 'typeIdentifier', text: 'String', identifier: '' }],
      content: [
        {
          type: 'paragraph',
          inlineContent: [{ type: 'text', text: 'The name of the object.' }],
        },
      ],
      required: true,
      readOnly: false,
      deprecated: false,
      attributes: [],
    },
    {
      name: 'count',
      type: [{ kind: 'typeIdentifier', text: 'Int', identifier: '' }],
      content: [
        {
          type: 'paragraph',
          inlineContent: [{ type: 'text', text: 'The number of items.' }],
        },
      ],
      required: false,
      readOnly: true,
      deprecated: false,
      attributes: [],
    },
  ],
};
