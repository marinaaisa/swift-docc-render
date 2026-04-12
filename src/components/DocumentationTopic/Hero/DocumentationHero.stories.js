/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import DocumentationHero from './DocumentationHero.vue';

export default {
  title: 'DocumentationTopic/Hero/DocumentationHero',
  component: DocumentationHero,
};

const Template = (args, { argTypes }) => ({
  components: { DocumentationHero },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: `
    <DocumentationHero v-bind="$props">
      <h1>MyFramework</h1>
    </DocumentationHero>
  `,
});

export const Default = Template.bind({});
Default.args = {
  role: 'collection',
  enhanceBackground: true,
  shortHero: false,
  shouldShowLanguageSwitcher: false,
  enableMinimized: false,
};

export const WithoutBackground = Template.bind({});
WithoutBackground.args = {
  role: 'symbol',
  enhanceBackground: false,
  shortHero: false,
  shouldShowLanguageSwitcher: false,
  enableMinimized: false,
};

export const ShortHero = Template.bind({});
ShortHero.args = {
  role: 'article',
  enhanceBackground: true,
  shortHero: true,
  shouldShowLanguageSwitcher: false,
  enableMinimized: false,
};
