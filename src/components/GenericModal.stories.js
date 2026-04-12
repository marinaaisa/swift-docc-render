/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import GenericModal from './GenericModal.vue';

export default {
  title: 'GenericModal',
  component: GenericModal,
};

const Template = (args, { argTypes }) => ({
  components: { GenericModal },
  props: Object.keys(argTypes),
  data() {
    return { isVisible: this.visible };
  },
  watch: {
    visible(v) { this.isVisible = v; },
  },
  template: `
    <div>
      <button @click="isVisible = true">Open Modal</button>
      <GenericModal v-bind="$props" :visible="isVisible" @update:visible="isVisible = $event">
        <div style="padding: 20px;">
          <h2>Modal Title</h2>
          <p>This is the modal content area. Click the close button or backdrop to dismiss.</p>
        </div>
      </GenericModal>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  visible: false,
  theme: 'light',
  isFullscreen: false,
  showClose: true,
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  visible: false,
  theme: 'dark',
  isFullscreen: false,
  showClose: true,
};

export const Fullscreen = Template.bind({});
Fullscreen.args = {
  visible: false,
  theme: 'light',
  isFullscreen: true,
  showClose: true,
};
