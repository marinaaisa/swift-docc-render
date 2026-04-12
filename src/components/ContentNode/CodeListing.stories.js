/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import CodeListing from './CodeListing.vue';

export default {
  title: 'ContentNode/CodeListing',
  component: CodeListing,
  argTypes: {
    syntax: {
      control: { type: 'select' },
      options: ['swift', 'objc', 'javascript', 'python', 'bash', 'json'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { CodeListing },
  props: Object.keys(argTypes),
  template: '<CodeListing v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  syntax: 'swift',
  content: [
    'import SwiftUI',
    '',
    'struct ContentView: View {',
    '    var body: some View {',
    '        Text("Hello, world!")',
    '            .padding()',
    '    }',
    '}',
  ],
};

export const WithLineNumbers = Template.bind({});
WithLineNumbers.args = {
  syntax: 'swift',
  showLineNumbers: true,
  content: [
    'import SwiftUI',
    '',
    'struct ContentView: View {',
    '    var body: some View {',
    '        Text("Hello, world!")',
    '            .padding()',
    '    }',
    '}',
  ],
};

export const WithFileName = Template.bind({});
WithFileName.args = {
  syntax: 'swift',
  fileName: 'ContentView.swift',
  fileType: 'swift',
  showLineNumbers: true,
  content: [
    'import SwiftUI',
    '',
    'struct ContentView: View {',
    '    var body: some View {',
    '        Text("Hello, world!")',
    '    }',
    '}',
  ],
};

export const WithHighlights = Template.bind({});
WithHighlights.args = {
  syntax: 'swift',
  showLineNumbers: true,
  highlights: [{ line: 3 }, { line: 4 }],
  content: [
    'func greet(name: String) -> String {',
    '    let greeting = "Hello, \\(name)!"',
    '    return greeting',
    '}',
    '',
    'print(greet(name: "Swift"))',
  ],
};

export const WithCopyButton = Template.bind({});
WithCopyButton.args = {
  syntax: 'javascript',
  copyToClipboard: true,
  content: [
    'const fetchData = async (url) => {',
    '  const response = await fetch(url);',
    '  const data = await response.json();',
    '  return data;',
    '};',
  ],
};

export const Python = Template.bind({});
Python.args = {
  syntax: 'python',
  content: [
    'def fibonacci(n):',
    '    if n <= 1:',
    '        return n',
    '    return fibonacci(n - 1) + fibonacci(n - 2)',
    '',
    'for i in range(10):',
    '    print(fibonacci(i))',
  ],
};

export const ObjectiveC = Template.bind({});
ObjectiveC.args = {
  syntax: 'objc',
  fileName: 'AppDelegate.m',
  fileType: 'objc',
  showLineNumbers: true,
  content: [
    '#import "AppDelegate.h"',
    '',
    '@implementation AppDelegate',
    '',
    '- (BOOL)application:(UIApplication *)application',
    '    didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {',
    '    return YES;',
    '}',
    '',
    '@end',
  ],
};
