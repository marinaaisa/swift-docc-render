/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import QuickNavigationPreview from './QuickNavigationPreview.vue';

export default {
  title: 'Navigator/QuickNavigationPreview',
  component: QuickNavigationPreview,
};

const Template = (args, { argTypes }) => ({
  components: { QuickNavigationPreview },
  props: Object.keys(argTypes),
  template: '<div style="width: 400px; height: 400px; border: 1px solid #ccc;"><QuickNavigationPreview v-bind="$props" /></div>',
});

export const Loading = Template.bind({});
Loading.args = {
  state: 'loading',
  json: null,
};

export const LoadingSlowly = Template.bind({});
LoadingSlowly.args = {
  state: 'loadingSlowly',
  json: null,
};

export const Error = Template.bind({});
Error.args = {
  state: 'error',
  json: null,
};
