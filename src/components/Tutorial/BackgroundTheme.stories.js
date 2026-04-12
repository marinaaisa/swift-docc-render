/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import BackgroundTheme from './BackgroundTheme.vue';

export default {
  title: 'Tutorial/BackgroundTheme',
  component: BackgroundTheme,
};

const Template = (args, { argTypes }) => ({
  components: { BackgroundTheme },
  props: Object.keys(argTypes),
  template: `
    <BackgroundTheme v-bind="$props">
      <div style="padding: 24px; font-size: 16px;">
        Content inside BackgroundTheme wrapper
      </div>
    </BackgroundTheme>
  `,
});

export const Default = Template.bind({});
Default.args = {};
