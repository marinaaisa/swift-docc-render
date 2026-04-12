/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Badge from './Badge.vue';

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['', 'beta', 'deprecated'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Badge },
  props: Object.keys(argTypes),
  template: '<Badge :variant="variant" />',
});

export const Default = Template.bind({});
Default.args = { variant: '' };

export const Beta = Template.bind({});
Beta.args = { variant: 'beta' };

export const Deprecated = Template.bind({});
Deprecated.args = { variant: 'deprecated' };
