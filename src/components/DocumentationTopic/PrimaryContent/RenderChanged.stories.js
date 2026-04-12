/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import RenderChanged from './RenderChanged.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/RenderChanged',
  component: RenderChanged,
};

const Template = (args, { argTypes }) => ({
  components: { RenderChanged },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: `
    <RenderChanged v-bind="$props" v-slot="{ value }">
      <span>{{ value }}</span>
    </RenderChanged>
  `,
});

export const Default = Template.bind({});
Default.args = {
  value: 'Hello World',
  changes: { new: null, previous: null },
  wrapChanges: true,
  renderSingleChange: false,
};

export const WithChanges = Template.bind({});
WithChanges.args = {
  value: 'Hello World',
  changes: { new: 'New Value', previous: 'Old Value' },
  wrapChanges: true,
  renderSingleChange: false,
};
