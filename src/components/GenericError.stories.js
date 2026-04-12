/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import GenericError from './GenericError.vue';

export default {
  title: 'GenericError',
  component: GenericError,
};

const Template = (args, { argTypes }) => ({
  components: { GenericError },
  props: Object.keys(argTypes),
  template: '<GenericError v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {};

export const WithMessage = Template.bind({});
WithMessage.args = {
  message: 'The requested page could not be found.',
};

export const WithSlotContent = () => ({
  components: { GenericError },
  template: `
    <GenericError message="Something went wrong.">
      <div style="text-align: center;">
        <a href="/">Return to Home</a>
      </div>
    </GenericError>
  `,
});
