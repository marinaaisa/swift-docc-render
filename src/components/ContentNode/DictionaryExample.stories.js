/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import DictionaryExample from './DictionaryExample.vue';

export default {
  title: 'ContentNode/DictionaryExample',
  component: DictionaryExample,
};

const Template = (args, { argTypes }) => ({
  components: { DictionaryExample },
  props: Object.keys(argTypes),
  template: `
    <DictionaryExample v-bind="$props">
      <p>Example of a JSON dictionary with user data:</p>
    </DictionaryExample>
  `,
});

export const Default = Template.bind({});
Default.args = {
  example: {
    content: [
      {
        collapsible: false,
        code: [
          '{',
          '  "id": 42,',
          '  "name": "Jane Appleseed",',
          '  "email": "jane@example.com",',
          '  "roles": ["admin", "editor"]',
          '}',
        ],
      },
    ],
  },
};

export const NestedDictionary = Template.bind({});
NestedDictionary.args = {
  example: {
    content: [
      {
        collapsible: false,
        code: [
          '{',
          '  "user": {',
          '    "id": 1,',
          '    "profile": {',
          '      "avatar": "https://example.com/avatar.png",',
          '      "bio": "Swift developer"',
          '    }',
          '  }',
          '}',
        ],
      },
    ],
  },
};
