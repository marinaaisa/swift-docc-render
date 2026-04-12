/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Section from './Section.vue';

export default {
  title: 'DocumentationTopic/Summary/Section',
  component: Section,
};

const Template = (args, { argTypes }) => ({
  components: { Section },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<Section v-bind="$props"><p>Section content goes here.</p></Section>',
});

export const Default = Template.bind({});
Default.args = {};
