/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import BlockVideo from './BlockVideo.vue';

export default {
  title: 'ContentNode/BlockVideo',
  component: BlockVideo,
};

// BlockVideo renders an Asset component by identifier looked up from
// the references store. In isolation we show how to wire up the provide.
const Template = (args, { argTypes }) => ({
  components: { BlockVideo },
  props: Object.keys(argTypes),
  provide: {
    store: {
      state: {
        references: {
          'video-demo': {
            type: 'video',
            identifier: 'video-demo',
            variants: [
              {
                traits: ['light', '1x'],
                url: 'https://www.w3schools.com/html/mov_bbb.mp4',
              },
            ],
          },
        },
      },
      setReferences() {},
      reset() {},
    },
  },
  template: '<BlockVideo v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  identifier: 'video-demo',
};

export const WithDeviceFrame = Template.bind({});
WithDeviceFrame.args = {
  identifier: 'video-demo',
  deviceFrame: 'phone',
};
