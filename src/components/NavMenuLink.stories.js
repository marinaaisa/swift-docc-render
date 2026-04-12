/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import NavMenuLink from './NavMenuLink.vue';

export default {
  title: 'NavMenuLink',
  component: NavMenuLink,
};

const Template = (args, { argTypes }) => ({
  components: { NavMenuLink },
  props: Object.keys(argTypes),
  template: `
    <ul style="list-style: none; padding: 0; display: flex;">
      <li>
        <NavMenuLink v-bind="$props">Documentation</NavMenuLink>
      </li>
    </ul>
  `,
});

export const Default = Template.bind({});
Default.args = {
  url: '/documentation',
};

export const ExternalUrl = Template.bind({});
ExternalUrl.args = {
  url: 'https://swift.org',
};
