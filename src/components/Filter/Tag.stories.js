/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Tag from './Tag.vue';

export default {
  title: 'Filter/Tag',
  component: Tag,
};

const Template = (args, { argTypes }) => ({
  components: { Tag },
  props: Object.keys(argTypes),
  template: '<ul style="list-style:none; padding:0; display:flex;"><Tag v-bind="$props" /></ul>',
});

export const Default = Template.bind({});
Default.args = {
  name: 'SwiftUI',
  isFocused: false,
  isRemovableTag: false,
  isActiveTag: false,
  activeTags: [],
  keyboardIsVirtual: false,
};

export const Removable = Template.bind({});
Removable.args = {
  name: 'SwiftUI',
  isFocused: false,
  isRemovableTag: true,
  isActiveTag: false,
  activeTags: [],
  keyboardIsVirtual: false,
};

export const Active = Template.bind({});
Active.args = {
  name: 'UIKit',
  isFocused: false,
  isRemovableTag: false,
  isActiveTag: true,
  activeTags: ['UIKit'],
  keyboardIsVirtual: false,
};

export const Focused = Template.bind({});
Focused.args = {
  name: 'Combine',
  isFocused: true,
  isRemovableTag: false,
  isActiveTag: false,
  activeTags: [],
  keyboardIsVirtual: false,
};

export const RemovableAndActive = Template.bind({});
RemovableAndActive.args = {
  name: 'AppKit',
  isFocused: false,
  isRemovableTag: true,
  isActiveTag: true,
  activeTags: ['AppKit'],
  keyboardIsVirtual: false,
};
