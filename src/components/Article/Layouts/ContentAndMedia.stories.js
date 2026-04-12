/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import ContentAndMedia from './ContentAndMedia.vue';

export default {
  title: 'Article/Layouts/ContentAndMedia',
  component: ContentAndMedia,
};

const Template = (args, { argTypes }) => ({
  components: { ContentAndMedia },
  props: Object.keys(argTypes),
  provide: { references: {} },
  template: '<ContentAndMedia v-bind="$props" />',
});

export const MediaTrailing = Template.bind({});
MediaTrailing.args = {
  content: [
    {
      type: 'paragraph',
      inlineContent: [
        { type: 'text', text: 'SwiftUI provides views, controls, and layout structures for declaring your app\'s user interface.' },
      ],
    },
    {
      type: 'paragraph',
      inlineContent: [
        { type: 'text', text: 'The framework provides event handlers for delivering taps, gestures, and other types of input to your app.' },
      ],
    },
  ],
  media: 'swiftui-diagram.png',
  mediaPosition: 'trailing',
};

export const MediaLeading = Template.bind({});
MediaLeading.args = {
  content: [
    {
      type: 'paragraph',
      inlineContent: [
        { type: 'text', text: 'Use the @State property wrapper to declare a value type whose changes you want to manage in SwiftUI.' },
      ],
    },
  ],
  media: 'state-diagram.png',
  mediaPosition: 'leading',
};

export const Default = Template.bind({});
Default.args = {
  content: [
    {
      type: 'paragraph',
      inlineContent: [
        { type: 'text', text: 'Property wrappers add a layer of separation between code that manages how a property is stored and the code that defines a property.' },
      ],
    },
  ],
  media: 'property-wrapper.png',
};
