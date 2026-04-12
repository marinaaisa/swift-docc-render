/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import OnThisPageNav from './OnThisPageNav.vue';

const storeMock = {
  state: {
    onThisPageSections: [
      { anchor: 'overview', title: 'Overview', level: 2 },
      { anchor: 'getting-started', title: 'Getting Started', level: 2 },
      { anchor: 'installation', title: 'Installation', level: 3 },
      { anchor: 'configuration', title: 'Configuration', level: 3 },
      { anchor: 'next-steps', title: 'Next Steps', level: 2 },
    ],
    currentPageAnchor: 'overview',
  },
  setCurrentPageSection() {},
};

export default {
  title: 'OnThisPageNav',
  component: OnThisPageNav,
};

const Template = (args, { argTypes }) => ({
  components: { OnThisPageNav },
  props: Object.keys(argTypes),
  provide: { store: storeMock },
  template: '<OnThisPageNav v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {};
