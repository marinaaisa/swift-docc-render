/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import BaseNavigatorCard from './BaseNavigatorCard.vue';

export default {
  title: 'Navigator/BaseNavigatorCard',
  component: BaseNavigatorCard,
};

const Template = (args, { argTypes }) => ({
  components: { BaseNavigatorCard },
  props: Object.keys(argTypes),
  template: `
    <div style="width: 300px; height: 500px; position: relative;">
      <BaseNavigatorCard v-bind="$props">
        <template #navigator-head>
          <span style="font-weight: 600;">My Technology</span>
        </template>
        <template #body="{ className }">
          <div :class="className" style="padding: 16px;">
            <p>Navigator content goes here.</p>
          </div>
        </template>
      </BaseNavigatorCard>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const WithAboveHead = (args, { argTypes }) => ({
  components: { BaseNavigatorCard },
  props: Object.keys(argTypes),
  template: `
    <div style="width: 300px; height: 500px; position: relative;">
      <BaseNavigatorCard v-bind="$props">
        <template #above-navigator-head>
          <div style="padding: 8px; background: #f0f0f0; font-size: 12px;">Above head slot</div>
        </template>
        <template #navigator-head>
          <span style="font-weight: 600;">My Technology</span>
        </template>
        <template #body="{ className }">
          <div :class="className" style="padding: 16px;">
            <p>Navigator body content.</p>
          </div>
        </template>
      </BaseNavigatorCard>
    </div>
  `,
});
WithAboveHead.args = {};
