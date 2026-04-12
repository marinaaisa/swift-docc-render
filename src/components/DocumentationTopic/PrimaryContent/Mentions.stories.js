/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Mentions from './Mentions.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/Mentions',
  component: Mentions,
};

const Template = (args, { argTypes }) => ({
  components: { Mentions },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    references: {
      'doc://com.example/tutorials/getting-started': {
        identifier: 'doc://com.example/tutorials/getting-started',
        title: 'Getting Started',
        url: '/tutorials/getting-started',
        kind: 'article',
        role: 'article',
        type: 'topic',
      },
    },
  },
  template: '<Mentions v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  mentions: ['doc://com.example/tutorials/getting-started'],
};
