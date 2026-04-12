/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Aside from './Aside.vue';

export default {
  title: 'ContentNode/Aside',
  component: Aside,
  argTypes: {
    kind: {
      control: { type: 'select' },
      options: ['note', 'warning', 'important', 'tip', 'experiment', 'deprecated'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Aside },
  props: Object.keys(argTypes),
  template: '<Aside v-bind="$props">This is the aside content describing something important to the reader.</Aside>',
});

export const Note = Template.bind({});
Note.args = { kind: 'note' };

export const Warning = Template.bind({});
Warning.args = { kind: 'warning' };

export const Important = Template.bind({});
Important.args = { kind: 'important' };

export const Tip = Template.bind({});
Tip.args = { kind: 'tip' };

export const Experiment = Template.bind({});
Experiment.args = { kind: 'experiment' };

export const Deprecated = Template.bind({});
Deprecated.args = { kind: 'deprecated' };

export const WithCustomName = Template.bind({});
WithCustomName.args = { kind: 'note', name: 'Custom Label' };
