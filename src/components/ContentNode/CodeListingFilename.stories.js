/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import CodeListingFilename from './CodeListingFilename.vue';

export default {
  title: 'ContentNode/CodeListingFilename',
  component: CodeListingFilename,
};

const Template = (args, { argTypes }) => ({
  components: { CodeListingFilename },
  props: Object.keys(argTypes),
  template: '<CodeListingFilename v-bind="$props">ContentView.swift</CodeListingFilename>',
});

export const Default = Template.bind({});
Default.args = {
  fileType: 'swift',
  isActionable: false,
};

export const Actionable = Template.bind({});
Actionable.args = {
  fileType: 'swift',
  isActionable: true,
};

export const GenericFileType = Template.bind({});
GenericFileType.args = {
  fileType: 'json',
  isActionable: false,
};
