/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import RestEndpoint from './RestEndpoint.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/RestEndpoint',
  component: RestEndpoint,
};

const Template = (args, { argTypes }) => ({
  components: { RestEndpoint },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<RestEndpoint v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'URL',
  tokens: [
    { kind: 'method', text: 'GET' },
    { kind: 'text', text: ' ' },
    { kind: 'baseURL', text: 'https://api.example.com' },
    { kind: 'path', text: '/v1/users/{userId}' },
  ],
};
