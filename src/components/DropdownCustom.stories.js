/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import DropdownCustom from './DropdownCustom.vue';

export default {
  title: 'DropdownCustom',
  component: DropdownCustom,
};

const Template = (args, { argTypes }) => ({
  components: { DropdownCustom },
  props: Object.keys(argTypes),
  template: `
    <DropdownCustom v-bind="$props">
      <template #default="{ contentClasses, onChangeAction, closeDropdown, OptionClass, ActiveOptionClass, value }">
        <ul :class="contentClasses">
          <li
            :class="[OptionClass, value === 'swift' ? ActiveOptionClass : '']"
            tabindex="0"
            @click="onChangeAction('swift'); closeDropdown()"
          >Swift</li>
          <li
            :class="[OptionClass, value === 'objc' ? ActiveOptionClass : '']"
            tabindex="0"
            @click="onChangeAction('objc'); closeDropdown()"
          >Objective-C</li>
        </ul>
      </template>
    </DropdownCustom>
  `,
});

export const Default = Template.bind({});
Default.args = {
  value: 'swift',
  ariaLabel: 'Select Language',
  isSmall: false,
};

export const Small = Template.bind({});
Small.args = {
  value: 'swift',
  ariaLabel: 'Select Language',
  isSmall: true,
};
