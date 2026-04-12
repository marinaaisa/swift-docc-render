/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Section from './Section.vue';

export default {
  title: 'Tutorial/Section',
  component: Section,
};

const tutorialStore = {
  state: {
    breakpoint: 'large',
    references: {},
    linkableSections: [],
  },
};

const contentSection = [
  {
    content: [{ type: 'text', text: 'In this section you will build the main user interface.' }],
    media: undefined,
  },
];

const stepsSection = [
  {
    type: 'step',
    content: [{ type: 'text', text: 'Open ContentView.swift in the editor.' }],
    caption: [],
    code: undefined,
    media: undefined,
    runtimePreview: undefined,
  },
  {
    type: 'step',
    content: [{ type: 'text', text: 'Add a VStack to group your views vertically.' }],
    caption: [],
    code: undefined,
    media: undefined,
    runtimePreview: undefined,
  },
];

const Template = (args, { argTypes }) => ({
  components: { Section },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    store: tutorialStore,
  },
  template: '<Section v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  anchor: 'section-1',
  title: 'Build the UI',
  contentSection,
  stepsSection,
  sectionNumber: 1,
  isRuntimePreviewVisible: false,
};

export const NoSteps = Template.bind({});
NoSteps.args = {
  anchor: 'section-2',
  title: 'Introduction',
  contentSection,
  stepsSection: [],
  sectionNumber: 1,
  isRuntimePreviewVisible: false,
};
