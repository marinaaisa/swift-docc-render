/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import EndpointExample from './EndpointExample.vue';

export default {
  title: 'ContentNode/EndpointExample',
  component: EndpointExample,
};

const requestContent = [
  {
    collapsible: false,
    code: [
      'POST /v1/users HTTP/1.1',
      'Host: api.example.com',
      'Content-Type: application/json',
      'Authorization: Bearer <token>',
      '',
      '{',
      '  "name": "Jane Appleseed",',
      '  "email": "jane@example.com"',
      '}',
    ],
  },
];

const responseContent = [
  {
    collapsible: false,
    code: [
      'HTTP/1.1 201 Created',
      'Content-Type: application/json',
      '',
      '{',
      '  "id": 42,',
      '  "name": "Jane Appleseed",',
      '  "email": "jane@example.com",',
      '  "createdAt": "2024-01-15T10:30:00Z"',
      '}',
    ],
  },
];

const Template = (args, { argTypes }) => ({
  components: { EndpointExample },
  props: Object.keys(argTypes),
  template: '<EndpointExample v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  request: { content: requestContent },
  response: { content: responseContent },
};

export const WithCollapsibleResponse = Template.bind({});
WithCollapsibleResponse.args = {
  request: { content: requestContent },
  response: {
    content: [
      {
        collapsible: false,
        code: [
          'HTTP/1.1 200 OK',
          'Content-Type: application/json',
          '',
        ],
      },
      {
        collapsible: true,
        code: [
          '{',
          '  "users": [',
          '    { "id": 1, "name": "Alice" },',
          '    { "id": 2, "name": "Bob" },',
          '    { "id": 3, "name": "Charlie" },',
          '    { "id": 4, "name": "Dave" },',
          '    { "id": 5, "name": "Eve" }',
          '  ],',
          '  "total": 5',
          '}',
        ],
      },
    ],
  },
};
