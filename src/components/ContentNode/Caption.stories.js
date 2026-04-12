/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Caption from './Caption.vue';

export default {
  title: 'ContentNode/Caption',
  component: Caption,
  argTypes: {
    tag: {
      control: { type: 'select' },
      options: ['figcaption', 'caption'],
    },
    position: {
      control: { type: 'select' },
      options: ['leading', 'trailing'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Caption },
  props: Object.keys(argTypes),
  template: '<Caption v-bind="$props">A description of the figure or table shown above.</Caption>',
});

export const Figcaption = Template.bind({});
Figcaption.args = {
  tag: 'figcaption',
  position: 'trailing',
};

export const FigcaptionWithTitle = Template.bind({});
FigcaptionWithTitle.args = {
  tag: 'figcaption',
  title: 'Figure 1',
  position: 'trailing',
};

export const Leading = Template.bind({});
Leading.args = {
  tag: 'figcaption',
  position: 'leading',
};
