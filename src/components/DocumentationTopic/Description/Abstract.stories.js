/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Abstract from './Abstract.vue';

export default {
  title: 'DocumentationTopic/Description/Abstract',
  component: Abstract,
};

const Template = (args, { argTypes }) => ({
  components: { Abstract },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<Abstract v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  content: [
    {
      type: 'paragraph',
      inlineContent: [
        { type: 'text', text: 'An ordered, random-access collection.' },
      ],
    },
  ],
};
