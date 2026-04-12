/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import AssessmentsProgress from './AssessmentsProgress.vue';

export default {
  title: 'Tutorial/AssessmentsProgress',
  component: AssessmentsProgress,
};

const Template = (args, { argTypes }) => ({
  components: { AssessmentsProgress },
  props: Object.keys(argTypes),
  template: '<AssessmentsProgress v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  index: 1,
  total: 3,
};

export const Last = Template.bind({});
Last.args = {
  index: 3,
  total: 3,
};
