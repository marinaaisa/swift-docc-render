/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import TutorialsNavigationList from './TutorialsNavigationList.vue';
import TutorialsNavigationLink from './TutorialsNavigationLink.vue';

export default {
  title: 'TutorialsOverview/TutorialsNavigationList',
  component: TutorialsNavigationList,
};

const navStore = {
  state: {
    activeTutorialLink: 'SwiftUI Essentials',
    activeVolume: null,
  },
  setActiveVolume() {},
};

const Template = (args, { argTypes }) => ({
  components: { TutorialsNavigationList, TutorialsNavigationLink },
  props: Object.keys(argTypes),
  provide: {
    store: navStore,
  },
  template: `
    <TutorialsNavigationList v-bind="$props">
      <li><TutorialsNavigationLink>SwiftUI Essentials</TutorialsNavigationLink></li>
      <li><TutorialsNavigationLink>Drawing and Animation</TutorialsNavigationLink></li>
      <li><TutorialsNavigationLink>App Design and Layout</TutorialsNavigationLink></li>
    </TutorialsNavigationList>
  `,
});

export const Default = Template.bind({});
Default.args = {};
