/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Title from './Title.vue';

export default {
  title: 'DocumentationTopic/Hero/Title',
  component: Title,
};

const Template = (args, { argTypes }) => ({
  components: { Title },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<Title v-bind="$props">MyFramework</Title>',
});

export const Default = Template.bind({});
Default.args = {};

export const WithEyebrow = Template.bind({});
WithEyebrow.args = {
  eyebrow: 'Framework',
};
