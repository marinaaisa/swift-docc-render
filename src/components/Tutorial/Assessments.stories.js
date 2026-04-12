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
  title: 'Tutorial/Assessments',
  component: Assessments,
};

const sampleAssessments = [
  {
    title: [{ type: 'text', text: 'What is the purpose of the @State property wrapper?' }],
    content: [],
    choices: [
      {
        content: [{ type: 'text', text: 'To store mutable state owned by a view.' }],
        isCorrect: true,
        justification: [{ type: 'text', text: 'Correct! @State is used for mutable state local to a view.' }],
        reaction: 'Great answer!',
      },
      {
        content: [{ type: 'text', text: 'To pass data from parent to child views.' }],
        isCorrect: false,
        justification: [{ type: 'text', text: 'That describes @Binding. @State is for local mutable state.' }],
        reaction: null,
      },
      {
        content: [{ type: 'text', text: 'To observe changes in an external data model.' }],
        isCorrect: false,
        justification: [{ type: 'text', text: 'That describes @ObservedObject. @State is for local state.' }],
        reaction: null,
      },
    ],
  },
  {
    title: [{ type: 'text', text: 'Which modifier applies padding to a view?' }],
    content: [],
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
  },
];

const Template = (args, { argTypes }) => ({
  components: { Assessments },
  props: Object.keys(argTypes),
  provide: {
    navigationBarHeight: 52,
  },
  template: '<Assessments v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  assessments: sampleAssessments,
  anchor: 'assessments',
};

export const SingleQuestion = Template.bind({});
SingleQuestion.args = {
  assessments: [sampleAssessments[0]],
  anchor: 'check-your-understanding',
};
