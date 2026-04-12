/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import TaskList from './TaskList.vue';

export default {
  title: 'ContentNode/TaskList',
  component: TaskList,
};

const Template = (args, { argTypes }) => ({
  components: { TaskList },
  props: Object.keys(argTypes),
  template: `
    <TaskList v-bind="$props">
      <template #task="{ task }">
        <span v-if="task.content">
          <span v-for="(node, i) in task.content" :key="i">{{ node.text }}</span>
        </span>
      </template>
    </TaskList>
  `,
});

export const Default = Template.bind({});
Default.args = {
  tasks: [
    { checked: false, content: [{ type: 'text', text: 'Install Xcode from the App Store' }] },
    { checked: true, content: [{ type: 'text', text: 'Create a new SwiftUI project' }] },
    { checked: false, content: [{ type: 'text', text: 'Add the Swift package dependency' }] },
    { checked: false, content: [{ type: 'text', text: 'Run the project on a simulator' }] },
  ],
};

export const AllChecked = Template.bind({});
AllChecked.args = {
  tasks: [
    { checked: true, content: [{ type: 'text', text: 'Review the getting started guide' }] },
    { checked: true, content: [{ type: 'text', text: 'Complete the sample project' }] },
    { checked: true, content: [{ type: 'text', text: 'Submit the app for review' }] },
  ],
};

export const MixedList = Template.bind({});
MixedList.args = {
  tasks: [
    { checked: true, content: [{ type: 'text', text: 'Step one — completed' }] },
    { checked: false, content: [{ type: 'text', text: 'Step two — in progress' }] },
    { content: [{ type: 'text', text: 'A regular list item without checkbox' }] },
    { checked: false, content: [{ type: 'text', text: 'Step three — not started' }] },
  ],
};
