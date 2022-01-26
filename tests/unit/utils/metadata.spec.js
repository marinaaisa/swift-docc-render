/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2021 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import { addOrUpdateMetadata } from 'docc-render/utils/metadata';

const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../../../app/index.html'));

const mockBaseUrl = 'developer.com';
const title = 'Featured';
const description = 'Browse the latest developer documentation, including tutorials, sample code, articles, and API reference.';
const pagePath = '/path';
const pageWithTitleAndDescription = {
  name: 'Page with title and description',
  title,
  description,
  params: {
    title,
    description,
  },
};

const pageWithoutTitleOrDescription = {
  name: 'Page without title and description',
  title: process.env.VUE_APP_TITLE,
  params: {},
};

jest.mock('docc-render/utils/theme-settings', () => ({
  getSetting: jest.fn((_, fallback) => fallback),
}));

jest.mock('docc-render/utils/assets', () => ({
  normalizeAssetUrl: jest.fn(name => mockBaseUrl + name),
}));

document.documentElement.innerHTML = html.toString();

const assertMetadata = ({
  name, title: rawTitle, description: expectedDescription, params,
}) => {
  const expectedTitle = [...new Set([rawTitle, process.env.VUE_APP_TITLE])].filter(Boolean).join(' | ');
  describe(name, () => {
    beforeEach(() => {
      addOrUpdateMetadata({ ...params, path: pagePath });
    });

    it('adds title', () => {
      expect(document.title).toBe(expectedTitle);
    });

    it('adds metadata tags', () => {
      // it adds a page description if there is a description
      if (expectedDescription) {
        expect(document.querySelector('meta[name="description"]').content).toBe(expectedDescription);
      } else {
        expect(document.querySelector('meta[name="description"]')).toBeFalsy();
      }

      // it adds open graph tags
      if (expectedDescription) {
        expect(document.querySelector('meta[property="og:description"]').content).toBe(expectedDescription);
      } else {
        expect(document.querySelector('meta[property="og:description"]')).toBeFalsy();
      }
      expect(document.querySelector('meta[property="og:locale"]').content).toBe('en_US');
      expect(document.querySelector('meta[property="og:site_name"]').content).toBe(process.env.VUE_APP_TITLE);
      expect(document.querySelector('meta[property="og:type"]').content).toBe('website');

      // it adds twitter metadata tags
      if (expectedDescription) {
        expect(document.querySelector('meta[name="twitter:description"]').content).toBe(expectedDescription);
      } else {
        expect(document.querySelector('meta[name="twitter:description"]')).toBeFalsy();
      }
      expect(document.querySelector('meta[name="twitter:card"]').content).toBe('summary_large_image');
      expect(document.querySelector('meta[name="twitter:image"]').content).toBe('<%= BASE_URL %>developer-og-twitter.jpg');
      expect(document.querySelector('meta[name="twitter:url"]').content).toBe(mockBaseUrl + pagePath);
    });
  });
};

describe('Metadata', () => {
  assertMetadata(pageWithTitleAndDescription);
  assertMetadata(pageWithoutTitleOrDescription);
});
