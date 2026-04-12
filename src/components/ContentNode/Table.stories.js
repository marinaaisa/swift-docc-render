/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Table from './Table.vue';

export default {
  title: 'ContentNode/Table',
  component: Table,
};

const Template = (args, { argTypes }) => ({
  components: { Table },
  props: Object.keys(argTypes),
  template: `
    <Table v-bind="$props">
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>name</code></td>
          <td><code>String</code></td>
          <td>The display name of the user.</td>
        </tr>
        <tr>
          <td><code>age</code></td>
          <td><code>Int</code></td>
          <td>The age of the user in years.</td>
        </tr>
        <tr>
          <td><code>isActive</code></td>
          <td><code>Bool</code></td>
          <td>Whether the user account is currently active.</td>
        </tr>
      </tbody>
    </Table>
  `,
});

export const Default = Template.bind({});
Default.args = {
  spanned: false,
};

export const Spanned = Template.bind({});
Spanned.args = {
  spanned: true,
};

export const WithMergedCells = (args, { argTypes }) => ({
  components: { Table },
  props: Object.keys(argTypes),
  template: `
    <Table v-bind="$props">
      <thead>
        <tr>
          <th>Platform</th>
          <th colspan="2">Minimum Version</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="2">Apple</td>
          <td>iOS</td>
          <td>16.0</td>
        </tr>
        <tr>
          <td>macOS</td>
          <td>13.0</td>
        </tr>
        <tr>
          <td>Google</td>
          <td>Android</td>
          <td>12</td>
        </tr>
      </tbody>
    </Table>
  `,
});
WithMergedCells.args = { spanned: true };
