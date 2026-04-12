/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import AdjustableSidebarWidth from './AdjustableSidebarWidth.vue';

const storeMock = {
  setContentWidth() {},
  state: { contentWidth: 0 },
};

export default {
  title: 'AdjustableSidebarWidth',
  component: AdjustableSidebarWidth,
};

const Template = (args, { argTypes }) => ({
  components: { AdjustableSidebarWidth },
  props: Object.keys(argTypes),
  provide: { store: storeMock },
  template: `
    <AdjustableSidebarWidth v-bind="$props" style="height: 300px; border: 1px solid #ccc;">
      <template #aside>
        <div style="padding: 16px; background: #f0f0f0; height: 100%;">Sidebar Content</div>
      </template>
      <div style="padding: 16px;">Main Content Area</div>
    </AdjustableSidebarWidth>
  `,
});

export const Default = Template.bind({});
Default.args = {
  enableNavigator: true,
  shownOnMobile: false,
  hiddenOnLarge: false,
};

export const NavigatorDisabled = Template.bind({});
NavigatorDisabled.args = {
  enableNavigator: false,
  shownOnMobile: false,
  hiddenOnLarge: false,
};

export const HiddenOnLarge = Template.bind({});
HiddenOnLarge.args = {
  enableNavigator: true,
  shownOnMobile: false,
  hiddenOnLarge: true,
};
