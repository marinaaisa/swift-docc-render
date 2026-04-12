/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import TutorialsNavigation from './TutorialsNavigation.vue';

export default {
  title: 'TutorialsOverview/TutorialsNavigation',
  component: TutorialsNavigation,
};

const overviewStore = {
  state: {
    activeTutorialLink: null,
    activeVolume: 'SwiftUI Essentials',
  },
  setActiveVolume(name) {
    this.state.activeVolume = name;
  },
};

const sections = [
  {
    kind: 'volume',
    name: 'SwiftUI Essentials',
    chapters: [
      { name: 'Getting Started' },
      { name: 'Working with UI Controls' },
    ],
  },
  {
    kind: 'volume',
    name: 'Drawing and Animation',
    chapters: [
      { name: 'Drawing Paths' },
      { name: 'Animating Views' },
    ],
  },
  {
    kind: 'resources',
  },
];

const Template = (args, { argTypes }) => ({
  components: { TutorialsNavigation },
  props: Object.keys(argTypes),
  provide: {
    store: overviewStore,
  },
  template: '<TutorialsNavigation v-bind="$props" />',
});

export const WithNamedVolumes = Template.bind({});
WithNamedVolumes.args = {
  sections,
};

export const UnnamedVolume = Template.bind({});
UnnamedVolume.args = {
  sections: [
    {
      kind: 'volume',
      name: undefined,
      chapters: [
        { name: 'Getting Started' },
        { name: 'Advanced Topics' },
      ],
    },
    { kind: 'resources' },
  ],
};
