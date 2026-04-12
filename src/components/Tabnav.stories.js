/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Tabnav from './Tabnav.vue';
import TabnavItem from './TabnavItem.vue';

export default {
  title: 'Tabnav',
  component: Tabnav,
};

export const Default = () => ({
  components: { Tabnav, TabnavItem },
  data() {
    return { activeTab: 'swift' };
  },
  template: `
    <div>
      <Tabnav :value="activeTab" @input="activeTab = $event">
        <TabnavItem value="swift">Swift</TabnavItem>
        <TabnavItem value="objc">Objective-C</TabnavItem>
      </Tabnav>
      <p>Active tab: <strong>{{ activeTab }}</strong></p>
    </div>
  `,
});

export const ThreeTabs = () => ({
  components: { Tabnav, TabnavItem },
  data() {
    return { activeTab: 'overview' };
  },
  template: `
    <div>
      <Tabnav :value="activeTab" @input="activeTab = $event">
        <TabnavItem value="overview">Overview</TabnavItem>
        <TabnavItem value="api">API Reference</TabnavItem>
        <TabnavItem value="tutorials">Tutorials</TabnavItem>
      </Tabnav>
      <div style="padding: 16px;">
        <p v-if="activeTab === 'overview'">Overview content</p>
        <p v-if="activeTab === 'api'">API Reference content</p>
        <p v-if="activeTab === 'tutorials'">Tutorials content</p>
      </div>
    </div>
  `,
});

export const Vertical = () => ({
  components: { Tabnav, TabnavItem },
  data() {
    return { activeTab: 'swift' };
  },
  template: `
    <div style="display: flex;">
      <Tabnav :value="activeTab" @input="activeTab = $event" :vertical="true">
        <TabnavItem value="swift">Swift</TabnavItem>
        <TabnavItem value="objc">Objective-C</TabnavItem>
        <TabnavItem value="kotlin">Kotlin</TabnavItem>
      </Tabnav>
      <p style="padding: 16px;">Active: {{ activeTab }}</p>
    </div>
  `,
});
