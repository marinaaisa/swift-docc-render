/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Footer from './Footer.vue';

export default {
  title: 'Footer',
  component: Footer,
};

const Template = (args, { argTypes }) => ({
  components: { Footer },
  props: Object.keys(argTypes),
  template: '<Footer v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {};

export const WithSlotContent = () => ({
  components: { Footer },
  template: `
    <Footer>
      <div style="text-align: center; font-size: 12px; color: #666;">
        Copyright © 2024 Apple Inc. All rights reserved.
      </div>
    </Footer>
  `,
});
