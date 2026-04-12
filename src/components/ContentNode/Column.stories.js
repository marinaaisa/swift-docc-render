/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Column from './Column.vue';
import Row from './Row.vue';

export default {
  title: 'ContentNode/Column',
  component: Column,
};

const Template = (args, { argTypes }) => ({
  components: { Column, Row },
  props: Object.keys(argTypes),
  template: `
    <Row>
      <Column v-bind="$props" style="background:#e8f4fd; padding:16px; border-radius:4px;">
        Column content here
      </Column>
      <Column style="background:#f4f4f4; padding:16px; border-radius:4px;">
        Sibling column
      </Column>
    </Row>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const WithSpan = Template.bind({});
WithSpan.args = {
  span: 2,
};
