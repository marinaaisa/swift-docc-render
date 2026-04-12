/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import ChapterTopicList from './ChapterTopicList.vue';

export default {
  title: 'TutorialsOverview/ChapterTopicList',
  component: ChapterTopicList,
};

const Template = (args, { argTypes }) => ({
  components: { ChapterTopicList },
  props: Object.keys(argTypes),
  template: '<ChapterTopicList v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  topics: [
    {
      title: 'Getting Started',
      url: '/tutorials/mykit/getting-started',
      kind: 'project',
      estimatedTime: '20 min',
    },
    {
      title: 'Working with UI Controls',
      url: '/tutorials/mykit/working-with-ui',
      kind: 'project',
      estimatedTime: '35 min',
    },
    {
      title: 'Handling User Input',
      url: '/tutorials/mykit/user-input',
      kind: 'article',
      estimatedTime: undefined,
    },
  ],
};

export const Mixed = Template.bind({});
Mixed.args = {
  topics: [
    {
      title: 'Drawing Paths and Shapes',
      url: '/tutorials/mykit/drawing-paths',
      kind: 'project',
      estimatedTime: '25 min',
    },
    {
      title: 'Animating Views and Transitions',
      url: '/tutorials/mykit/animating',
      kind: 'project',
      estimatedTime: '30 min',
    },
  ],
};
