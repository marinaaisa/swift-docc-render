/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import Pager from './Pager.vue';

export default {
  title: 'Pager',
  component: Pager,
};

const Template = (args, { argTypes }) => ({
  components: { Pager },
  props: Object.keys(argTypes),
  template: `
    <Pager v-bind="$props">
      <template #page="{ page }">
        <div style="padding: 40px; text-align: center; font-size: 24px; background: #f0f0f0; border-radius: 8px;">
          {{ page }}
        </div>
      </template>
    </Pager>
  `,
});

export const Default = Template.bind({});
Default.args = {
  pages: ['Page 1 Content', 'Page 2 Content', 'Page 3 Content'],
};

export const SinglePage = Template.bind({});
SinglePage.args = {
  pages: ['Only Page'],
};

export const ManyPages = Template.bind({});
ManyPages.args = {
  pages: ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon'],
};
