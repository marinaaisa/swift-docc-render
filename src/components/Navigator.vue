<!--
  This source file is part of the Swift.org open source project

  Copyright (c) 2022-2024 Apple Inc. and the Swift project authors
  Licensed under Apache License v2.0 with Runtime Library Exception

  See https://swift.org/LICENSE.txt for license information
  See https://swift.org/CONTRIBUTORS.txt for Swift project authors
-->

<template>
  <NavigatorDataProvider
    :interface-language="interfaceLanguage"
    :technologyUrl="technology ? technology.url : null"
    :api-changes-version="store.state.selectedAPIChangesVersion"
    ref="NavigatorDataProvider"
  >
    <template #default="slotProps">
      <div class="doc-topic-aside">
        <QuickNavigationModal
          v-if="enableQuickNavigation"
          :children="slotProps.flatChildren"
          :showQuickNavigationModal.sync="showQuickNavigationModal"
          :technology="technology ? technology.title : null"
        />
        <transition name="delay-hiding">
          <nav
            :aria-labelledby="INDEX_ROOT_KEY"
            class="navigator"
          >
            <NavigatorCard
              v-if="!slotProps.isFetching"
              v-bind="technologyProps(slotProps.technology || technology)"
              :children="slotProps.flatChildren"
              :error-fetching="slotProps.errorFetching"
              :api-changes="slotProps.apiChanges"
              :navigator-references="slotProps.references"
              :type="type"
              :active-path="activePath"
              :scrollLockID="scrollLockID"
              :render-filter-on-top="renderFilterOnTop"
              @close="$emit('close')"
            >
              <template v-if="enableQuickNavigation" #filter>
                <QuickNavigationButton @click.native="openQuickNavigationModal" />
              </template>
              <template #navigator-head>
                <slot name="title" />
              </template>
            </NavigatorCard>
            <LoadingNavigatorCard
              @close="$emit('close')"
              v-else
            />
            <div aria-live="polite" class="visuallyhidden">
              {{ $t('navigator.navigator-is', {
                state: slotProps.isFetching
                  ? $t('navigator.state.loading') : $t('navigator.state.ready')
              }) }}
            </div>
          </nav>
        </transition>
      </div>
    </template>
  </NavigatorDataProvider>
</template>

<script>
import NavigatorCard from 'theme/components/Navigator/NavigatorCard.vue';
import LoadingNavigatorCard from 'theme/components/Navigator/LoadingNavigatorCard.vue';
import NavigatorDataProvider from 'theme/components/Navigator/NavigatorDataProvider.vue';
import { getSetting } from 'docc-render/utils/theme-settings';
import { INDEX_ROOT_KEY } from 'docc-render/constants/sidebar';
import { TopicTypes } from 'docc-render/constants/TopicTypes';
import QuickNavigationModal from 'docc-render/components/Navigator/QuickNavigationModal.vue';
import QuickNavigationButton from 'docc-render/components/Navigator/QuickNavigationButton.vue';

/**
 * @typedef NavigatorFlatItem
 * @property {number} uid - generated UID
 * @property {string} title - title of symbol
 * @property {string} type - symbol type, used for the icon
 * @property {string} icon - an image reference to override the type icon
 * @property {array} abstract - symbol abstract
 * @property {string} path - path to page, used in navigation
 * @property {number} parent - parent UID
 * @property {number} groupMarkerUID - UID of the groupMarker that labels this
 * @property {number} deprecatedChildrenCount - number of children that are deprecated.
 * Used for filtering
 * @property {number} depth - depth of symbol in original tree
 * @property {number} index - index of item in siblings
 * @property {number} siblingsCount - number of siblings
 * @property {number[]} childUIDs - array of child UIDs
 * @property {boolean} deprecated - symbol is deprecated or is not
 */

/**
 * Renders a sidebar navigator component.
 */
export default {
  name: 'Navigator',
  components: {
    NavigatorCard,
    LoadingNavigatorCard,
    NavigatorDataProvider,
    QuickNavigationModal,
    QuickNavigationButton,
  },
  inject: {
    store: {
      default() {
        return {
          state: {},
        };
      },
    },
  },
  data() {
    return {
      INDEX_ROOT_KEY,
    };
  },
  props: {
    parentTopicIdentifiers: {
      type: Array,
      required: true,
    },
    technology: {
      type: Object,
      required: false,
    },
    references: {
      type: Object,
      default: () => {},
    },
    scrollLockID: {
      type: String,
      default: '',
    },
    renderFilterOnTop: {
      type: Boolean,
      default: false,
    },
    apiChanges: {
      type: Object,
      default: null,
    },
  },
  computed: {
    enableQuickNavigation: ({ isTargetIDE }) => (
      !isTargetIDE && getSetting(['features', 'docs', 'quickNavigation', 'enable'], true)
    ),
    // gets the paths for each parent in the breadcrumbs
    parentTopicReferences({ references, parentTopicIdentifiers }) {
      return parentTopicIdentifiers
        .reduce((all, identifier) => {
          const reference = references[identifier];
          if (reference) return all.concat(reference);
          console.error(`Reference for "${identifier}" is missing`);
          return all;
        }, []);
    },
    // splits out the top-level technology crumb
    activePath({ parentTopicReferences, $route: { path } }) {
      // Ensure the path does not have a trailing slash
      // eslint-disable-next-line no-param-reassign
      path = path.replace(/\/$/, '').toLowerCase();
      // route's path is activePath on root
      if (!parentTopicReferences.length) return [path];
      let itemsToSlice = 1;
      // if the first item is a `technology`, slice off it and the technology itself
      if (parentTopicReferences[0].kind === 'technologies') {
        itemsToSlice = 2;
      }
      return parentTopicReferences.slice(itemsToSlice).map(r => r.url).concat(path);
    },
    /**
     * The root item is always a module
     */
    type: () => TopicTypes.module,
  },
  methods: {
    technologyProps(technology) {
      return !technology ? null : {
        technology: technology.title,
        technologyPath: technology.path || technology.url,
        isTechnologyBeta: technology.beta,
      };
    },
    onQuickNavigationKeydown(event) {
      // Open the modal only on `/` or `cmd+shift+o` key event
      if (event.key !== '/' && !(event.key === 'o' && event.shiftKey && event.metaKey)) return;
      // Prevent modal from opening when the navigator is disabled
      if (!this.enableNavigator) return;
      // Prevent modal from opening if the event source element is an input
      if (event.target.tagName.toLowerCase() === 'input') return;
      this.openQuickNavigationModal();
      event.preventDefault();
    },
  },
  mounted() {
    if (this.enableQuickNavigation) window.addEventListener('keydown', this.onQuickNavigationKeydown);
  },
  beforeDestroy() {
    if (this.enableQuickNavigation) window.removeEventListener('keydown', this.onQuickNavigationKeydown);
  },
};
</script>

<style scoped lang='scss'>
@import 'docc-render/styles/_core.scss';

.navigator {
  height: 100%;
  display: flex;
  flex-flow: column;

  @include breakpoint(medium, nav) {
    position: static;
    transition: none;
  }
}
</style>
