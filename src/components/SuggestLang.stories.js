/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import SuggestLang from './SuggestLang.vue';

export default {
  title: 'SuggestLang',
  component: SuggestLang,
};

const Template = (args, { argTypes }) => ({
  components: { SuggestLang },
  props: Object.keys(argTypes),
  template: '<SuggestLang v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {};
