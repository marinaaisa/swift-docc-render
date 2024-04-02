<!--
  This source file is part of the Swift.org open source project

  Copyright (c) 2024 Apple Inc. and the Swift project authors
  Licensed under Apache License v2.0 with Runtime Library Exception

  See https://swift.org/LICENSE.txt for license information
  See https://swift.org/CONTRIBUTORS.txt for Swift project authors
-->

<template>
  <component
    :is="enableNavigator ? 'AdjustableSidebarWidth' : 'StaticContentWidth'"
    v-bind="navigatorProps"
    v-on="navigatorListeners"
    class="full-width-container topic-wrapper"
  >
    <PortalTarget name="modal-destination" multiple />
    <template #aside="{ scrollLockID, breakpoint }">
      <Navigator
        v-show="sidenavVisibleOnMobile || breakpoint === BreakpointName.large"
        :interfaceLanguage="interfaceLanguage"
        :parent-topic-identifiers="parentTopicIdentifiers"
        :technology="technology"
        :references="references"
        :scrollLockID="scrollLockID"
        :render-filter-on-top="breakpoint !== BreakpointName.large"
        @close="handleToggleSidenav(breakpoint)"
      >
        <template #title>
          <slot name="title" />
        </template>
      </Navigator>
    </template>
    <slot name="content"/>
  </component>
</template>

<script>
import { PortalTarget } from 'portal-vue';
import AdjustableSidebarWidth from 'docc-render/components/AdjustableSidebarWidth.vue';
import Navigator from 'docc-render/components/Navigator.vue';
import StaticContentWidth from 'docc-render/components/DocumentationTopic/StaticContentWidth.vue';
import DocumentationTopicStore from 'docc-render/stores/DocumentationTopicStore';
import onPageLoadScrollToFragment from 'docc-render/mixins/onPageLoadScrollToFragment';
import { BreakpointName } from 'docc-render/utils/breakpoints';
import { storage } from 'docc-render/utils/storage';

const NAVIGATOR_HIDDEN_ON_LARGE_KEY = 'navigator-hidden-large';

export default {
  name: 'NavigatorLayout',
  constants: { NAVIGATOR_HIDDEN_ON_LARGE_KEY },
  components: {
    Navigator,
    AdjustableSidebarWidth,
    StaticContentWidth,
    PortalTarget,
  },
  mixins: [onPageLoadScrollToFragment],
  props: {
    enableNavigator: Boolean,
    references: {
      type: Object,
      default: () => {},
    },
    technology: {
      type: Object,
      require: false,
    },
    parentTopicIdentifiers: {
      type: Array,
      default: () => [],
    },
    interfaceLanguage: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      sidenavVisibleOnMobile: false,
      sidenavHiddenOnLarge: storage.get(NAVIGATOR_HIDDEN_ON_LARGE_KEY, false),
      showQuickNavigationModal: false,
      BreakpointName,
      store: DocumentationTopicStore,
    };
  },
  provide() {
    return {
      store: this.store,
    };
  },
  computed: {
    navigatorProps: ({ sidenavVisibleOnMobile, enableNavigator, sidenavHiddenOnLarge }) => (
      enableNavigator
        ? {
          shownOnMobile: sidenavVisibleOnMobile,
          hiddenOnLarge: sidenavHiddenOnLarge,
        }
        : {}
    ),
    navigatorListeners() {
      return this.enableNavigator ? ({
        'update:shownOnMobile': this.toggleMobileSidenav,
        'update:hiddenOnLarge': this.toggleLargeSidenav,
      }) : {};
    },
  },
  methods: {
    handleToggleSidenav(breakpoint) {
      if (breakpoint === BreakpointName.large) {
        this.toggleLargeSidenav();
      } else {
        this.toggleMobileSidenav();
      }
    },
    openQuickNavigationModal() {
      if (this.sidenavVisibleOnMobile) return;
      this.showQuickNavigationModal = true;
    },
    toggleLargeSidenav(value = !this.sidenavHiddenOnLarge) {
      this.sidenavHiddenOnLarge = value;
      storage.set(NAVIGATOR_HIDDEN_ON_LARGE_KEY, value);
    },
    toggleMobileSidenav(value = !this.sidenavVisibleOnMobile) {
      this.sidenavVisibleOnMobile = value;
    },
  },
  created() {
    this.store.reset();
  },
  inject: {
    isTargetIDE: {
      default() {
        return false;
      },
    },
  },
};
</script>
<style lang="scss" scoped>
@import 'docc-render/styles/_core.scss';

:deep() {
  .generic-modal {
    overflow-y: overlay;
  }
  .modal-fullscreen > .container {
    background-color: transparent;
    height: fit-content;
    flex: auto;
    margin: rem(160px) 0;
    max-width: rem(800px);
    overflow: visible;
  }

  .navigator-filter .quick-navigation-open {
    margin-left: var(--nav-filter-horizontal-padding);
    width: calc(var(--nav-filter-horizontal-padding) * 2);
  }
}

.doc-topic-view {
  --delay: 1s;
  display: flex;
  flex-flow: column;
  background: var(--colors-text-background, var(--color-text-background));

  .delay-hiding-leave-active {
    // don't hide navigator until delay time has passed
    transition: display var(--delay);
  }
}

.doc-topic-aside {
  height: 100%;
  box-sizing: border-box;
  border-right: 1px solid var(--color-grid);

  @include breakpoint(medium, nav) {
    background: var(--color-fill);
    border-right: none;

    .sidebar-transitioning & {
      border-right: 1px solid var(--color-grid);
    }
  }
}

.topic-wrapper {
  flex: 1 1 auto;
  width: 100%;

  :root.no-js &:deep(.sidebar) {
    display: none;
  }
}

.full-width-container {
  @include inTargetWeb {
    @include breakpoint-full-width-container();
    @include breakpoints-from(xlarge) {
      border-left: 1px solid var(--color-grid);
      border-right: 1px solid var(--color-grid);
      box-sizing: border-box;
    }
  }
}
</style>
