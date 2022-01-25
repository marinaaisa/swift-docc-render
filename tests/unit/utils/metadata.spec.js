/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2021 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import { addMetadata } from 'docc-render/utils/metadata';

const mockBaseUrl = 'developer.com';
const title = 'Featured';
const description = 'Browse the latest developer documentation, including tutorials, sample code, articles, and API reference.';
const path = '/path';
const pageWithTitleDescription = {
  name: 'Page with title and description',
  title,
  description,
  params: {
    title,
    description,
  },
};

jest.mock('docc-render/utils/theme-settings', () => ({
  getSetting: jest.fn((_, fallback) => fallback),
}));

jest.mock('docc-render/utils/assets', () => ({
  absoluteURL: jest.fn(name => mockBaseUrl + name),
}));

const assertMetadata = ({
  name, title: rawTitle, description: expectedDescription, params,
}) => {
  describe(name, () => {
    addMetadata({ ...params, path });
    const expectedTitle = [...new Set([rawTitle, process.env.VUE_APP_TITLE])].filter(Boolean).join(' | ');

    it('adds title', () => {
      expect(document.title).toBe(expectedTitle);
    });

    it('adds a page description', () => {
      expect(document.querySelector('meta[name="description"]').content).toBe(expectedDescription);
    });

    it('adds open graph tags', () => {
      expect(document.querySelector('meta[property="og:locale"]').content).toBe('en_US');
      expect(document.querySelector('meta[property="og:site_name"]').content).toBe(process.env.VUE_APP_TITLE);
      expect(document.querySelector('meta[property="og:type"]').content).toBe('website');
      expect(document.querySelector('meta[property="og:image"]').content).toBe(`${mockBaseUrl}/developer-og.jpg`);
      expect(document.querySelector('meta[property="og:description"]').content).toBe(expectedDescription);
    });

    it('adds twitter metadata tags', () => {
      expect(document.querySelector('meta[name="twitter:card"]').content).toBe('summary_large_image');
      expect(document.querySelector('meta[name="twitter:image"]').content).toBe(`${mockBaseUrl}/developer-og-twitter.jpg`);
      expect(document.querySelector('meta[name="twitter:description"]').content).toBe(expectedDescription);
      expect(document.querySelector('meta[name="twitter:url"]').content).toBe(mockBaseUrl + path);
    });
  });
};

describe('Metadata', () => {
  assertMetadata(pageWithTitleDescription);
});
