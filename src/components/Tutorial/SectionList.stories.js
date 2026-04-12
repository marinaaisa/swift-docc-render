/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import SectionList from './SectionList.vue';

export default {
  title: 'Tutorial/SectionList',
  component: SectionList,
};

const tutorialStore = {
  state: {
    breakpoint: 'large',
    references: {},
    linkableSections: [],
  },
};

const tasks = [
  {
    anchor: 'section-1',
    title: 'Build the UI',
    contentSection: [
      {
        content: [{ type: 'text', text: 'Build the initial user interface.' }],
        media: undefined,
      },
    ],
    stepsSection: [
      {
        type: 'step',
        content: [{ type: 'text', text: 'Open ContentView.swift.' }],
        caption: [],
        code: undefined,
        media: undefined,
        runtimePreview: undefined,
      },
    ],
  },
  {
    anchor: 'section-2',
    title: 'Connect the Data',
    contentSection: [
      {
        content: [{ type: 'text', text: 'Integrate a data model into the UI.' }],
        media: undefined,
      },
    ],
    stepsSection: [
      {
        type: 'step',
        content: [{ type: 'text', text: 'Add the @State property.' }],
        caption: [],
        code: undefined,
        media: undefined,
        runtimePreview: undefined,
      },
    ],
  },
];

const Template = (args, { argTypes }) => ({
  components: { SectionList },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    store: tutorialStore,
  },
  template: '<SectionList v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  tasks,
};
