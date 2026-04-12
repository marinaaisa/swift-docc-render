/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import PropertyListKeyType from './PropertyListKeyType.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/PropertyListKeyType',
  component: PropertyListKeyType,
};

const Template = (args, { argTypes }) => ({
  components: { PropertyListKeyType },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<PropertyListKeyType v-bind="$props" />',
});

export const StringType = Template.bind({});
StringType.args = {
  types: [{ baseType: 'string' }],
};

export const ArrayOfStrings = Template.bind({});
ArrayOfStrings.args = {
  types: [{ baseType: 'string', arrayMode: true }],
};

export const MultipleTypes = Template.bind({});
MultipleTypes.args = {
  types: [
    { baseType: 'string' },
    { baseType: 'number' },
  ],
};
