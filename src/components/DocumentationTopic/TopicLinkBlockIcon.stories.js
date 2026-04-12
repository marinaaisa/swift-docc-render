/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import TopicLinkBlockIcon from './TopicLinkBlockIcon.vue';

export default {
  title: 'DocumentationTopic/TopicLinkBlockIcon',
  component: TopicLinkBlockIcon,
};

const Template = (args, { argTypes }) => ({
  components: { TopicLinkBlockIcon },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<TopicLinkBlockIcon v-bind="$props" />',
});

export const Article = Template.bind({});
Article.args = { role: 'article' };

export const Collection = Template.bind({});
Collection.args = { role: 'collection' };

export const SampleCode = Template.bind({});
SampleCode.args = { role: 'sampleCode' };
