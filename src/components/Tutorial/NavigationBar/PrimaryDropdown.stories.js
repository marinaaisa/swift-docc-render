/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import PrimaryDropdown from './PrimaryDropdown.vue';

export default {
  title: 'Tutorial/NavigationBar/PrimaryDropdown',
  component: PrimaryDropdown,
};

const options = [
  {
    reference: 'doc://com.example.MyKit/tutorials/chapter-1',
    projects: [
      { reference: 'doc://com.example.MyKit/tutorials/getting-started' },
      { reference: 'doc://com.example.MyKit/tutorials/working-with-ui' },
    ],
  },
  {
    reference: 'doc://com.example.MyKit/tutorials/chapter-2',
    projects: [
      { reference: 'doc://com.example.MyKit/tutorials/drawing-paths' },
    ],
  },
];

const references = {
  'doc://com.example.MyKit/tutorials/chapter-1': { title: 'SwiftUI Essentials', url: '/tutorials/mykit/chapter-1' },
  'doc://com.example.MyKit/tutorials/chapter-2': { title: 'Drawing and Animation', url: '/tutorials/mykit/chapter-2' },
  'doc://com.example.MyKit/tutorials/getting-started': { title: 'Getting Started', url: '/tutorials/mykit/getting-started' },
  'doc://com.example.MyKit/tutorials/working-with-ui': { title: 'Working with UI Controls', url: '/tutorials/mykit/working-with-ui' },
  'doc://com.example.MyKit/tutorials/drawing-paths': { title: 'Drawing Paths and Shapes', url: '/tutorials/mykit/drawing-paths' },
};

const Template = (args, { argTypes }) => ({
  components: { PrimaryDropdown },
  props: Object.keys(argTypes),
  provide: {
    references,
  },
  template: '<PrimaryDropdown v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  options,
  currentOption: 'Getting Started',
};
