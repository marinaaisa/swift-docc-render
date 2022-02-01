import NavigatorLeafIcon, {
  TopicKindIcons,
  KindAliases,
  TopicKindProps,
} from '@/components/Navigator/NavigatorLeafIcon.vue';
import { shallowMount } from '@vue/test-utils';
import { TopicKind } from '@/constants/kinds';
import CollectionIcon from '@/components/Icons/CollectionIcon.vue';

const createWrapper = opts => shallowMount(NavigatorLeafIcon, opts);

const cases = Object.keys(TopicKind).map((kind) => {
  const k = KindAliases[kind] || kind;
  const icon = TopicKindIcons[k] || CollectionIcon;
  return [kind, icon.name, TopicKindProps[kind] || {}, icon];
});

describe('NavigatorLeafIcon', () => {
  it.each(cases)('Should render %s as %s, with %O bindings', (kind, iconName, bindings, icon) => {
    const wrapper = createWrapper({
      propsData: {
        kind,
        withColors: true,
      },
    });
    const { class: classes, ...props } = bindings;
    const iconComponent = wrapper.find(icon);
    expect(iconComponent.props()).toMatchObject(props);
    if (classes) {
      expect(iconComponent.classes()).toContain(classes);
    }
  });

  it('renders an icon, without color class', () => {
    const wrapper = createWrapper({
      propsData: {
        kind: TopicKind.class,
        withColors: false,
      },
    });
    const iconComponent = wrapper.find('.icon-inline');
    expect(iconComponent.classes()).not.toContain('purple');
  });
});
