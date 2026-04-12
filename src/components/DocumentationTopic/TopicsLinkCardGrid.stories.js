/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import TopicsLinkCardGrid from './TopicsLinkCardGrid.vue';

export default {
  title: 'DocumentationTopic/TopicsLinkCardGrid',
  component: TopicsLinkCardGrid,
};

const Template = (args, { argTypes }) => ({
  components: { TopicsLinkCardGrid },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    references: {},
  },
  template: '<TopicsLinkCardGrid v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      title: 'Getting Started',
      url: '/documentation/getting-started',
      role: 'article',
      abstract: [{ type: 'text', text: 'Learn how to get started.' }],
      images: [],
    },
    {
      title: 'API Reference',
      url: '/documentation/api',
      role: 'collection',
      abstract: [{ type: 'text', text: 'Browse the full API.' }],
      images: [],
    },
  ],
  topicStyle: 'compactGrid',
};
