/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import BaseNavigatorCardItem from './BaseNavigatorCardItem.vue';

export default {
  title: 'Navigator/BaseNavigatorCardItem',
  component: BaseNavigatorCardItem,
};

const Template = (args, { argTypes }) => ({
  components: { BaseNavigatorCardItem },
  props: Object.keys(argTypes),
  template: `
    <BaseNavigatorCardItem v-bind="$props">
      <template #navigator-icon="{ className }">
        <span :class="className" style="width: 16px; height: 16px; background: #007aff; border-radius: 3px; display: inline-block;" />
      </template>
      <template #title-container>
        <span>My Symbol Name</span>
      </template>
    </BaseNavigatorCardItem>
  `,
});

export const Default = Template.bind({});
Default.args = {
  hideNavigatorIcon: false,
};

export const HiddenIcon = Template.bind({});
HiddenIcon.args = {
  hideNavigatorIcon: true,
};
