/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import LinkableHeading from './LinkableHeading.vue';

export default {
  title: 'ContentNode/LinkableHeading',
  component: LinkableHeading,
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { LinkableHeading },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    enableMinimized: false,
  },
  template: '<LinkableHeading v-bind="$props">Getting Started with SwiftUI</LinkableHeading>',
});

export const H2WithAnchor = Template.bind({});
H2WithAnchor.args = {
  level: 2,
  anchor: 'getting-started',
};

export const H3WithAnchor = Template.bind({});
H3WithAnchor.args = {
  level: 3,
  anchor: 'prerequisites',
};

export const WithoutAnchor = Template.bind({});
WithoutAnchor.args = {
  level: 2,
};
WithoutAnchor.storyName = 'Without Anchor (no link icon)';

export const H1 = Template.bind({});
H1.args = {
  level: 1,
  anchor: 'main-title',
};

export const H4 = Template.bind({});
H4.args = {
  level: 4,
  anchor: 'sub-section',
};
