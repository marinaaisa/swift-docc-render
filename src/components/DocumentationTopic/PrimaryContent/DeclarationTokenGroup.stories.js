/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import DeclarationTokenGroup from './DeclarationTokenGroup.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/DeclarationTokenGroup',
  component: DeclarationTokenGroup,
};

const Template = (args, { argTypes }) => ({
  components: { DeclarationTokenGroup },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<DeclarationTokenGroup v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  type: [
    { kind: 'typeIdentifier', text: 'String', identifier: '' },
    { kind: 'text', text: '?' },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  type: [],
};
