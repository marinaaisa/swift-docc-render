/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import MobileDropdown from './MobileDropdown.vue';

export default {
  title: 'Tutorial/NavigationBar/MobileDropdown',
  component: MobileDropdown,
};

const options = [
  {
    reference: 'doc://com.example.MyKit/tutorials/chapter-1',
    projects: [
      { reference: 'doc://com.example.MyKit/tutorials/getting-started' },
      { reference: 'doc://com.example.MyKit/tutorials/working-with-ui' },
    ],
  },
];

const references = {
  'doc://com.example.MyKit/tutorials/chapter-1': { title: 'SwiftUI Essentials', url: '/tutorials/mykit/chapter-1' },
  'doc://com.example.MyKit/tutorials/getting-started': { title: 'Getting Started', url: '/tutorials/mykit/getting-started' },
  'doc://com.example.MyKit/tutorials/working-with-ui': { title: 'Working with UI Controls', url: '/tutorials/mykit/working-with-ui' },
};

const sections = [
  { title: 'Introduction', path: '/tutorials/mykit/getting-started#introduction', depth: 0 },
  { title: 'Build the UI', path: '/tutorials/mykit/getting-started#section-1', depth: 0 },
  { title: 'Add Interactions', path: '/tutorials/mykit/getting-started#section-2', depth: 0 },
];

const Template = (args, { argTypes }) => ({
  components: { MobileDropdown },
  props: Object.keys(argTypes),
  provide: {
    references,
  },
  template: '<MobileDropdown v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  options,
  currentOption: 'Getting Started',
  sections,
};

export const NoSections = Template.bind({});
NoSections.args = {
  options,
  currentOption: '',
  sections: [],
};
