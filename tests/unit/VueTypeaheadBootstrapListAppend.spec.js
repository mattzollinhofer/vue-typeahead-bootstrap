import { shallowMount } from '@vue/test-utils'
import VueTypeaheadBootstrapListAppend from '@/components/VueTypeaheadBootstrapListAppend.vue'

describe('VueTypeaheadBootstrapListAppend.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(VueTypeaheadBootstrapListAppend)
  })

  it('Mounts and renders an <a> tag', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.element.tagName.toLowerCase()).toBe('a')
  })

  it('Renders textVariant classes properly', async () => {
    wrapper.setProps({ textVariant: 'dark' })
    await wrapper.vm.$nextTick()
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['text-dark']))
  })

  it('Renders backgroundVariant classes properly', async () => {
    wrapper.setProps({ backgroundVariant: 'light' })
    await wrapper.vm.$nextTick()
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['bg-light']))
  })

  it('Emits `hitListAppend` event with query on click', async () => {
    const query = 'TestQuery'
    wrapper.setProps({query})
    await wrapper.vm.$nextTick()

    wrapper.trigger('click')

    expect(wrapper.emitted('hitListAppend')).toHaveLength(1)
    expect(wrapper.emitted('hitListAppend')[0][0]).toBe(query)
  })
})
