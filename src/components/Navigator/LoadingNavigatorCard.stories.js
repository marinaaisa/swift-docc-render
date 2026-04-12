/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import LoadingNavigatorCard from './LoadingNavigatorCard.vue';

export default {
  title: 'Navigator/LoadingNavigatorCard',
  component: LoadingNavigatorCard,
};

const Template = (args, { argTypes }) => ({
  components: { LoadingNavigatorCard },
  props: Object.keys(argTypes),
  template: '<div style="width: 300px; height: 500px; position: relative;"><LoadingNavigatorCard v-bind="$props" /></div>',
});

export const Default = Template.bind({});
Default.args = {};
