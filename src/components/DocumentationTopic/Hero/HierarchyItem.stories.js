/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import HierarchyItem from './HierarchyItem.vue';

export default {
  title: 'DocumentationTopic/Hero/HierarchyItem',
  component: HierarchyItem,
};

const Template = (args, { argTypes }) => ({
  components: { HierarchyItem },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<ul style="display:flex;list-style:none"><HierarchyItem v-bind="$props">Swift Standard Library</HierarchyItem></ul>',
});

export const WithLink = Template.bind({});
WithLink.args = {
  url: '/documentation/swift',
  isCollapsed: false,
};

export const CurrentPage = Template.bind({});
CurrentPage.args = {
  url: undefined,
  isCollapsed: false,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  url: '/documentation/swift',
  isCollapsed: true,
};
