/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import BetaLegalText from './BetaLegalText.vue';

export default {
  title: 'DocumentationTopic/BetaLegalText',
  component: BetaLegalText,
};

const Template = (args, { argTypes }) => ({
  components: { BetaLegalText },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<BetaLegalText v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {};
