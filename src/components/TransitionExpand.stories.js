/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import TransitionExpand from './TransitionExpand.vue';

export default {
  title: 'TransitionExpand',
  component: TransitionExpand,
};

export const Default = () => ({
  components: { TransitionExpand },
  data() {
    return { isVisible: false };
  },
  template: `
    <div>
      <button @click="isVisible = !isVisible" style="margin-bottom: 16px;">
        {{ isVisible ? 'Collapse' : 'Expand' }}
      </button>
      <TransitionExpand>
        <div v-if="isVisible" style="padding: 16px; background: #f0f0f0; border-radius: 4px;">
          <p>This content animates in and out with a height transition.</p>
          <p>Click the button above to toggle visibility.</p>
        </div>
      </TransitionExpand>
    </div>
  `,
});

export const PreExpanded = () => ({
  components: { TransitionExpand },
  data() {
    return { isVisible: true };
  },
  template: `
    <div>
      <button @click="isVisible = !isVisible" style="margin-bottom: 16px;">
        {{ isVisible ? 'Collapse' : 'Expand' }}
      </button>
      <TransitionExpand>
        <div v-if="isVisible" style="padding: 16px; background: #e0f0e0; border-radius: 4px;">
          <p>Content starts expanded and can be collapsed.</p>
        </div>
      </TransitionExpand>
    </div>
  `,
});
