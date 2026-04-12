/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import SVGIcon from './SVGIcon.vue';

export default {
  title: 'SVGIcon',
  component: SVGIcon,
};

const Template = (args, { argTypes }) => ({
  components: { SVGIcon },
  props: Object.keys(argTypes),
  template: `
    <SVGIcon v-bind="$props" style="width: 24px; height: 24px;">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
    </SVGIcon>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const WithThemeId = Template.bind({});
WithThemeId.args = {
  themeId: 'my-icon',
};
