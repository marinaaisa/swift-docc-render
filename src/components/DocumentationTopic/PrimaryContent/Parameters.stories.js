/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Parameters from './Parameters.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/Parameters',
  component: Parameters,
};

const Template = (args, { argTypes }) => ({
  components: { Parameters },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<Parameters v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  parameters: [
    {
      name: 'name',
      content: [
        {
          type: 'paragraph',
          inlineContent: [{ type: 'text', text: 'The name to greet.' }],
        },
      ],
    },
    {
      name: 'animated',
      content: [
        {
          type: 'paragraph',
          inlineContent: [
            { type: 'text', text: 'Pass ' },
            { type: 'codeVoice', code: 'true' },
            { type: 'text', text: ' to animate the transition.' },
          ],
        },
      ],
    },
  ],
};
