/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Hierarchy from './Hierarchy.vue';

export default {
  title: 'DocumentationTopic/Hero/Hierarchy',
  component: Hierarchy,
};

const Template = (args, { argTypes }) => ({
  components: { Hierarchy },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    references: {},
    store: {
      state: { apiChanges: null, contentWidth: 1200 },
    },
  },
  template: '<Hierarchy v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  currentTopicTitle: 'hello()',
  parentTopics: [
    { title: 'Swift Standard Library', url: '/documentation/swift' },
    { title: 'Array', url: '/documentation/swift/array' },
  ],
  isSymbolDeprecated: false,
  isSymbolBeta: false,
  currentTopicTags: [],
};

export const WithBetaBadge = Template.bind({});
WithBetaBadge.args = {
  currentTopicTitle: 'newFeature()',
  parentTopics: [
    { title: 'MyFramework', url: '/documentation/myframework' },
  ],
  isSymbolDeprecated: false,
  isSymbolBeta: true,
  currentTopicTags: [],
};
