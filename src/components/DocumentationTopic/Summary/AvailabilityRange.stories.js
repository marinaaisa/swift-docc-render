/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import AvailabilityRange from './AvailabilityRange.vue';

export default {
  title: 'DocumentationTopic/Summary/AvailabilityRange',
  component: AvailabilityRange,
};

const Template = (args, { argTypes }) => ({
  components: { AvailabilityRange },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<AvailabilityRange v-bind="$props" />',
});

export const IntroducedOnly = Template.bind({});
IntroducedOnly.args = {
  platformName: 'iOS',
  introducedAt: '14.0',
};

export const IntroducedAndDeprecated = Template.bind({});
IntroducedAndDeprecated.args = {
  platformName: 'iOS',
  introducedAt: '8.0',
  deprecatedAt: '15.0',
};

export const PlatformOnly = Template.bind({});
PlatformOnly.args = {
  platformName: 'macOS',
};
