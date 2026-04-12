/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import PagerControl from './PagerControl.vue';

export default {
  title: 'PagerControl',
  component: PagerControl,
};

const Template = (args, { argTypes }) => ({
  components: { PagerControl },
  props: Object.keys(argTypes),
  template: '<PagerControl v-bind="$props" style="--control-size: 3em;" />',
});

export const Next = Template.bind({});
Next.args = {
  action: 'next',
};

export const Previous = Template.bind({});
Previous.args = {
  action: 'previous',
};
