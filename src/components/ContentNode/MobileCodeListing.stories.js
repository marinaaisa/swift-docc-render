/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import MobileCodeListing from './MobileCodeListing.vue';

export default {
  title: 'ContentNode/MobileCodeListing',
  component: MobileCodeListing,
};

const swiftContent = [
  'import SwiftUI',
  '',
  'struct ContentView: View {',
  '    @State private var count = 0',
  '',
  '    var body: some View {',
  '        VStack {',
  '            Text("Count: \\(count)")',
  '            Button("Increment") {',
  '                count += 1',
  '            }',
  '        }',
  '    }',
  '}',
];

const Template = (args, { argTypes }) => ({
  components: { MobileCodeListing },
  props: Object.keys(argTypes),
  template: '<MobileCodeListing v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  syntax: 'swift',
  content: swiftContent,
};

export const WithHighlights = Template.bind({});
WithHighlights.args = {
  syntax: 'swift',
  fileName: 'ContentView.swift',
  fileType: 'swift',
  content: swiftContent,
  highlights: [{ line: 8 }, { line: 9 }, { line: 10 }],
};
