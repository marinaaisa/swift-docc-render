/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import VolumeName from './VolumeName.vue';

export default {
  title: 'TutorialsOverview/VolumeName',
  component: VolumeName,
};

const Template = (args, { argTypes }) => ({
  components: { VolumeName },
  props: Object.keys(argTypes),
  provide: {
    references: {},
  },
  template: '<VolumeName v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  name: 'SwiftUI Essentials',
  content: [
    { type: 'text', text: 'Master the fundamentals of building apps with SwiftUI.' },
  ],
  image: undefined,
};

export const NameOnly = Template.bind({});
NameOnly.args = {
  name: 'Advanced Topics',
  content: undefined,
  image: undefined,
};
