/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import LearningPath from './LearningPath.vue';

export default {
  title: 'TutorialsOverview/LearningPath',
  component: LearningPath,
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

const sections = [
  {
    kind: 'volume',
    name: undefined,
    chapters: [
      {
        name: 'SwiftUI Essentials',
        image: undefined,
        content: [{ type: 'text', text: 'Learn the basics of SwiftUI.' }],
        tutorials: [
          'doc://com.example.MyKit/tutorials/getting-started',
          'doc://com.example.MyKit/tutorials/working-with-ui',
        ],
      },
    ],
  },
  {
    kind: 'resources',
    tiles: [
      {
        identifier: 'documentation',
        title: 'Documentation',
        content: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: 'Browse the API.' }] }],
        action: undefined,
      },
    ],
    content: undefined,
  },
];

const Template = (args, { argTypes }) => ({
  components: { LearningPath },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    store: overviewStore,
  },
  template: '<LearningPath v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  sections,
};

export const VolumesOnly = Template.bind({});
VolumesOnly.args = {
  sections: [sections[0]],
};
