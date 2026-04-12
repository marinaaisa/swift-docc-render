/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import ContentTableSection from './ContentTableSection.vue';

export default {
  title: 'DocumentationTopic/ContentTableSection',
  component: ContentTableSection,
};

const Template = (args, { argTypes }) => ({
  components: { ContentTableSection },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<ContentTableSection v-bind="$props"><p>Section content.</p></ContentTableSection>',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Essentials',
  anchor: 'essentials',
};
