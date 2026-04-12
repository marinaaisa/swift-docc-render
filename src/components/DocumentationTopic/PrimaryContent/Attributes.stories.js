/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Attributes from './Attributes.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/Attributes',
  component: Attributes,
};

const Template = (args, { argTypes }) => ({
  components: { Attributes },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<Attributes v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  attributes: [
    { kind: 'default', value: '0' },
    { kind: 'minimum', value: '0' },
    { kind: 'maximum', value: '255' },
  ],
};
