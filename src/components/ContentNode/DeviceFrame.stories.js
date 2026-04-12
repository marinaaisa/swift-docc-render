/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import DeviceFrame from './DeviceFrame.vue';

export default {
  title: 'ContentNode/DeviceFrame',
  component: DeviceFrame,
};

const Template = (args, { argTypes }) => ({
  components: { DeviceFrame },
  props: Object.keys(argTypes),
  template: `
    <DeviceFrame v-bind="$props">
      <img
        src="https://via.placeholder.com/390x844/4A90D9/ffffff?text=Screen"
        alt="Screen preview"
        style="width:100%; height:100%; object-fit:cover;"
      />
    </DeviceFrame>
  `,
});

export const Phone = Template.bind({});
Phone.args = {
  device: 'phone',
};

export const UnknownDevice = Template.bind({});
UnknownDevice.args = {
  device: 'unknown-device',
};
UnknownDevice.storyName = 'No Device Frame (unknown device)';
