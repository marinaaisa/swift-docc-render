/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import NavMenuItem from './NavMenuItem.vue';
import NavMenuItems from './NavMenuItems.vue';

export default {
  title: 'NavMenuItem',
  component: NavMenuItem,
};

const Template = (args, { argTypes }) => ({
  components: { NavMenuItem, NavMenuItems },
  props: Object.keys(argTypes),
  template: `
    <nav>
      <NavMenuItems>
        <NavMenuItem v-bind="$props">Documentation</NavMenuItem>
      </NavMenuItems>
    </nav>
  `,
});

export const Default = Template.bind({});
Default.args = {
  url: '/documentation',
};

export const MultipleItems = () => ({
  components: { NavMenuItem, NavMenuItems },
  template: `
    <nav>
      <NavMenuItems>
        <NavMenuItem url="/documentation">Documentation</NavMenuItem>
        <NavMenuItem url="/tutorials">Tutorials</NavMenuItem>
        <NavMenuItem url="/downloads">Downloads</NavMenuItem>
      </NavMenuItems>
    </nav>
  `,
});
