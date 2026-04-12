/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Mention from './Mention.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/Mention',
  component: Mention,
};

const Template = (args, { argTypes }) => ({
  components: { Mention },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<Mention v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  url: '/tutorials/getting-started',
  title: 'Getting Started with MyFramework',
  role: 'article',
  kind: 'article',
};
