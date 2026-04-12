/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Headline from './Headline.vue';

export default {
  title: 'Headline',
  component: Headline,
};

const Template = (args, { argTypes }) => ({
  components: { Headline },
  props: Object.keys(argTypes),
  template: `
    <Headline v-bind="$props">
      Swift Programming Language
    </Headline>
  `,
});

export const Default = Template.bind({});
Default.args = {
  level: 1,
};

export const WithEyebrow = (args, { argTypes }) => ({
  components: { Headline },
  props: Object.keys(argTypes),
  template: `
    <Headline v-bind="$props">
      <template #eyebrow>Featured</template>
      Swift Programming Language
    </Headline>
  `,
});
WithEyebrow.args = {
  level: 2,
};

export const H3 = Template.bind({});
H3.args = {
  level: 3,
};
