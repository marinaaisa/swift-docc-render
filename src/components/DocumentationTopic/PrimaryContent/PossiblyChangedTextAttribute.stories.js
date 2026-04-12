/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import PossiblyChangedTextAttribute from './PossiblyChangedTextAttribute.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/PossiblyChangedTextAttribute',
  component: PossiblyChangedTextAttribute,
};

const Template = (args, { argTypes }) => ({
  components: { PossiblyChangedTextAttribute },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<PossiblyChangedTextAttribute v-bind="$props">(Required) </PossiblyChangedTextAttribute>',
});

export const Required = Template.bind({});
Required.args = {
  value: true,
  changes: undefined,
};

export const NotRequired = Template.bind({});
NotRequired.args = {
  value: false,
  changes: undefined,
};
