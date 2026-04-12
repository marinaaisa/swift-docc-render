/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Quiz from './Quiz.vue';

export default {
  title: 'Tutorial/Assessments/Quiz',
  component: Quiz,
};

const choices = [
  {
    content: [{ type: 'text', text: 'To store mutable state owned by a view.' }],
    isCorrect: true,
    justification: [{ type: 'text', text: 'Correct! @State is used for local mutable state.' }],
    reaction: 'Great answer!',
  },
  {
    content: [{ type: 'text', text: 'To pass data from parent to child views.' }],
    isCorrect: false,
    justification: [{ type: 'text', text: 'That describes @Binding.' }],
    reaction: null,
  },
  {
    content: [{ type: 'text', text: 'To observe changes in an external data model.' }],
    isCorrect: false,
    justification: [{ type: 'text', text: 'That describes @ObservedObject.' }],
    reaction: null,
  },
];

const Template = (args, { argTypes }) => ({
  components: { Quiz },
  props: Object.keys(argTypes),
  template: '<Quiz v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  title: [{ type: 'text', text: 'What is the purpose of the @State property wrapper?' }],
  content: undefined,
  choices,
  isLast: false,
};

export const LastQuestion = Template.bind({});
LastQuestion.args = {
  title: [{ type: 'text', text: 'Which modifier applies padding to a view?' }],
  content: undefined,
  choices: [
    {
      content: [{ type: 'text', text: '.padding()' }],
      isCorrect: true,
      justification: [{ type: 'text', text: 'Correct! .padding() adds spacing around a view.' }],
      reaction: null,
    },
    {
      content: [{ type: 'text', text: '.margin()' }],
      isCorrect: false,
      justification: [{ type: 'text', text: 'SwiftUI uses .padding(), not .margin().' }],
      reaction: null,
    },
  ],
  isLast: true,
};
