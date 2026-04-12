/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

const path = require('path');
const webpack = require('webpack');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/vue-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    // Mirror aliases from vue-config-utils.js
    config.resolve.alias['docc-render'] = path.resolve(__dirname, '../src');
    config.resolve.alias['theme'] = path.resolve(__dirname, '../src');
    config.resolve.alias['@'] = path.resolve(__dirname, '../src');
    config.resolve.alias['highlight-js-alias'] = path.dirname(
      require.resolve('highlight.js/package.json'),
    );

    // Handle SCSS files (including <style lang="scss"> in Vue SFCs)
    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            additionalData: "$build-target: 'default'; $is-target-ide: false;",
          },
        },
      ],
    });

    // Handle static HTML assets (mirrors the vue-config-utils.js html-loader rule)
    config.module.rules.push({
      test: /\.html$/,
      include: [path.resolve(__dirname, '../src/assets/global-elements')],
      use: ['html-loader'],
    });

    // Restrict highlight.js to only the languages used by the app
    config.plugins.push(
      new webpack.ContextReplacementPlugin(
        /highlight\.js\/lib\/languages$/,
        /^.\/(bash|c|s?css|cpp|diff|http|java|llvm|perl|php|python|ruby|xml|javascript|json|markdown|objectivec|shell|swift|typescript|yaml)\.js$/,
      ),
    );

    return config;
  },
};
