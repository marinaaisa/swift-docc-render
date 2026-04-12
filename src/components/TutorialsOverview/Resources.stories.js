/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Resources from './Resources.vue';

export default {
  title: 'TutorialsOverview/Resources',
  component: Resources,
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

const tiles = [
  {
    identifier: 'documentation',
    title: 'Documentation',
    content: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: 'Browse the full API reference.' }] }],
    action: undefined,
  },
  {
    identifier: 'forums',
    title: 'Forums',
    content: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: 'Ask questions with other developers.' }] }],
    action: undefined,
  },
  {
    identifier: 'sampleCode',
    title: 'Sample Code',
    content: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: 'Explore sample projects.' }] }],
    action: undefined,
  },
];

const Template = (args, { argTypes }) => ({
  components: { Resources },
  props: Object.keys(argTypes),
  provide: {
    store: overviewStore,
    references: {},
  },
  template: '<Resources v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  tiles,
  content: [
    { type: 'paragraph', inlineContent: [{ type: 'text', text: 'Explore more resources to help you on your learning journey.' }] },
  ],
};

export const NoContent = Template.bind({});
NoContent.args = {
  tiles,
  content: undefined,
};
