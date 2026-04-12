/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import DeclarationSourceLink from './DeclarationSourceLink.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/DeclarationSourceLink',
  component: DeclarationSourceLink,
};

const Template = (args, { argTypes }) => ({
  components: { DeclarationSourceLink },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: '<DeclarationSourceLink v-bind="$props" />',
});

export const SwiftFile = Template.bind({});
SwiftFile.args = {
  url: 'https://github.com/apple/swift/blob/main/stdlib/public/core/Array.swift',
  fileName: 'Array.swift',
};

export const OtherFile = Template.bind({});
OtherFile.args = {
  url: 'https://github.com/apple/swift/blob/main/include/swift/Basic/Foo.h',
  fileName: 'Foo.h',
};
