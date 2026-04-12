/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import NavMenuItemBase from './NavMenuItemBase.vue';

export default {
  title: 'NavMenuItemBase',
  component: NavMenuItemBase,
};

const Template = (args, { argTypes }) => ({
  components: { NavMenuItemBase },
  props: Object.keys(argTypes),
  template: `
    <ul style="list-style: none; padding: 0; margin: 0; display: flex;">
      <NavMenuItemBase v-bind="$props">
        <a href="/documentation" class="nav-menu-link">Documentation</a>
      </NavMenuItemBase>
    </ul>
  `,
});

export const Default = Template.bind({});
Default.args = {
  animate: true,
};

export const NoAnimation = Template.bind({});
NoAnimation.args = {
  animate: false,
};
