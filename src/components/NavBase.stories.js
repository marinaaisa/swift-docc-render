/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import NavBase from './NavBase.vue';

export default {
  title: 'NavBase',
  component: NavBase,
};

const Template = (args, { argTypes }) => ({
  components: { NavBase },
  props: Object.keys(argTypes),
  template: `
    <NavBase v-bind="$props">
      <template #default>
        <a href="/" style="text-decoration: none; font-weight: bold;">Swift</a>
      </template>
      <template #menu-items>
        <li style="list-style: none; display: inline-block; margin-left: 16px;">
          <a href="/documentation">Documentation</a>
        </li>
        <li style="list-style: none; display: inline-block; margin-left: 16px;">
          <a href="/tutorials">Tutorials</a>
        </li>
      </template>
    </NavBase>
  `,
});

export const Default = Template.bind({});
Default.args = {
  breakpoint: 'small',
  hasOverlay: true,
  hasSolidBackground: false,
  hasNoBorder: false,
  isDark: false,
  isWideFormat: false,
  showActions: true,
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  breakpoint: 'small',
  hasOverlay: true,
  hasSolidBackground: true,
  hasNoBorder: false,
  isDark: true,
  isWideFormat: false,
  showActions: true,
};

export const SolidBackground = Template.bind({});
SolidBackground.args = {
  breakpoint: 'small',
  hasOverlay: false,
  hasSolidBackground: true,
  hasNoBorder: false,
  isDark: false,
  isWideFormat: false,
  showActions: true,
};
