/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import ReferenceExternalSymbol from './ReferenceExternalSymbol.vue';

export default {
  title: 'ContentNode/ReferenceExternalSymbol',
  component: ReferenceExternalSymbol,
};

const Template = (args, { argTypes }) => ({
  components: { ReferenceExternalSymbol },
  props: Object.keys(argTypes),
  template: '<ReferenceExternalSymbol v-bind="$props">URLSession.shared.dataTask(with:completionHandler:)</ReferenceExternalSymbol>',
});

export const Default = Template.bind({});
Default.args = {
  url: 'https://developer.apple.com/documentation/foundation/urlsession',
  isActive: true,
};

export const Inactive = Template.bind({});
Inactive.args = {
  url: 'https://developer.apple.com/documentation/foundation/urlsession',
  isActive: false,
};
Inactive.storyName = 'Inactive (renders as code span)';
