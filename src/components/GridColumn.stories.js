/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import GridColumn from './GridColumn.vue';
import GridRow from './GridRow.vue';

export default {
  title: 'GridColumn',
  component: GridColumn,
};

const Template = (args, { argTypes }) => ({
  components: { GridColumn, GridRow },
  props: Object.keys(argTypes),
  template: `
    <GridRow>
      <GridColumn v-bind="$props">
        <div style="background: #e0e0ff; padding: 16px; border: 1px solid #aaa;">Column Content</div>
      </GridColumn>
    </GridRow>
  `,
});

export const Default = Template.bind({});
Default.args = {
  span: { large: 6, small: 12 },
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  span: { large: 12 },
};

export const Narrow = Template.bind({});
Narrow.args = {
  span: { large: 3, medium: 6, small: 12 },
};

export const MultipleColumns = () => ({
  components: { GridColumn, GridRow },
  template: `
    <GridRow>
      <GridColumn :span="{ large: 4, small: 12 }">
        <div style="background: #e0e0ff; padding: 16px; border: 1px solid #aaa;">Col 1</div>
      </GridColumn>
      <GridColumn :span="{ large: 4, small: 12 }">
        <div style="background: #ffe0e0; padding: 16px; border: 1px solid #aaa;">Col 2</div>
      </GridColumn>
      <GridColumn :span="{ large: 4, small: 12 }">
        <div style="background: #e0ffe0; padding: 16px; border: 1px solid #aaa;">Col 3</div>
      </GridColumn>
    </GridRow>
  `,
});
