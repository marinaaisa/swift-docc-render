/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import HierarchyCollapsedItems from './HierarchyCollapsedItems.vue';

export default {
  title: 'DocumentationTopic/Hero/HierarchyCollapsedItems',
  component: HierarchyCollapsedItems,
};

const Template = (args, { argTypes }) => ({
  components: { HierarchyCollapsedItems },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<ul style="display:flex;list-style:none"><HierarchyCollapsedItems v-bind="$props" /></ul>',
});

export const Default = Template.bind({});
Default.args = {
  topics: [
    { title: 'Swift Standard Library', url: '/documentation/swift' },
    { title: 'Collections', url: '/documentation/swift/collections' },
  ],
};
