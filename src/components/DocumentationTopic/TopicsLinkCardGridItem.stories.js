/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import TopicsLinkCardGridItem from './TopicsLinkCardGridItem.vue';

export default {
  title: 'DocumentationTopic/TopicsLinkCardGridItem',
  component: TopicsLinkCardGridItem,
};

const Template = (args, { argTypes }) => ({
  components: { TopicsLinkCardGridItem },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    references: {},
  },
  template: '<TopicsLinkCardGridItem v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  item: {
    title: 'Getting Started',
    url: '/documentation/getting-started',
    role: 'article',
    abstract: [{ type: 'text', text: 'Learn the basics.' }],
    images: [],
  },
  compact: true,
};

export const Detailed = Template.bind({});
Detailed.args = {
  item: {
    title: 'Getting Started',
    url: '/documentation/getting-started',
    role: 'article',
    abstract: [{ type: 'text', text: 'Learn the basics.' }],
    images: [],
  },
  compact: false,
};
