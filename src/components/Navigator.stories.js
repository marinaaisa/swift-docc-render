/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Navigator from './Navigator.vue';

// Flat tree fixture data modeled on the Navigator component's expected shape
const flatChildren = [
  {
    uid: 0,
    title: 'Swift',
    type: 'module',
    path: '/documentation/swift',
    parent: null,
    depth: 0,
    index: 0,
    siblingsCount: 1,
    childUIDs: [1, 2, 3],
    groupMarkerUID: null,
    deprecatedChildrenCount: 0,
    deprecated: false,
  },
  {
    uid: 1,
    title: 'Getting Started',
    type: 'article',
    path: '/documentation/swift/getting-started',
    parent: 0,
    depth: 1,
    index: 0,
    siblingsCount: 3,
    childUIDs: [],
    groupMarkerUID: null,
    deprecatedChildrenCount: 0,
    deprecated: false,
  },
  {
    uid: 2,
    title: 'String',
    type: 'class',
    path: '/documentation/swift/string',
    parent: 0,
    depth: 1,
    index: 1,
    siblingsCount: 3,
    childUIDs: [],
    groupMarkerUID: null,
    deprecatedChildrenCount: 0,
    deprecated: false,
  },
  {
    uid: 3,
    title: 'Array',
    type: 'struct',
    path: '/documentation/swift/array',
    parent: 0,
    depth: 1,
    index: 2,
    siblingsCount: 3,
    childUIDs: [],
    groupMarkerUID: null,
    deprecatedChildrenCount: 0,
    deprecated: false,
  },
];

const references = {
  'doc://com.apple.documentation/documentation/swift': {
    kind: 'symbol',
    url: '/documentation/swift',
    title: 'Swift',
  },
};

export default {
  title: 'Navigator',
  component: Navigator,
};

const Template = (args, { argTypes }) => ({
  components: { Navigator },
  props: Object.keys(argTypes),
  template: '<Navigator v-bind="$props" style="height: 500px; width: 280px; border: 1px solid #ccc;" />',
});

export const Default = Template.bind({});
Default.args = {
  flatChildren,
  parentTopicIdentifiers: [],
  references,
  navigatorReferences: {},
  isFetching: false,
  errorFetching: false,
  scrollLockID: '',
  renderFilterOnTop: false,
  apiChanges: null,
  technologyProps: {
    technology: 'Swift',
    technologyPath: '/documentation/swift',
  },
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  isFetching: true,
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  errorFetching: true,
};
