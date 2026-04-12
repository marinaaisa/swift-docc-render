/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import WordBreak from './WordBreak.vue';

export default {
  title: 'WordBreak',
  component: WordBreak,
};

const Template = (args, { argTypes }) => ({
  components: { WordBreak },
  props: Object.keys(argTypes),
  template: '<WordBreak v-bind="$props">{{ text }}</WordBreak>',
  data() {
    return { text: this.word };
  },
  props: {
    ...Object.keys(argTypes).reduce((acc, k) => ({ ...acc, [k]: argTypes[k] }), {}),
    word: { default: 'camelCaseLongSymbolName' },
  },
});

export const Default = () => ({
  components: { WordBreak },
  template: '<WordBreak>someVeryLongCamelCaseSymbolName</WordBreak>',
});

export const WithColon = () => ({
  components: { WordBreak },
  template: '<WordBreak>init:withParameter:andAnother:</WordBreak>',
});

export const WithDots = () => ({
  components: { WordBreak },
  template: '<WordBreak>Swift.Package.Manager.Tool</WordBreak>',
});

export const CustomTag = () => ({
  components: { WordBreak },
  template: '<WordBreak tag="p">UpperCamelCaseTypeName</WordBreak>',
});
