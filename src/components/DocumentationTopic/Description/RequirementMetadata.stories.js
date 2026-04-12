/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import RequirementMetadata from './RequirementMetadata.vue';

export default {
  title: 'DocumentationTopic/Description/RequirementMetadata',
  component: RequirementMetadata,
};

const Template = (args, { argTypes }) => ({
  components: { RequirementMetadata },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<RequirementMetadata v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  defaultImplementationsCount: 0,
};

export const WithDefaultImplementations = Template.bind({});
WithDefaultImplementations.args = {
  defaultImplementationsCount: 3,
};
