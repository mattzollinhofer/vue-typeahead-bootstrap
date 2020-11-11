import { mount } from '@vue/test-utils'
import VueTypeaheadBootstrapList from '@/components/VueTypeaheadBootstrapList.vue'
import VueTypeaheadBootstrapListItem from '@/components/VueTypeaheadBootstrapListItem.vue'

describe('VueBootstrapTypeaheadList', () => {
  let wrapper

  const demoData = [
    {
      id: 0,
      data: 'Canada',
      text: 'Canada'
    },
    {
      id: 1,
      data: 'USA',
      text: 'USA'
    },
    {
      id: 2,
      data: 'Mexico',
      text: 'Mexico'
    },
    {
      id: 3,
      data: 'Canadiana',
      text: 'Canadiana'
    }
  ]

  beforeEach(() => {
    wrapper = mount(VueTypeaheadBootstrapList, {
      propsData: {
        data: demoData,
        vbtUniqueId: 123456789
      }
    })
  })

  it('Mounts and renders a list-group div', () => {
    expect(wrapper.element.tagName.toLowerCase()).toBe('div')
    expect(wrapper.classes()).toContain('list-group')
  })

  it('Matches items when there is a query', async () => {
    expect(wrapper.vm.matchedItems.length).toBe(0)
    wrapper.setProps({
      query: 'Can'
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.matchedItems.length).toBe(2)
    expect(wrapper.findAllComponents(VueTypeaheadBootstrapListItem).length).toBe(2)
    wrapper.setProps({
      query: 'Canada'
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.matchedItems.length).toBe(1)
    expect(wrapper.findAllComponents(VueTypeaheadBootstrapListItem).length).toBe(1)
  })

  it('Matches no items when there is no query', () => {
    expect(wrapper.vm.matchedItems.length).toBe(0)
    wrapper.setProps({
      query: ''
    })
    expect(wrapper.vm.matchedItems.length).toBe(0)
    expect(wrapper.findAllComponents(VueTypeaheadBootstrapListItem).length).toBe(0)
  })

  it('Limits the number of matches with maxMatches', () => {
    wrapper.setProps({
      query: 'can'
    })
    expect(wrapper.vm.matchedItems.length).toBe(2)
    wrapper.setProps({
      maxMatches: 1
    })
    expect(wrapper.vm.matchedItems.length).toBe(1)
  })

  it('Uses minMatchingChars to filter the number of matches', async () => {
    wrapper.setProps({
      query: 'c',
      minMatchingChars: 1
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.findAllComponents(VueTypeaheadBootstrapListItem).length).toBe(3)
  })

  it('Highlights text matches properly by default', async () => {
    wrapper.setProps({
      query: 'Canada'
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.findComponent(VueTypeaheadBootstrapListItem).vm.htmlText).toBe(`<span class='vbt-matched-text'>Canada</span>`)
  })

  describe('selecting items with the keyboard', () => {
    beforeEach(() => {
      wrapper.setProps({
        data: [
          {
            id: 0,
            data: 'Canada',
            text: 'Canada'
          },
          {
            id: 1,
            data: 'Canada1',
            text: 'Canada1'
          },
          {
            id: 2,
            data: 'Canada2',
            text: 'Canada2'
          }
        ],
        query: 'Cana'
      })
    })

    describe('using the down arrow', () => {
      it('cycles through all options', () => {
        wrapper.vm.selectNextListItem()
        expect(wrapper.vm.activeListItem).toBe(0)
        wrapper.vm.selectNextListItem()
        expect(wrapper.vm.activeListItem).toBe(1)
        wrapper.vm.selectNextListItem()
        expect(wrapper.vm.activeListItem).toBe(2)
      })
      it('returns the first item when nothing is disabled', () => {
        wrapper.vm.selectNextListItem()
        expect(wrapper.vm.activeListItem).toBe(0)
      })
      it('returns the second item when the first is disabled', () => {
        wrapper.setProps({ disabledValues: ['Canada'] })
        wrapper.vm.selectNextListItem()
        expect(wrapper.vm.activeListItem).toBe(1)
      })
      it('returns the third item when the first and second are disabled', () => {
        wrapper.setProps({ disabledValues: ['Canada', 'Canada1'] })
        wrapper.vm.selectNextListItem()
        expect(wrapper.vm.activeListItem).toBe(2)
      })
      it('returns -1 when everything is disabled', () => {
        wrapper.setProps({ disabledValues: ['Canada', 'Canada1', 'Canada2'] })
        wrapper.vm.selectNextListItem()
        expect(wrapper.vm.activeListItem).toBe(-1)
        wrapper.vm.selectNextListItem()
        expect(wrapper.vm.activeListItem).toBe(-1)
      })
      it('wraps back to the beginning from the end', () => {
        wrapper.vm.activeListItem = 1
        wrapper.vm.selectNextListItem()
        expect(wrapper.vm.activeListItem).toBe(2)
        wrapper.vm.selectNextListItem()
        expect(wrapper.vm.activeListItem).toBe(0)
      })
      it('wrapping accounts for disabled items', () => {
        wrapper.setProps({ disabledValues: ['Canada'] })
        wrapper.vm.activeListItem = 2
        wrapper.vm.selectNextListItem()
        expect(wrapper.vm.activeListItem).toBe(1)
      })
    })

    describe('using the up arrow', () => {
      it('returns the last item when nothing is disabled', () => {
        wrapper.vm.selectPreviousListItem()
        expect(wrapper.vm.activeListItem).toBe(2)
      })
      it('returns the second item when the last is disabled', () => {
        wrapper.setProps({ disabledValues: ['Canada2'] })
        wrapper.vm.selectPreviousListItem()
        expect(wrapper.vm.activeListItem).toBe(1)
      })
      it('returns the second item when the third and fourth are disabled', () => {
        wrapper.setProps({ disabledValues: ['Canada3', 'Canada2'] })
        wrapper.vm.selectPreviousListItem()
        expect(wrapper.vm.activeListItem).toBe(1)
      })
      it('returns -1 when everything is disabled', () => {
        wrapper.setProps({ disabledValues: ['Canada', 'Canada1', 'Canada2', 'Canada3'] })
        wrapper.vm.selectPreviousListItem()
        expect(wrapper.vm.activeListItem).toBe(-1)
        wrapper.vm.selectPreviousListItem()
        expect(wrapper.vm.activeListItem).toBe(-1)
      })
      it('cycles through all options', () => {
        wrapper.vm.selectPreviousListItem()
        expect(wrapper.vm.activeListItem).toBe(2)
        wrapper.vm.selectPreviousListItem()
        expect(wrapper.vm.activeListItem).toBe(1)
        wrapper.vm.selectPreviousListItem()
        expect(wrapper.vm.activeListItem).toBe(0)
      })
      it('wraps back to the end from the beginning', () => {
        wrapper.vm.activeListItem = 1
        wrapper.vm.selectPreviousListItem()
        expect(wrapper.vm.activeListItem).toBe(0)
        wrapper.vm.selectPreviousListItem()
        expect(wrapper.vm.activeListItem).toBe(2)
      })
      it('wrapping accounts for disabled items', () => {
        wrapper.setProps({ disabledValues: ['Canada2'] })
        wrapper.vm.activeListItem = 0
        wrapper.vm.selectPreviousListItem()
        expect(wrapper.vm.activeListItem).toBe(1)
      })
    })
  })

  it('Highlights text matches properly with highlightClass prop', async () => {
    wrapper.setProps({
      query: 'Canada',
      highlightClass: 'myStyle'
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.findComponent(VueTypeaheadBootstrapListItem).vm.htmlText).toBe(`<span class='myStyle'>Canada</span>`)
  })
})
