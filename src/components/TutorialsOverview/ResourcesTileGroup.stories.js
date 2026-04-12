/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import ResourcesTileGroup from './ResourcesTileGroup.vue';

export default {
  title: 'TutorialsOverview/ResourcesTileGroup',
  component: ResourcesTileGroup,
};

const Template = (args, { argTypes }) => ({
  components: { ResourcesTileGroup },
  props: Object.keys(argTypes),
  provide: {
    references: {},
  },
  template: '<ResourcesTileGroup v-bind="$props" />',
});

const tiles = [
  {
    identifier: 'documentation',
    title: 'Documentation',
    content: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: 'Browse the full API reference.' }] }],
    action: undefined,
  },
  {
    identifier: 'forums',
    title: 'Forums',
    content: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: 'Ask questions with other developers.' }] }],
    action: undefined,
  },
  {
    identifier: 'sampleCode',
    title: 'Sample Code',
    content: [{ type: 'paragraph', inlineContent: [{ type: 'text', text: 'Explore sample projects.' }] }],
    action: undefined,
  },
];

export const TwoTiles = Template.bind({});
TwoTiles.args = {
  tiles: tiles.slice(0, 2),
};

export const ThreeTiles = Template.bind({});
ThreeTiles.args = {
  tiles,
};

export const OneTile = Template.bind({});
OneTile.args = {
  tiles: [tiles[0]],
};
