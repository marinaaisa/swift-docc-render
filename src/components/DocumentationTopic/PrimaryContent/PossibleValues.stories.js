/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import PossibleValues from './PossibleValues.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/PossibleValues',
  component: PossibleValues,
};

const Template = (args, { argTypes }) => ({
  components: { PossibleValues },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<PossibleValues v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  values: [
    {
      name: 'top',
      content: [
        {
          type: 'paragraph',
          inlineContent: [{ type: 'text', text: 'Aligns content at the top.' }],
        },
      ],
    },
    {
      name: 'center',
      content: [
        {
          type: 'paragraph',
          inlineContent: [{ type: 'text', text: 'Aligns content at the center.' }],
        },
      ],
    },
    {
      name: 'bottom',
      content: [
        {
          type: 'paragraph',
          inlineContent: [{ type: 'text', text: 'Aligns content at the bottom.' }],
        },
      ],
    },
  ],
};
