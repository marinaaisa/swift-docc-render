/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import ButtonLink from './ButtonLink.vue';

export default {
  title: 'ButtonLink',
  component: ButtonLink,
  argTypes: {
    isDark: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  components: { ButtonLink },
  props: Object.keys(argTypes),
  template: '<ButtonLink :isDark="isDark">Learn More</ButtonLink>',
});

export const Default = Template.bind({});
Default.args = { isDark: false };

export const Dark = Template.bind({});
Dark.args = { isDark: true };
