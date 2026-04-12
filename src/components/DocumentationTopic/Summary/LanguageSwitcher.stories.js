/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import LanguageSwitcher from './LanguageSwitcher.vue';

export default {
  title: 'DocumentationTopic/Summary/LanguageSwitcher',
  component: LanguageSwitcher,
};

const Template = (args, { argTypes }) => ({
  components: { LanguageSwitcher },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    references: {},
    store: {
      state: { apiChanges: null },
      setPreferredLanguage() {},
    },
  },
  template: '<LanguageSwitcher v-bind="$props" />',
});

export const SwiftActive = Template.bind({});
SwiftActive.args = {
  interfaceLanguage: 'swift',
  swiftPath: 'documentation/myframework/myclass',
  objcPath: 'documentation/myframework/myclass',
};

export const ObjCActive = Template.bind({});
ObjCActive.args = {
  interfaceLanguage: 'occ',
  swiftPath: 'documentation/myframework/myclass',
  objcPath: 'documentation/myframework/myclass',
};
