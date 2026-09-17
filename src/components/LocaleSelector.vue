<!--
  This source file is part of the Swift.org open source project

  Copyright (c) 2023 Apple Inc. and the Swift project authors
  Licensed under Apache License v2.0 with Runtime Library Exception

  See https://swift.org/LICENSE.txt for license information
  See https://swift.org/CONTRIBUTORS.txt for Swift project authors
-->

<template>
  <div class="locale-selector">
    <div class="locale-selector__select-wrapper">
      <select
        :value="$i18n.locale"
        :aria-label="$t('select-language')"
        @change="updateRouter"
      >
        <option
          v-for="{ slug, name, code } in locales"
          :key="slug"
          :value="slug"
          :lang="code"
        >
          {{ name }}
        </option>
      </select>
      <ChevronThickIcon class="icon-inline" />
    </div>
    <p v-if="unavailableLocale" class="locale-selector__unavailable" role="status">
      {{ $t('language-not-available', { language: unavailableLocale.name }) }}
    </p>
  </div>
</template>

<script>
import ChevronThickIcon from 'theme/components/Icons/ChevronThickIcon.vue';
import appLocales from 'theme/lang/locales.json';
import { updateLocale, getLocaleParam } from 'docc-render/utils/i18n-utils';
import AppStore from 'docc-render/stores/AppStore';

export default {
  name: 'LocaleSelector',
  components: {
    ChevronThickIcon,
  },
  data() {
    return {
      unavailableLocale: null,
    };
  },
  methods: {
    async updateRouter({ target: { value: slug } }) {
      this.unavailableLocale = null;
      try {
        await this.$router.push(getLocaleParam(slug));
      } catch (error) {
        this.unavailableLocale = this.locales.find(locale => locale.slug === slug);
        return;
      }
      AppStore.setPreferredLocale(slug);
      updateLocale(slug, this);
    },
  },
  computed: {
    availableLocales: () => AppStore.state.availableLocales,
    locales: ({ availableLocales }) => (
      appLocales.filter(({ code }) => availableLocales.includes(code))
    ),
  },
};

</script>
<style scoped lang="scss">
@import 'docc-render/styles/_core.scss';

select {
  @include font-styles(locale-selector);
  color: var(--color-fill-blue);
  padding-right: 15px;
  appearance: none;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    @include underline-text;
  }
}

.locale-selector {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.locale-selector__select-wrapper {
  position: relative;
}

.locale-selector__unavailable {
  @include font-styles(locale-selector);
  color: var(--color-figure-gray-secondary);
  text-align: right;
  margin-bottom: 10px;
}

.svg-icon.icon-inline {
  position: absolute;
  fill: var(--color-fill-blue);
  right: 2px;
  bottom: 7px;
  height: 5px;
}
</style>
