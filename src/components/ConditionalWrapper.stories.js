/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import ConditionalWrapper from './ConditionalWrapper.vue';

export default {
  title: 'ConditionalWrapper',
  component: ConditionalWrapper,
};

export const Default = () => ({
  components: { ConditionalWrapper },
  template: `
    <div>
      <p>With wrapping (shouldWrap = true):</p>
      <ConditionalWrapper tag="section" :shouldWrap="true" style="border: 2px solid blue; padding: 8px;">
        <span>This content is wrapped in a &lt;section&gt;</span>
      </ConditionalWrapper>
      <p>Without wrapping (shouldWrap = false):</p>
      <ConditionalWrapper tag="section" :shouldWrap="false">
        <span>This content has no wrapper element</span>
      </ConditionalWrapper>
    </div>
  `,
});

export const Wrapped = () => ({
  components: { ConditionalWrapper },
  template: `
    <ConditionalWrapper tag="article" :shouldWrap="true" style="padding: 16px; background: #f0f0f0;">
      <p>Content inside an article element</p>
    </ConditionalWrapper>
  `,
});

export const Unwrapped = () => ({
  components: { ConditionalWrapper },
  template: `
    <ConditionalWrapper tag="article" :shouldWrap="false">
      <p>Content rendered without wrapper</p>
    </ConditionalWrapper>
  `,
});
