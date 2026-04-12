/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Chapter from './Chapter.vue';

export default {
  title: 'TutorialsOverview/Chapter',
  component: Chapter,
};

const overviewStore = {
  setActiveSidebarLink() {},
  setActiveVolume() {},
  state: {
    references: {},
    activeVolume: null,
    activeTutorialLink: null,
  },
};

const topics = [
  {
    title: 'Getting Started',
    url: '/tutorials/mykit/getting-started',
    kind: 'project',
    estimatedTime: '20 min',
  },
  {
    title: 'Working with UI Controls',
    url: '/tutorials/mykit/working-with-ui',
    kind: 'project',
    estimatedTime: '35 min',
  },
];

const Template = (args, { argTypes }) => ({
  components: { Chapter },
  props: Object.keys(argTypes),
  provide: {
    store: overviewStore,
    references: {},
  },
  template: '<Chapter v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  name: 'SwiftUI Essentials',
  number: 1,
  image: undefined,
  content: [
    { type: 'text', text: 'Learn the basics of creating views with SwiftUI.' },
  ],
  topics,
  volumeHasName: false,
};

export const InsideNamedVolume = Template.bind({});
InsideNamedVolume.args = {
  name: 'Advanced Drawing',
  number: 2,
  image: undefined,
  content: undefined,
  topics: [
    {
      title: 'Drawing Paths and Shapes',
      url: '/tutorials/mykit/drawing-paths',
      kind: 'project',
      estimatedTime: '25 min',
    },
  ],
  volumeHasName: true,
};
