/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import ParametersTable from './ParametersTable.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/ParametersTable',
  component: ParametersTable,
};

const Template = (args, { argTypes }) => ({
  components: { ParametersTable },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: `
    <ParametersTable v-bind="$props">
      <template #symbol="{ name }">
        <code>{{ name }}</code>
      </template>
      <template #description="{ content }">
        <span>{{ content }}</span>
      </template>
    </ParametersTable>
  `,
});

export const Default = Template.bind({});
Default.args = {
  parameters: [
    { name: 'timeout', content: 'The timeout interval in seconds.' },
    { name: 'callback', content: 'The completion handler to call.' },
  ],
  changes: {},
  keyBy: 'name',
};
