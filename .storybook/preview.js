/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Router from 'vue-router';
import SwiftDocCRenderi18n from '../src/setup-utils/SwiftDocCRenderi18n';

// Global styles — mirrors the <style lang="scss"> block in App.vue
import './storybook-globals.scss';

Vue.use(VueI18n);
Vue.use(Router);

// Ignore custom web components (<custom-header>, <custom-footer>)
Vue.config.ignoredElements = /^custom-/;

const i18n = SwiftDocCRenderi18n();

export const decorators = [
  () => ({
    i18n,
    router: new Router({ mode: 'abstract' }),
    template: '<div style="padding: 2rem;"><story /></div>',
  }),
];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
    },
  },
};
