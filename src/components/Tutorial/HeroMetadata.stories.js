/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import HeroMetadata from './HeroMetadata.vue';

export default {
  title: 'Tutorial/HeroMetadata',
  component: HeroMetadata,
};

const Template = (args, { argTypes }) => ({
  components: { HeroMetadata },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
  },
  template: '<HeroMetadata v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  estimatedTimeInMinutes: 30,
  projectFilesUrl: undefined,
  xcodeRequirement: undefined,
};

export const WithProjectFiles = Template.bind({});
WithProjectFiles.args = {
  estimatedTimeInMinutes: 45,
  projectFilesUrl: 'https://example.com/project.zip',
  xcodeRequirement: undefined,
};

export const WithXcodeRequirement = Template.bind({});
WithXcodeRequirement.args = {
  estimatedTimeInMinutes: 20,
  projectFilesUrl: undefined,
  xcodeRequirement: {
    title: 'Xcode 15',
    url: 'https://developer.apple.com/xcode/',
  },
};

export const AllFields = Template.bind({});
AllFields.args = {
  estimatedTimeInMinutes: 60,
  projectFilesUrl: 'https://example.com/project.zip',
  xcodeRequirement: {
    title: 'Xcode 15',
    url: 'https://developer.apple.com/xcode/',
  },
};
