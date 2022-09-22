import { mount } from '@vue/test-utils'
import VueBootstrapAutocomplete from '@/components/VueBootstrapAutocomplete.vue'
import VueBootstrapAutocompleteList from '@/components/VueBootstrapAutocompleteList.vue'

describe('VueBootstrapAutocomplete', () => {
  let wrapper

  const demoData = [
    'Canada',
    'United States',
    'Mexico',
    'Japan',
    'China',
    'United Kingdom'
  ]

  beforeEach(() => {
    wrapper = mount(VueBootstrapAutocomplete, {
      propsData: {
        data: demoData
      }
    })
  })

  it('Should mount and render a hidden typeahead list', () => {
    let child = wrapper.findComponent(VueBootstrapAutocompleteList)
    expect(child).toBeTruthy()
    expect(child.isVisible()).toBe(false)
  })

  it('Formats the input data properly', () => {
    expect(wrapper.vm.formattedData[0].id).toBe(0)
    expect(wrapper.vm.formattedData[0].data).toBe('Canada')
    expect(wrapper.vm.formattedData[0].text).toBe('Canada')
  })

  it('Defaults the screenReaderTextSerializer to the text for arrays', () => {
    wrapper = mount(VueBootstrapAutocomplete, {
      propsData: {
        data: ['Canada', 'CA']
      }
    })
    expect(wrapper.vm.formattedData[0].screenReaderText).toBe('Canada')
    expect(wrapper.vm.formattedData[1].screenReaderText).toBe('CA')
  })

  it('Defaults the screenReaderTextSerializer to the value of the serializer', () => {
    wrapper = mount(VueBootstrapAutocomplete, {
      propsData: {
        data: [{
          name: 'Canada',
          code: 'CA'
        }],
        value: 'Can',
        serializer: t => t.name
      }
    })
    expect(wrapper.vm.formattedData[0].id).toBe(0)
    expect(wrapper.vm.formattedData[0].data.code).toBe('CA')
    expect(wrapper.vm.formattedData[0].screenReaderText).toBe('Canada')
  })

  it('Uses a custom screenReaderTextSerializer properly', () => {
    wrapper = mount(VueBootstrapAutocomplete, {
      propsData: {
        data: [{
          name: 'Canada',
          screenReaderText: 'Canada button',
          code: 'CA'
        }],
        value: 'Can',
        screenReaderTextSerializer: t => t.screenReaderText,
        serializer: t => t.name
      }
    })
    expect(wrapper.vm.formattedData[0].id).toBe(0)
    expect(wrapper.vm.formattedData[0].data.code).toBe('CA')
    expect(wrapper.vm.formattedData[0].screenReaderText).toBe('Canada button')
  })

  it('Uses a custom serializer properly', () => {
    wrapper = mount(VueBootstrapAutocomplete, {
      propsData: {
        data: [{
          name: 'Canada',
          code: 'CA'
        }],
        value: 'Can',
        serializer: t => t.name
      }
    })
    expect(wrapper.vm.formattedData[0].id).toBe(0)
    expect(wrapper.vm.formattedData[0].data.code).toBe('CA')
    expect(wrapper.vm.formattedData[0].text).toBe('Canada')
  })

  it('Allows for a name to be provided for the input', () => {
    wrapper = mount(VueBootstrapAutocomplete, {
      propsData: {
        data: demoData,
        inputName: 'name-is-provided-for-this-input'
      }
    })
    expect(wrapper.find('input').attributes().name).toBe('name-is-provided-for-this-input')
  })

  it('Show the list when given a query', async () => {
    let child = wrapper.findComponent(VueBootstrapAutocompleteList)
    expect(child.isVisible()).toBe(false)
    wrapper.find('input').setValue('Can')
    await wrapper.vm.$nextTick()
    expect(child.isVisible()).toBe(true)
  })

  it('Hides the list when focus is lost', async () => {
    let child = wrapper.findComponent(VueBootstrapAutocompleteList)
    wrapper.setData({ inputValue: 'Can' })
    wrapper.find('input').trigger('focus')
    await wrapper.vm.$nextTick()
    expect(child.isVisible()).toBe(true)

    wrapper.find('input').trigger('blur')
    await wrapper.vm.$nextTick()
    expect(child.isVisible()).toBe(false)
  })

  it('Renders the list in different sizes', () => {
    expect(wrapper.vm.inputGroupClasses).toBe('input-group')
    wrapper.setProps({
      size: 'lg'
    })
    expect(wrapper.vm.inputGroupClasses).toBe('input-group input-group-lg')
  })

  describe('key press handling', () => {
    it('Emits a keyup.enter event when enter is pressed on the input field', () => {
      let input = wrapper.find('input')
      input.trigger('keyup.enter')
      expect(wrapper.emitted().keyup).toBeTruthy()
      expect(wrapper.emitted().keyup.length).toBe(1)
      expect(wrapper.emitted().keyup[0][0].keyCode).toBe(13)
    })

    it('triggers the correct event when hitting enter', () => {
      let child = wrapper.findComponent(VueBootstrapAutocompleteList)
      const hitActive = jest.spyOn(child.vm, 'hitActiveListItem')
      let input = wrapper.find('input')

      input.trigger('keyup.enter')

      expect(hitActive).toHaveBeenCalledWith()
    })

    it('triggers the correct event when hitting the down arrow', () => {
      let child = wrapper.findComponent(VueBootstrapAutocompleteList)
      const selectNextListItem = jest.spyOn(child.vm, 'selectNextListItem')
      let input = wrapper.find('input')

      input.trigger('keyup.down')

      expect(selectNextListItem).toHaveBeenCalledWith()
    })

    it('triggers the correct event when hitting up arrow', () => {
      let child = wrapper.findComponent(VueBootstrapAutocompleteList)
      const selectPreviousListItem = jest.spyOn(child.vm, 'selectPreviousListItem')
      let input = wrapper.find('input')

      input.trigger('keyup.up')

      expect(selectPreviousListItem).toHaveBeenCalledWith()
    })

    it('Emits a blur event when the underlying input field blurs', async () => {
      let input = wrapper.find('input')
      await input.trigger('blur')
      expect(wrapper.emitted().blur).toBeTruthy()
    })

    it('Does not emit a blur event if the focus shifted to the dropdown list', async () => {
      let input = wrapper.find('input')
      wrapper.setData({ inputValue: 'Can' })
      await input.trigger('focus')

      let listItem = wrapper.get('.vbst-item').element
      await input.trigger('blur', {relatedTarget: listItem})

      expect(wrapper.emitted().blur).toBeFalsy()
    })

    it('Emits a focus event when the underlying input field receives focus', async () => {
      let input = wrapper.find('input')
      await input.trigger('focus')
      expect(wrapper.emitted().focus).toBeTruthy()
    })
  })
})
