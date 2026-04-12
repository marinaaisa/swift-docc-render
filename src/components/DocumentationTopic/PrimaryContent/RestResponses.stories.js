/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import RestResponses from './RestResponses.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/RestResponses',
  component: RestResponses,
};

const Template = (args, { argTypes }) => ({
  components: { RestResponses },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    references: {},
    identifier: 'doc://com.example/documentation/GetUser',
    store: {
      state: { apiChanges: null },
    },
  },
  template: '<RestResponses v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Response Codes',
  responses: [
    {
      status: '200',
      reason: 'OK',
      mimeType: 'application/json',
      type: [{ kind: 'typeIdentifier', text: 'User', identifier: '' }],
      content: [
        {
          type: 'paragraph',
          inlineContent: [{ type: 'text', text: 'The requested user object.' }],
        },
      ],
    },
    {
      status: '404',
      reason: 'Not Found',
      type: [],
      content: [
        {
          type: 'paragraph',
          inlineContent: [{ type: 'text', text: 'The user does not exist.' }],
        },
      ],
    },
  ],
};
