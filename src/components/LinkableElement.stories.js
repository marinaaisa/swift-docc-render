/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import LinkableElement from './LinkableElement.vue';

const storeMock = {
  addLinkableSection() {},
  updateLinkableSection() {},
};

export default {
  title: 'LinkableElement',
  component: LinkableElement,
};

const Template = (args, { argTypes }) => ({
  components: { LinkableElement },
  props: Object.keys(argTypes),
  provide: { store: storeMock },
  template: '<LinkableElement v-bind="$props">Section Content Here</LinkableElement>',
});

export const Default = Template.bind({});
Default.args = {
  anchor: 'overview',
  title: 'Overview',
  depth: 0,
  tag: 'div',
};

export const AsSection = Template.bind({});
AsSection.args = {
  anchor: 'getting-started',
  title: 'Getting Started',
  depth: 1,
  tag: 'section',
};
