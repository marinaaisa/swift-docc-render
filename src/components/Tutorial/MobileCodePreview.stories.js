/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import MobileCodePreview from './MobileCodePreview.vue';

export default {
  title: 'Tutorial/MobileCodePreview',
  component: MobileCodePreview,
};

const codeReference = 'code://example-file.swift';

const Template = (args, { argTypes }) => ({
  components: { MobileCodePreview },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    references: {
      [codeReference]: {
        fileName: 'ContentView.swift',
        fileType: 'swift',
        highlights: [],
        content: ['struct ContentView: View {', '    var body: some View {', '        Text("Hello, World!")', '    }', '}'],
        syntax: 'swift',
      },
    },
    store: {
      state: {
        references: {
          [codeReference]: {
            fileName: 'ContentView.swift',
            fileType: 'swift',
            highlights: [],
            content: ['struct ContentView: View {', '    var body: some View {', '        Text("Hello, World!")', '    }', '}'],
            syntax: 'swift',
          },
        },
        codeColors: null,
      },
    },
  },
  template: '<MobileCodePreview v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  code: codeReference,
};
