/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Volume from './Volume.vue';

export default {
  title: 'TutorialsOverview/Volume',
  component: Volume,
};

const overviewStore = {
  setActiveSidebarLink() {},
  setActiveVolume() {},
  state: {
    references: {
      'doc://com.example.MyKit/tutorials/getting-started': {
        title: 'Getting Started',
        url: '/tutorials/mykit/getting-started',
        kind: 'project',
        estimatedTime: '20 min',
      },
      'doc://com.example.MyKit/tutorials/working-with-ui': {
        title: 'Working with UI Controls',
        url: '/tutorials/mykit/working-with-ui',
        kind: 'project',
        estimatedTime: '35 min',
      },
    },
    activeVolume: null,
    activeTutorialLink: null,
  },
};

const chapters = [
  {
    name: 'SwiftUI Essentials',
    image: undefined,
    content: [{ type: 'text', text: 'Learn the basics of creating views.' }],
    tutorials: [
      'doc://com.example.MyKit/tutorials/getting-started',
      'doc://com.example.MyKit/tutorials/working-with-ui',
    ],
  },
];

const Template = (args, { argTypes }) => ({
  components: { Volume },
  props: Object.keys(argTypes),
  provide: {
    store: overviewStore,
  },
  template: '<Volume v-bind="$props" />',
});

export const Unnamed = Template.bind({});
Unnamed.args = {
  chapters,
  name: undefined,
  content: undefined,
  image: undefined,
};

export const Named = Template.bind({});
Named.args = {
  chapters,
  name: 'Foundations',
  content: [
    { type: 'text', text: 'Start your SwiftUI journey here.' },
  ],
  image: undefined,
};
