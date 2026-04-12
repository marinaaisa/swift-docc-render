/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import ChangedToken from './ChangedToken.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/DeclarationToken/ChangedToken',
  component: ChangedToken,
};

const Template = (args, { argTypes }) => ({
  components: { ChangedToken },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<code><ChangedToken v-bind="$props" /></code>',
});

export const Added = Template.bind({});
Added.args = {
  kind: 'added',
  tokens: [
    { kind: 'keyword', text: 'async' },
    { kind: 'text', text: ' ' },
  ],
};

export const Removed = Template.bind({});
Removed.args = {
  kind: 'removed',
  tokens: [
    { kind: 'keyword', text: 'throws' },
    { kind: 'text', text: ' ' },
  ],
};
