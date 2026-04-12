/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import RestBody from './RestBody.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/RestBody',
  component: RestBody,
};

const Template = (args, { argTypes }) => ({
  components: { RestBody },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    references: {},
    identifier: 'doc://com.example/documentation/CreateUser',
    store: {
      state: { apiChanges: null },
    },
  },
  template: '<RestBody v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'HTTP Body',
  mimeType: 'application/json',
  bodyContentType: [
    { kind: 'typeIdentifier', text: 'UserRequest', identifier: '' },
  ],
  content: [
    {
      type: 'paragraph',
      inlineContent: [{ type: 'text', text: 'The user data to create.' }],
    },
  ],
  parts: [
    {
      name: 'username',
      type: [{ kind: 'typeIdentifier', text: 'String', identifier: '' }],
      content: [
        {
          type: 'paragraph',
          inlineContent: [{ type: 'text', text: 'The desired username.' }],
        },
      ],
      required: true,
      readOnly: false,
      attributes: [],
    },
  ],
};
