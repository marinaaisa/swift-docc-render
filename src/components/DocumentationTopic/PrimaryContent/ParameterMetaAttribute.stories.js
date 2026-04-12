/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2024 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import ParameterMetaAttribute from './ParameterMetaAttribute.vue';

export default {
  title: 'DocumentationTopic/PrimaryContent/ParameterMetaAttribute',
  component: ParameterMetaAttribute,
};

const Template = (args, { argTypes }) => ({
  components: { ParameterMetaAttribute },
  props: Object.keys(argTypes),
  provide: { isTargetIDE: false, references: {} },
  template: `
    <ParameterMetaAttribute v-bind="$props">
      <template v-slot="{ attribute }">Default: <code>{{ attribute.value }}</code></template>
    </ParameterMetaAttribute>
  `,
});

export const Default = Template.bind({});
Default.args = {
  kind: 'default',
  attributes: {
    default: { kind: 'default', value: '42' },
  },
  changes: {},
};
