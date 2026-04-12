/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import ResourcesTile from './ResourcesTile.vue';

export default {
  title: 'TutorialsOverview/ResourcesTile',
  component: ResourcesTile,
};

const Template = (args, { argTypes }) => ({
  components: { ResourcesTile },
  props: Object.keys(argTypes),
  provide: {
    references: {},
  },
  template: '<ResourcesTile v-bind="$props" />',
});

export const Documentation = Template.bind({});
Documentation.args = {
  identifier: 'documentation',
  title: 'Documentation',
  content: [
    { type: 'paragraph', inlineContent: [{ type: 'text', text: 'Browse the full API reference documentation.' }] },
  ],
  action: {
    type: 'reference',
    identifier: 'doc://com.example.MyKit/documentation',
    overridingTitle: 'View Documentation',
  },
};

export const Forums = Template.bind({});
Forums.args = {
  identifier: 'forums',
  title: 'Forums',
  content: [
    { type: 'paragraph', inlineContent: [{ type: 'text', text: 'Ask questions and discuss with other developers.' }] },
  ],
  action: {
    type: 'reference',
    identifier: 'https://forums.swift.org',
    overridingTitle: 'Visit Forums',
  },
};

export const SampleCode = Template.bind({});
SampleCode.args = {
  identifier: 'sampleCode',
  title: 'Sample Code',
  content: [
    { type: 'paragraph', inlineContent: [{ type: 'text', text: 'Download and explore sample projects.' }] },
  ],
  action: undefined,
};

export const Videos = Template.bind({});
Videos.args = {
  identifier: 'videos',
  title: 'Videos',
  content: [
    { type: 'paragraph', inlineContent: [{ type: 'text', text: 'Watch WWDC sessions and tutorial videos.' }] },
  ],
  action: undefined,
};
