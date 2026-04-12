/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Assessments from './Assessments.vue';

export default {
  title: 'Article/Assessments',
  component: Assessments,
};

const Template = (args, { argTypes }) => ({
  components: { Assessments },
  props: Object.keys(argTypes),
  provide: { navigationBarHeight: 0 },
  template: '<Assessments v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  anchor: 'check-your-understanding',
  assessments: [
    {
      type: 'multipleChoice',
      title: [{ type: 'text', text: 'What is a property wrapper in Swift?' }],
      choices: [
        {
          content: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: 'A type that adds behavior to a property.' }] }],
          isCorrect: true,
          justification: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: 'Correct!' }] }],
        },
        {
          content: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: 'A wrapper around a function.' }] }],
          isCorrect: false,
          justification: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: 'Not quite.' }] }],
        },
      ],
    },
  ],
};

export const MultipleQuestions = Template.bind({});
MultipleQuestions.args = {
  anchor: 'check-your-understanding',
  assessments: [
    {
      type: 'multipleChoice',
      title: [{ type: 'text', text: 'What keyword declares a constant in Swift?' }],
      choices: [
        {
          content: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: 'let' }] }],
          isCorrect: true,
          justification: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: 'Correct! `let` declares a constant.' }] }],
        },
        {
          content: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: 'var' }] }],
          isCorrect: false,
          justification: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: '`var` declares a variable.' }] }],
        },
      ],
    },
    {
      type: 'multipleChoice',
      title: [{ type: 'text', text: 'What keyword declares a variable in Swift?' }],
      choices: [
        {
          content: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: 'var' }] }],
          isCorrect: true,
          justification: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: 'Correct! `var` declares a variable.' }] }],
        },
        {
          content: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: 'let' }] }],
          isCorrect: false,
          justification: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: '`let` declares a constant.' }] }],
        },
      ],
    },
  ],
};
