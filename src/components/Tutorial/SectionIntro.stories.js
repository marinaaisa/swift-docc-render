/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import SectionIntro from './SectionIntro.vue';

export default {
  title: 'Tutorial/SectionIntro',
  component: SectionIntro,
};

const Template = (args, { argTypes }) => ({
  components: { SectionIntro },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    references: {},
  },
  template: '<SectionIntro v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Build the UI',
  content: [
    { type: 'text', text: 'In this section, you will build the user interface for your app using SwiftUI views.' },
  ],
  media: undefined,
  sectionAnchor: '#section-1',
  sectionNumber: 1,
  expandedSections: [],
};

export const WithExpandedSections = Template.bind({});
WithExpandedSections.args = {
  title: 'Integrate Data',
  content: [
    { type: 'text', text: 'Connect your UI to a data model.' },
  ],
  media: undefined,
  sectionAnchor: '#section-2',
  sectionNumber: 2,
  expandedSections: [
    {
      type: 'aside',
      style: 'note',
      content: [{ type: 'text', text: 'Make sure to test on a real device.' }],
    },
  ],
};
