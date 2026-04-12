/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import DestinationDataProvider from './DestinationDataProvider.vue';

const references = {
  'doc://com.example/documentation/Example': {
    type: 'topic',
    url: '/documentation/example',
    title: 'Example Documentation',
  },
};

export default {
  title: 'DestinationDataProvider',
  component: DestinationDataProvider,
};

export const Default = () => ({
  components: { DestinationDataProvider },
  provide: { references, isTargetIDE: false },
  template: `
    <DestinationDataProvider
      :destination="{ type: 'link', title: 'Swift.org', destination: 'https://swift.org' }"
      v-slot="{ url, title }"
    >
      <a :href="url">{{ title }}</a>
    </DestinationDataProvider>
  `,
});

export const ReferenceType = () => ({
  components: { DestinationDataProvider },
  provide: { references, isTargetIDE: false },
  template: `
    <DestinationDataProvider
      :destination="{ type: 'reference', identifier: 'doc://com.example/documentation/Example' }"
      v-slot="{ url, title }"
    >
      <a :href="url">{{ title }}</a>
    </DestinationDataProvider>
  `,
});
