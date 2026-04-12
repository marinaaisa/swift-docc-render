/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import OnThisPageStickyContainer from './OnThisPageStickyContainer.vue';

export default {
  title: 'DocumentationTopic/OnThisPageStickyContainer',
  component: OnThisPageStickyContainer,
};

const Template = (args, { argTypes }) => ({
  components: { OnThisPageStickyContainer },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<OnThisPageStickyContainer v-bind="$props"><p>On This Page content</p></OnThisPageStickyContainer>',
});

export const Default = Template.bind({});
Default.args = {};
