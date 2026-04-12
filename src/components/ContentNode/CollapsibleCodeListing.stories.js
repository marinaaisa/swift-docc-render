/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import CollapsibleCodeListing from './CollapsibleCodeListing.vue';

export default {
  title: 'ContentNode/CollapsibleCodeListing',
  component: CollapsibleCodeListing,
};

const exampleContent = [
  {
    collapsible: false,
    code: [
      'struct MyModel: Codable {',
      '    let id: Int',
      '    let name: String',
      '    let email: String',
      '}',
    ],
  },
  {
    collapsible: true,
    code: [
      '',
      'extension MyModel {',
      '    func display() -> String {',
      '        return "\\(name) <\\(email)>"',
      '    }',
      '}',
    ],
  },
];

const Template = (args, { argTypes }) => ({
  components: { CollapsibleCodeListing },
  props: Object.keys(argTypes),
  template: '<CollapsibleCodeListing v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  content: exampleContent,
  showLineNumbers: true,
  collapsed: false,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  content: exampleContent,
  showLineNumbers: true,
  collapsed: true,
};

export const WithoutLineNumbers = Template.bind({});
WithoutLineNumbers.args = {
  content: [
    {
      collapsible: false,
      code: [
        'let x = 42',
        'print(x)',
      ],
    },
  ],
  showLineNumbers: false,
  collapsed: false,
};
