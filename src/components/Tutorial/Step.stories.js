/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Step from './Step.vue';

export default {
  title: 'Tutorial/Step',
  component: Step,
};

const tutorialStore = {
  state: {
    breakpoint: 'large',
    references: {},
  },
};

const Template = (args, { argTypes }) => ({
  components: { Step },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    store: tutorialStore,
  },
  template: '<Step v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  content: [
    { type: 'text', text: 'Add a new SwiftUI View file named ContentView.swift to your project.' },
  ],
  caption: undefined,
  code: undefined,
  media: undefined,
  runtimePreview: undefined,
  stepNumber: 1,
  numberOfSteps: 3,
  sectionNumber: 1,
  index: 0,
  currentIndex: 0,
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  content: [
    { type: 'text', text: 'Declare a ContentView structure that adopts the View protocol.' },
  ],
  stepNumber: 2,
  index: 1,
  currentIndex: 1,
};

export const WithCaption = Template.bind({});
WithCaption.args = {
  ...Default.args,
  content: [
    { type: 'text', text: 'Add the Text view to the body property.' },
  ],
  caption: [
    { type: 'text', text: 'The Text view displays the string "Hello, World!" in the canvas.' },
  ],
  stepNumber: 3,
  index: 2,
  currentIndex: 0,
};
