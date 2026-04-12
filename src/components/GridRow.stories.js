/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import GridRow from './GridRow.vue';
import GridColumn from './GridColumn.vue';

export default {
  title: 'GridRow',
  component: GridRow,
};

const Template = (args, { argTypes }) => ({
  components: { GridRow, GridColumn },
  props: Object.keys(argTypes),
  template: `
    <GridRow v-bind="$props">
      <GridColumn :span="{ large: 4, small: 12 }">
        <div style="background: #e0e0ff; padding: 16px; border: 1px solid #aaa;">Column 1</div>
      </GridColumn>
      <GridColumn :span="{ large: 4, small: 12 }">
        <div style="background: #ffe0e0; padding: 16px; border: 1px solid #aaa;">Column 2</div>
      </GridColumn>
      <GridColumn :span="{ large: 4, small: 12 }">
        <div style="background: #e0ffe0; padding: 16px; border: 1px solid #aaa;">Column 3</div>
      </GridColumn>
    </GridRow>
  `,
});

export const Default = Template.bind({});
Default.args = {};
