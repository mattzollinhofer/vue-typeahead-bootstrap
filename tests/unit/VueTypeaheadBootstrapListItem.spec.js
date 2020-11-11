import { shallowMount } from '@vue/test-utils'
import VueTypeaheadBootstrapListItem from '@/components/VueTypeaheadBootstrapListItem.vue'

describe('VueTypeaheadBootstrapListItem.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(VueTypeaheadBootstrapListItem)
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
})
