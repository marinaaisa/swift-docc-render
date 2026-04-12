/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import TutorialsNavigationMenu from './TutorialsNavigationMenu.vue';
import TutorialsNavigationLink from './TutorialsNavigationLink.vue';

export default {
  title: 'TutorialsOverview/TutorialsNavigationMenu',
  component: TutorialsNavigationMenu,
};

const navStore = {
  state: {
    activeTutorialLink: null,
    activeVolume: null,
  },
  setActiveVolume() {},
};

const Template = (args, { argTypes }) => ({
  components: { TutorialsNavigationMenu, TutorialsNavigationLink },
  props: Object.keys(argTypes),
  provide: {
    store: navStore,
  },
  template: `
    <TutorialsNavigationMenu v-bind="$props">
      <li><TutorialsNavigationLink>Getting Started</TutorialsNavigationLink></li>
      <li><TutorialsNavigationLink>Working with UI Controls</TutorialsNavigationLink></li>
      <li><TutorialsNavigationLink>Handling User Input</TutorialsNavigationLink></li>
    </TutorialsNavigationMenu>
  `,
});

export const Expanded = Template.bind({});
Expanded.args = {
  title: 'SwiftUI Essentials',
  collapsed: false,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  title: 'SwiftUI Essentials',
  collapsed: true,
};
