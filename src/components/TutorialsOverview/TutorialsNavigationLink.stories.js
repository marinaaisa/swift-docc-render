/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import TutorialsNavigationLink from './TutorialsNavigationLink.vue';

export default {
  title: 'TutorialsOverview/TutorialsNavigationLink',
  component: TutorialsNavigationLink,
};

const navStore = {
  state: {
    activeTutorialLink: 'SwiftUI Essentials',
    activeVolume: null,
  },
  setActiveVolume() {},
};

const Template = (args, { argTypes }) => ({
  components: { TutorialsNavigationLink },
  props: Object.keys(argTypes),
  provide: {
    store: navStore,
  },
  template: '<TutorialsNavigationLink v-bind="$props">SwiftUI Essentials</TutorialsNavigationLink>',
});

export const Active = Template.bind({});
Active.args = {};

const InactiveTemplate = (args, { argTypes }) => ({
  components: { TutorialsNavigationLink },
  props: Object.keys(argTypes),
  provide: {
    store: navStore,
  },
  template: '<TutorialsNavigationLink v-bind="$props">Drawing and Animation</TutorialsNavigationLink>',
});

export const Inactive = InactiveTemplate.bind({});
Inactive.args = {};
