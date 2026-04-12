/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Nav from './Nav.vue';

export default {
  title: 'TutorialsOverview/Nav',
  component: Nav,
};

const overviewStore = {
  state: {
    activeTutorialLink: null,
    activeVolume: null,
  },
  setActiveVolume() {},
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
    ],
  },
  { kind: 'resources' },
];

const Template = (args, { argTypes }) => ({
  components: { Nav },
  props: Object.keys(argTypes),
  provide: {
    store: overviewStore,
  },
  template: '<Nav v-bind="$props">SwiftUI</Nav>',
});

export const Default = Template.bind({});
Default.args = {
  sections,
};
