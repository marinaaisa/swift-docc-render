/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import NavigationBar from './NavigationBar.vue';

export default {
  title: 'Tutorial/NavigationBar',
  component: NavigationBar,
};

const chapters = [
  {
    reference: 'doc://com.example.MyKit/tutorials/chapter-1',
    projects: [
      {
        reference: 'doc://com.example.MyKit/tutorials/getting-started',
        sections: [
          { reference: 'introduction', sectionNumber: 0, depth: 0 },
          { reference: 'section-1', sectionNumber: 1, depth: 0 },
          { reference: 'section-2', sectionNumber: 2, depth: 0 },
        ],
      },
    ],
  },
];

const tutorialStore = {
  state: {
    linkableSections: [],
    references: {
      'doc://com.example.MyKit/tutorials/chapter-1': {
        title: 'SwiftUI Essentials',
        url: '/tutorials/mykit/chapter-1',
      },
      'doc://com.example.MyKit/tutorials/getting-started': {
        title: 'Getting Started',
        url: '/tutorials/mykit/getting-started',
      },
      'doc://com.example.MyKit': {
        title: 'MyKit',
        url: '/tutorials/mykit',
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { NavigationBar },
  props: Object.keys(argTypes),
  provide: {
    references: tutorialStore.state.references,
    store: tutorialStore,
  },
  template: '<NavigationBar v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  technology: 'MyKit',
  topic: 'Getting Started',
  rootReference: 'doc://com.example.MyKit',
  identifierUrl: 'doc://com.example.MyKit/tutorials/getting-started',
  chapters,
};
