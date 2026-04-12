/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import ParameterAttributes from './ParameterAttributes.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/ParameterAttributes',
  component: ParameterAttributes,
};

const Template = (args, { argTypes }) => ({
  components: { ParameterAttributes },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<ParameterAttributes v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  attributes: [
    { kind: 'default', value: '0' },
    { kind: 'minimum', value: '0' },
    { kind: 'maximum', value: '100' },
  ],
  changes: {},
};

export const AllowedValues = Template.bind({});
AllowedValues.args = {
  attributes: [
    { kind: 'allowedValues', values: ['red', 'green', 'blue'] },
  ],
  changes: {},
};
