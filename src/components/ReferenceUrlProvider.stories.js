/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import ReferenceUrlProvider from './ReferenceUrlProvider.vue';

const references = {
  'doc://com.example/documentation/swift': {
    type: 'topic',
    url: '/documentation/swift',
    title: 'Swift Documentation',
  },
};

export default {
  title: 'ReferenceUrlProvider',
  component: ReferenceUrlProvider,
};

export const Default = () => ({
  components: { ReferenceUrlProvider },
  provide: { references },
  template: `
    <ReferenceUrlProvider
      reference="doc://com.example/documentation/swift"
      v-slot="{ url, title }"
    >
      <a :href="url">{{ title }}</a>
    </ReferenceUrlProvider>
  `,
});

export const MissingReference = () => ({
  components: { ReferenceUrlProvider },
  provide: { references },
  template: `
    <ReferenceUrlProvider
      reference="doc://com.example/missing"
      v-slot="{ url, title }"
    >
      <span>URL: {{ url || '(none)' }}, Title: {{ title || '(none)' }}</span>
    </ReferenceUrlProvider>
  `,
});
