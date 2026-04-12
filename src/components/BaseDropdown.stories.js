/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import BaseDropdown from './BaseDropdown.vue';

export default {
  title: 'BaseDropdown',
  component: BaseDropdown,
};

const Template = (args, { argTypes }) => ({
  components: { BaseDropdown },
  props: Object.keys(argTypes),
  template: `
    <BaseDropdown v-bind="$props">
      <option value="">Select an option</option>
      <option value="swift">Swift</option>
      <option value="objc">Objective-C</option>
    </BaseDropdown>
  `,
});

export const Default = Template.bind({});
Default.args = {
  value: '',
};

export const WithValue = Template.bind({});
WithValue.args = {
  value: 'swift',
};

export const WithEyebrow = (args, { argTypes }) => ({
  components: { BaseDropdown },
  props: Object.keys(argTypes),
  template: `
    <BaseDropdown v-bind="$props">
      <template #eyebrow>Language</template>
      <option value="">Select an option</option>
      <option value="swift">Swift</option>
      <option value="objc">Objective-C</option>
    </BaseDropdown>
  `,
});
WithEyebrow.args = {
  value: '',
};
