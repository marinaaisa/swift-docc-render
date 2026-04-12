/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import LoadingNavigatorItem from './LoadingNavigatorItem.vue';

export default {
  title: 'Navigator/LoadingNavigatorItem',
  component: LoadingNavigatorItem,
};

const Template = (args, { argTypes }) => ({
  components: { LoadingNavigatorItem },
  props: Object.keys(argTypes),
  template: '<LoadingNavigatorItem v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  index: 0,
  width: '50%',
  hideNavigatorIcon: false,
};

export const WideLoader = Template.bind({});
WideLoader.args = {
  index: 1,
  width: '80%',
  hideNavigatorIcon: false,
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  index: 0,
  width: '30%',
  hideNavigatorIcon: true,
};
