/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Hero from './Hero.vue';

export default {
  title: 'Tutorial/Hero',
  component: Hero,
};

const Template = (args, { argTypes }) => ({
  components: { Hero },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    references: {},
    store: {
      state: {
        references: {},
        linkableSections: [],
      },
    },
  },
  template: '<Hero v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Getting Started with MyKit',
  chapter: 'Chapter 1',
  content: [
    { type: 'text', text: 'In this tutorial, you will learn how to build a great app using MyKit.' },
  ],
  estimatedTimeInMinutes: 30,
  projectFiles: undefined,
  xcodeRequirement: undefined,
  video: undefined,
  backgroundImage: undefined,
};

export const NoChapterNoContent = Template.bind({});
NoChapterNoContent.args = {
  title: 'Build a Complete App',
  estimatedTimeInMinutes: 45,
};

export const WithEstimatedTime = Template.bind({});
WithEstimatedTime.args = {
  title: 'Introduction to SwiftUI',
  chapter: 'SwiftUI Essentials',
  content: [
    { type: 'text', text: 'Learn how to create views and modify them to change their appearance and behavior.' },
  ],
  estimatedTimeInMinutes: 60,
};
