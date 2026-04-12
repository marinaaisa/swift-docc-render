/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import PossiblyChangedType from './PossiblyChangedType.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/PossiblyChangedType',
  component: PossiblyChangedType,
};

const Template = (args, { argTypes }) => ({
  components: { PossiblyChangedType },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<PossiblyChangedType v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  type: [
    { kind: 'typeIdentifier', text: 'String', identifier: '' },
  ],
};

export const Optional = Template.bind({});
Optional.args = {
  type: [
    { kind: 'typeIdentifier', text: 'String', identifier: '' },
    { kind: 'text', text: '?' },
  ],
};
