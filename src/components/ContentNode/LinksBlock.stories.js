/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import LinksBlock from './LinksBlock.vue';

export default {
  title: 'ContentNode/LinksBlock',
  component: LinksBlock,
};

const storeWithReferences = {
  state: {
    references: {
      'doc://com.example/swift-ui': {
        identifier: 'doc://com.example/swift-ui',
        title: 'SwiftUI',
        url: '/documentation/swiftui',
        kind: 'article',
        role: 'collection',
        abstract: [{ type: 'text', text: 'Build user interfaces using a declarative syntax.' }],
      },
      'doc://com.example/combine': {
        identifier: 'doc://com.example/combine',
        title: 'Combine',
        url: '/documentation/combine',
        kind: 'article',
        role: 'collection',
        abstract: [{ type: 'text', text: 'Customize handling of asynchronous events.' }],
      },
      'doc://com.example/uikit': {
        identifier: 'doc://com.example/uikit',
        title: 'UIKit',
        url: '/documentation/uikit',
        kind: 'article',
        role: 'collection',
        abstract: [{ type: 'text', text: 'Construct and manage a graphical, event-driven UI.' }],
      },
    },
  },
  setReferences() {},
  reset() {},
};

const Template = (args, { argTypes }) => ({
  components: { LinksBlock },
  props: Object.keys(argTypes),
  provide: { store: storeWithReferences },
  template: '<LinksBlock v-bind="$props" />',
});

export const CompactGrid = Template.bind({});
CompactGrid.args = {
  identifiers: [
    'doc://com.example/swift-ui',
    'doc://com.example/combine',
    'doc://com.example/uikit',
  ],
  blockStyle: 'compactGrid',
};

export const List = Template.bind({});
List.args = {
  identifiers: [
    'doc://com.example/swift-ui',
    'doc://com.example/combine',
    'doc://com.example/uikit',
  ],
  blockStyle: 'list',
};
