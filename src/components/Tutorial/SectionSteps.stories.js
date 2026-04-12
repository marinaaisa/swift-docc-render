/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import SectionSteps from './SectionSteps.vue';

export default {
  title: 'Tutorial/SectionSteps',
  component: SectionSteps,
};

const tutorialStore = {
  state: {
    breakpoint: 'large',
    references: {},
  },
};

const steps = [
  {
    type: 'step',
    content: [{ type: 'text', text: 'Add a new SwiftUI View file named ContentView.swift.' }],
    caption: [],
    code: undefined,
    media: undefined,
    runtimePreview: undefined,
  },
  {
    type: 'step',
    content: [{ type: 'text', text: 'Declare the ContentView structure adopting the View protocol.' }],
    caption: [],
    code: undefined,
    media: undefined,
    runtimePreview: undefined,
  },
  {
    type: 'step',
    content: [{ type: 'text', text: 'Add a Text("Hello, World!") view to the body.' }],
    caption: [],
    code: undefined,
    media: undefined,
    runtimePreview: undefined,
  },
];

const Template = (args, { argTypes }) => ({
  components: { SectionSteps },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    store: tutorialStore,
  },
  template: '<SectionSteps v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  content: steps,
  sectionNumber: 1,
  isRuntimePreviewVisible: false,
};
