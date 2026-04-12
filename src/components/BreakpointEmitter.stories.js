/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import BreakpointEmitter from './BreakpointEmitter.vue';

export default {
  title: 'BreakpointEmitter',
  component: BreakpointEmitter,
};

const Template = (args, { argTypes }) => ({
  components: { BreakpointEmitter },
  props: Object.keys(argTypes),
  data() {
    return { currentBreakpoint: null };
  },
  template: `
    <div>
      <BreakpointEmitter v-bind="$props" @change="currentBreakpoint = $event" />
      <p>Current breakpoint: <strong>{{ currentBreakpoint || '(none yet)' }}</strong></p>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  scope: 'default',
};

export const NavScope = Template.bind({});
NavScope.args = {
  scope: 'nav',
};
