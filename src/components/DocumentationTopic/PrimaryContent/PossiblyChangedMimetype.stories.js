/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import PossiblyChangedMimetype from './PossiblyChangedMimetype.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/PossiblyChangedMimetype',
  component: PossiblyChangedMimetype,
};

const Template = (args, { argTypes }) => ({
  components: { PossiblyChangedMimetype },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<PossiblyChangedMimetype v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  mimetype: 'application/json',
};
