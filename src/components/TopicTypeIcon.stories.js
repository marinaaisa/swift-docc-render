/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import TopicTypeIcon from './TopicTypeIcon.vue';

export default {
  title: 'TopicTypeIcon',
  component: TopicTypeIcon,
};

const Template = (args, { argTypes }) => ({
  components: { TopicTypeIcon },
  props: Object.keys(argTypes),
  template: '<TopicTypeIcon v-bind="$props" style="width: 24px; height: 24px;" />',
});

export const Default = Template.bind({});
Default.args = {
  type: 'article',
  withColors: false,
};

export const WithColors = Template.bind({});
WithColors.args = {
  type: 'func',
  withColors: true,
};

export const ClassType = Template.bind({});
ClassType.args = {
  type: 'class',
  withColors: true,
};

export const ProtocolType = Template.bind({});
ProtocolType.args = {
  type: 'protocol',
  withColors: true,
};

export const Tutorial = Template.bind({});
Tutorial.args = {
  type: 'tutorial',
  withColors: false,
};

export const AllTypes = () => ({
  components: { TopicTypeIcon },
  template: `
    <div style="display: flex; flex-wrap: wrap; gap: 16px; padding: 16px;">
      <div v-for="type in types" :key="type" style="display: flex; flex-direction: column; align-items: center; gap: 4px; font-size: 11px;">
        <TopicTypeIcon :type="type" :withColors="true" style="width: 24px; height: 24px;" />
        {{ type }}
      </div>
    </div>
  `,
  data() {
    return {
      types: ['article', 'class', 'protocol', 'struct', 'enum', 'func', 'property', 'method', 'tutorial', 'module', 'sampleCode'],
    };
  },
});
