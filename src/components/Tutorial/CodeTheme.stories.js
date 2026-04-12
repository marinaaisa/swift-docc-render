/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import CodeTheme from './CodeTheme.vue';

export default {
  title: 'Tutorial/CodeTheme',
  component: CodeTheme,
};

const Template = (args, { argTypes }) => ({
  components: { CodeTheme },
  props: Object.keys(argTypes),
  template: `
    <CodeTheme v-bind="$props">
      <pre style="padding: 16px; background: var(--background, #1c1c1e); color: var(--text, #e5e5ea); border-radius: 8px;">
<code>func greet(_ name: String) {
    print("Hello, \\(name)!")
}</code>
      </pre>
    </CodeTheme>
  `,
});

export const Default = Template.bind({});
Default.args = {};
