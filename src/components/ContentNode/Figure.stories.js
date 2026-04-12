/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Figure from './Figure.vue';

export default {
  title: 'ContentNode/Figure',
  component: Figure,
};

const Template = (args, { argTypes }) => ({
  components: { Figure },
  props: Object.keys(argTypes),
  template: `
    <Figure v-bind="$props">
      <img
        src="https://via.placeholder.com/600x400/4A90D9/ffffff?text=Figure"
        alt="A placeholder figure"
        style="max-width:100%; display:block;"
      />
    </Figure>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const WithAnchor = Template.bind({});
WithAnchor.args = {
  anchor: 'figure-1',
};

export const WithCaption = (args, { argTypes }) => ({
  components: { Figure },
  props: Object.keys(argTypes),
  template: `
    <Figure v-bind="$props">
      <img
        src="https://via.placeholder.com/600x400/4A90D9/ffffff?text=Figure"
        alt="A placeholder figure"
        style="max-width:100%; display:block;"
      />
      <figcaption style="text-align:center; margin-top:8px; font-size:14px; color:#666;">
        Figure 1 — An example image with a caption
      </figcaption>
    </Figure>
  `,
});
WithCaption.args = { anchor: 'figure-with-caption' };
