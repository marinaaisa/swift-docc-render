/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import PropertyListKeyDetails from './PropertyListKeyDetails.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/PropertyListKeyDetails',
  component: PropertyListKeyDetails,
};

const Template = (args, { argTypes }) => ({
  components: { PropertyListKeyDetails },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<PropertyListKeyDetails v-bind="$props" />',
});

export const SymbolStyle = Template.bind({});
SymbolStyle.args = {
  details: {
    name: 'CFBundleIdentifier',
    ideTitle: 'Bundle Identifier',
    titleStyle: 'symbol',
    value: [{ baseType: 'string' }],
  },
};

export const TitleStyle = Template.bind({});
TitleStyle.args = {
  details: {
    name: 'CFBundleIdentifier',
    ideTitle: 'Bundle Identifier',
    titleStyle: 'title',
    value: [{ baseType: 'string' }],
  },
};
