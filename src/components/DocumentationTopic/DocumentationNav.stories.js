/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import DocumentationNav from './DocumentationNav.vue';

export default {
  title: 'DocumentationTopic/DocumentationNav',
  component: DocumentationNav,
};

const Template = (args, { argTypes }) => ({
  components: { DocumentationNav },
  props: Object.keys(argTypes),
  provide: {
    isTargetIDE: false,
    references: {},
    store: {
      state: { apiChanges: null, contentWidth: 1200 },
      setPreferredLanguage() {},
    },
  },
  template: `
    <DocumentationNav v-bind="$props">
      <template #title>
        <span class="nav-title">MyFramework</span>
      </template>
    </DocumentationNav>
  `,
});

export const Default = Template.bind({});
Default.args = {
  isDark: false,
  hasNoBorder: false,
  displaySidenav: false,
};

export const WithLanguageToggle = Template.bind({});
WithLanguageToggle.args = {
  isDark: false,
  hasNoBorder: false,
  displaySidenav: false,
  interfaceLanguage: 'swift',
  swiftPath: 'documentation/myframework',
  objcPath: 'documentation/myframework',
};
