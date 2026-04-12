/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import CodeVoice from './CodeVoice.vue';

export default {
  title: 'ContentNode/CodeVoice',
  component: CodeVoice,
};

const Template = (args, { argTypes }) => ({
  components: { CodeVoice },
  props: Object.keys(argTypes),
  template: '<p>Call <CodeVoice>myFunction()</CodeVoice> to begin.</p>',
});

export const Default = Template.bind({});
Default.args = {};

export const LongSymbolName = (args, { argTypes }) => ({
  components: { CodeVoice },
  props: Object.keys(argTypes),
  template: '<p>Use <CodeVoice>URLSession.shared.dataTask(with:completionHandler:)</CodeVoice> for network requests.</p>',
});
LongSymbolName.args = {};
