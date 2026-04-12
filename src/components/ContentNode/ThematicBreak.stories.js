/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import ThematicBreak from './ThematicBreak.vue';

export default {
  title: 'ContentNode/ThematicBreak',
  component: ThematicBreak,
};

const Template = (args, { argTypes }) => ({
  components: { ThematicBreak },
  props: Object.keys(argTypes),
  template: `
    <div>
      <p>Content above the thematic break — this section discusses the first topic.</p>
      <ThematicBreak v-bind="$props" />
      <p>Content below the thematic break — this section discusses the second topic.</p>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};
