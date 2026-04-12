/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import RestParameters from './RestParameters.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/RestParameters',
  component: RestParameters,
};

const Template = (args, { argTypes }) => ({
  components: { RestParameters },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    references: {},
    identifier: 'doc://com.example/documentation/GetUser',
    store: {
      state: { apiChanges: null },
    },
  },
  template: '<RestParameters v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Query Parameters',
  parameters: [
    {
      name: 'page',
      type: [{ kind: 'typeIdentifier', text: 'Integer', identifier: '' }],
      content: [
        {
          type: 'paragraph',
          inlineContent: [{ type: 'text', text: 'The page number to retrieve.' }],
        },
      ],
      required: false,
      readOnly: false,
      deprecated: false,
      attributes: [
        { kind: 'default', value: '1' },
        { kind: 'minimum', value: '1' },
      ],
    },
    {
      name: 'limit',
      type: [{ kind: 'typeIdentifier', text: 'Integer', identifier: '' }],
      content: [
        {
          type: 'paragraph',
          inlineContent: [{ type: 'text', text: 'The number of items per page.' }],
        },
      ],
      required: false,
      readOnly: false,
      deprecated: false,
      attributes: [
        { kind: 'default', value: '20' },
        { kind: 'maximum', value: '100' },
      ],
    },
  ],
};
