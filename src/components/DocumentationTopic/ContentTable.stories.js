/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import ContentTable from './ContentTable.vue';

export default {
  title: 'DocumentationTopic/ContentTable',
  component: ContentTable,
};

const Template = (args, { argTypes }) => ({
  components: { ContentTable },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<ContentTable v-bind="$props"><p>Slot content goes here.</p></ContentTable>',
});

export const Default = Template.bind({});
Default.args = {
  anchor: 'topics',
  title: 'Topics',
  enableMinimized: false,
};
