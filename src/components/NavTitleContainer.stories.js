/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import NavTitleContainer from './NavTitleContainer.vue';

export default {
  title: 'NavTitleContainer',
  component: NavTitleContainer,
};

const Template = (args, { argTypes }) => ({
  components: { NavTitleContainer },
  props: Object.keys(argTypes),
  template: `
    <NavTitleContainer v-bind="$props">
      Swift Documentation
    </NavTitleContainer>
  `,
});

export const Default = Template.bind({});
Default.args = {
  to: '/',
};

export const WithSubhead = (args, { argTypes }) => ({
  components: { NavTitleContainer },
  props: Object.keys(argTypes),
  template: `
    <NavTitleContainer v-bind="$props">
      Swift
      <template #subhead>Documentation</template>
    </NavTitleContainer>
  `,
});
WithSubhead.args = {
  to: '/',
};
