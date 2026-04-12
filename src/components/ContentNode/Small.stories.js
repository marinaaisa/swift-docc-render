/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Small from './Small.vue';

export default {
  title: 'ContentNode/Small',
  component: Small,
};

const Template = (args, { argTypes }) => ({
  components: { Small },
  props: Object.keys(argTypes),
  template: '<Small v-bind="$props">This text is rendered in a smaller, muted style for supplementary information.</Small>',
});

export const Default = Template.bind({});
Default.args = {};

export const InContext = (args, { argTypes }) => ({
  components: { Small },
  props: Object.keys(argTypes),
  template: `
    <div>
      <p>Regular paragraph text.</p>
      <Small>Supplementary note: this feature requires iOS 16 or later.</Small>
    </div>
  `,
});
InContext.args = {};
