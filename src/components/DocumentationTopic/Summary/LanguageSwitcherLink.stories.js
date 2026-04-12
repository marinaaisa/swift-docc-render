/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import LanguageSwitcherLink from './LanguageSwitcherLink.vue';

export default {
  title: 'DocumentationTopic/Summary/LanguageSwitcherLink',
  component: LanguageSwitcherLink,
};

const Template = (args, { argTypes }) => ({
  components: { LanguageSwitcherLink },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<LanguageSwitcherLink v-bind="$props">Swift</LanguageSwitcherLink>',
});

export const WithUrl = Template.bind({});
WithUrl.args = {
  url: '/documentation/myframework?language=swift',
};

export const ActiveNoUrl = Template.bind({});
ActiveNoUrl.args = {
  url: null,
};
