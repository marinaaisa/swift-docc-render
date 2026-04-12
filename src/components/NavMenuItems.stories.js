/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import NavMenuItems from './NavMenuItems.vue';

export default {
  title: 'NavMenuItems',
  component: NavMenuItems,
};

const Template = (args, { argTypes }) => ({
  components: { NavMenuItems },
  props: Object.keys(argTypes),
  template: `
    <nav>
      <NavMenuItems v-bind="$props">
        <li style="list-style: none; margin-left: 16px;">
          <a href="/documentation" class="nav-menu-link">Documentation</a>
        </li>
        <li style="list-style: none; margin-left: 16px;">
          <a href="/tutorials" class="nav-menu-link">Tutorials</a>
        </li>
        <li style="list-style: none; margin-left: 16px;">
          <a href="/downloads" class="nav-menu-link">Downloads</a>
        </li>
      </NavMenuItems>
    </nav>
  `,
});

export const Default = Template.bind({});
Default.args = {};
