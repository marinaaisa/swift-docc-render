/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Availability from './Availability.vue';

export default {
  title: 'DocumentationTopic/Summary/Availability',
  component: Availability,
};

const Template = (args, { argTypes }) => ({
  components: { Availability },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    references: {},
    identifier: 'doc://com.example/documentation/MyClass',
    store: {
      state: { apiChanges: null },
    },
  },
  template: '<Availability v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  platforms: [
    { name: 'iOS', introducedAt: '14.0', deprecatedAt: null, beta: false },
    { name: 'macOS', introducedAt: '11.0', deprecatedAt: null, beta: false },
    { name: 'tvOS', introducedAt: '14.0', deprecatedAt: null, beta: false },
    { name: 'watchOS', introducedAt: '7.0', deprecatedAt: null, beta: false },
  ],
};

export const WithBetaPlatform = Template.bind({});
WithBetaPlatform.args = {
  platforms: [
    { name: 'iOS', introducedAt: '17.0', deprecatedAt: null, beta: true },
    { name: 'macOS', introducedAt: '14.0', deprecatedAt: null, beta: false },
  ],
};

export const WithDeprecation = Template.bind({});
WithDeprecation.args = {
  platforms: [
    { name: 'iOS', introducedAt: '8.0', deprecatedAt: '15.0', beta: false },
  ],
};
