/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import LanguageToggle from './LanguageToggle.vue';

export default {
  title: 'DocumentationTopic/DocumentationNav/LanguageToggle',
  component: LanguageToggle,
};

const Template = (args, { argTypes }) => ({
  components: { LanguageToggle },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    references: {},
    store: {
      state: { apiChanges: null },
      setPreferredLanguage() {},
    },
  },
  template: '<LanguageToggle v-bind="$props" />',
});

export const SwiftOnly = Template.bind({});
SwiftOnly.args = {
  interfaceLanguage: 'swift',
  swiftPath: 'documentation/myframework/myclass',
};

export const WithObjC = Template.bind({});
WithObjC.args = {
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
