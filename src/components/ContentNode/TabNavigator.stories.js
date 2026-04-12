/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import TabNavigator from './TabNavigator.vue';

export default {
  title: 'ContentNode/TabNavigator',
  component: TabNavigator,
};

const Template = (args, { argTypes }) => ({
  components: { TabNavigator },
  props: Object.keys(argTypes),
  template: `
    <TabNavigator v-bind="$props">
      <template #Swift>
        <div style="padding:16px;">
          <h3>Swift Example</h3>
          <pre><code>let greeting = "Hello, Swift!"
print(greeting)</code></pre>
        </div>
      </template>
      <template #Objective-C>
        <div style="padding:16px;">
          <h3>Objective-C Example</h3>
          <pre><code>NSString *greeting = @"Hello, Objective-C!";
NSLog(@"%@", greeting);</code></pre>
        </div>
      </template>
    </TabNavigator>
  `,
});

export const Default = Template.bind({});
Default.args = {
  titles: ['Swift', 'Objective-C'],
};

export const ThreeTabs = (args, { argTypes }) => ({
  components: { TabNavigator },
  props: Object.keys(argTypes),
  template: `
    <TabNavigator v-bind="$props">
      <template #iOS>
        <div style="padding:16px;"><p>iOS-specific content and guidelines go here.</p></div>
      </template>
      <template #macOS>
        <div style="padding:16px;"><p>macOS-specific content and guidelines go here.</p></div>
      </template>
      <template #watchOS>
        <div style="padding:16px;"><p>watchOS-specific content and guidelines go here.</p></div>
      </template>
    </TabNavigator>
  `,
});
ThreeTabs.args = {
  titles: ['iOS', 'macOS', 'watchOS'],
};

export const Vertical = (args, { argTypes }) => ({
  components: { TabNavigator },
  props: Object.keys(argTypes),
  template: `
    <TabNavigator v-bind="$props">
      <template #Overview>
        <div style="padding:16px;"><p>This section gives a high-level overview of the framework.</p></div>
      </template>
      <template #"Getting Started">
        <div style="padding:16px;"><p>Follow these steps to integrate the framework into your project.</p></div>
      </template>
      <template #"API Reference">
        <div style="padding:16px;"><p>Detailed API reference documentation.</p></div>
      </template>
    </TabNavigator>
  `,
});
Vertical.args = {
  titles: ['Overview', 'Getting Started', 'API Reference'],
  vertical: true,
};
