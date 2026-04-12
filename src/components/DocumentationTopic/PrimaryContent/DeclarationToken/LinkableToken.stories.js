/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import LinkableToken from './LinkableToken.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/DeclarationToken/LinkableToken',
  component: LinkableToken,
};

const Template = (args, { argTypes }) => ({
  components: { LinkableToken },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    references: {
      'doc://com.example/documentation/Swift/String': {
        identifier: 'doc://com.example/documentation/Swift/String',
        title: 'String',
        url: '/documentation/swift/string',
        kind: 'symbol',
        role: 'symbol',
      },
    },
  },
  template: '<code><LinkableToken v-bind="$props">String</LinkableToken></code>',
});

export const Linked = Template.bind({});
Linked.args = {
  identifier: 'doc://com.example/documentation/Swift/String',
};

export const Unresolved = Template.bind({});
Unresolved.args = {
  identifier: 'doc://com.example/documentation/Swift/UnknownType',
};
