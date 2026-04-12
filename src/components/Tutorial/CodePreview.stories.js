/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import CodePreview from './CodePreview.vue';

export default {
  title: 'Tutorial/CodePreview',
  component: CodePreview,
};

const codeReference = 'code://example-file.swift';

const storeState = {
  references: {
    [codeReference]: {
      fileName: 'ContentView.swift',
      fileType: 'swift',
      highlights: [],
      content: [
        'import SwiftUI',
        '',
        'struct ContentView: View {',
        '    var body: some View {',
        '        Text("Hello, World!")',
        '            .padding()',
        '    }',
        '}',
      ],
      syntax: 'swift',
    },
  },
  breakpoint: 'large',
};

const Template = (args, { argTypes }) => ({
  components: { CodePreview },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    store: {
      state: storeState,
    },
  },
  template: '<div style="height: 500px; position: relative;"><CodePreview v-bind="$props" /></div>',
});

export const Default = Template.bind({});
Default.args = {
  code: codeReference,
  preview: undefined,
  isRuntimePreviewVisible: false,
};

export const PreviewVisible = Template.bind({});
PreviewVisible.args = {
  code: codeReference,
  preview: undefined,
  isRuntimePreviewVisible: true,
};
