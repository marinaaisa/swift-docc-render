/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Row from './Row.vue';
import Column from './Column.vue';

export default {
  title: 'ContentNode/Row',
  component: Row,
};

const Template = (args, { argTypes }) => ({
  components: { Row, Column },
  props: Object.keys(argTypes),
  template: `
    <Row v-bind="$props">
      <Column style="background:#e8f4fd; padding:16px; border-radius:4px; min-height:80px;">
        <strong>Column 1</strong><p>Some content for the first column.</p>
      </Column>
      <Column style="background:#f0f8e8; padding:16px; border-radius:4px; min-height:80px;">
        <strong>Column 2</strong><p>Some content for the second column.</p>
      </Column>
      <Column style="background:#fef9e8; padding:16px; border-radius:4px; min-height:80px;">
        <strong>Column 3</strong><p>Some content for the third column.</p>
      </Column>
    </Row>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const WithExplicitColumns = Template.bind({});
WithExplicitColumns.args = {
  columns: { large: 3, medium: 2, small: 1 },
};

export const WithGap = Template.bind({});
WithGap.args = {
  gap: 32,
};

export const TwoColumns = (args, { argTypes }) => ({
  components: { Row, Column },
  props: Object.keys(argTypes),
  template: `
    <Row v-bind="$props">
      <Column style="background:#e8f4fd; padding:16px; border-radius:4px;">
        <strong>Left</strong><p>Leading column with wider content span.</p>
      </Column>
      <Column style="background:#f4f4f4; padding:16px; border-radius:4px;">
        <strong>Right</strong><p>Trailing column.</p>
      </Column>
    </Row>
  `,
});
TwoColumns.args = {};
