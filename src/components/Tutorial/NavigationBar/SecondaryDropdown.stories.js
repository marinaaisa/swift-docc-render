/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import SecondaryDropdown from './SecondaryDropdown.vue';

export default {
  title: 'Tutorial/NavigationBar/SecondaryDropdown',
  component: SecondaryDropdown,
};

const options = [
  { title: 'Introduction', path: '/tutorials/mykit/getting-started#introduction', depth: 0 },
  { title: 'Build the UI', path: '/tutorials/mykit/getting-started#section-1', depth: 0 },
  { title: 'Add Interactions', path: '/tutorials/mykit/getting-started#section-2', depth: 0 },
];

const Template = (args, { argTypes }) => ({
  components: { SecondaryDropdown },
  props: Object.keys(argTypes),
  template: '<SecondaryDropdown v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  options,
  currentOption: 'Build the UI',
  sectionTracker: '1 of 2',
};

export const NoSectionTracker = Template.bind({});
NoSectionTracker.args = {
  options,
  currentOption: 'Introduction',
  sectionTracker: undefined,
};
