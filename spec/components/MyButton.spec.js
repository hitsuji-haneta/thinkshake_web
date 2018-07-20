import { mount } from '@vue/test-utils'
import MyButton from '~/components/MyButton'

describe('MyButton', () => {
  let mockFunc
  let wrapper
  beforeEach(() => {
    mockFunc = jest.fn()
    wrapper = mount(MyButton, {
      propsData: {
        text: 'test',
        onClick: mockFunc,
        isActive: true,
      }
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('contains a-tag', () => {
    expect(wrapper.contains('a')).toBe(true)
  })

  it('renders text', () => {
    const a = wrapper.find('a')
    expect(a.text()).toBe('test')
  })

  it('calls onClick method on click', () => {
    wrapper.find('a').trigger('click')
    expect(mockFunc).toBeCalledTimes(1)
  })

  it('does not call onClick method without click', () => {
    expect(mockFunc).not.toBeCalled()
  })

  it('belongs to button_selected class when it is activate', () => {
    expect(wrapper.find('a').classes()).toContain('button_selected')
  })

  it('does not belong to button_selected class when it is not activate', () => {
    wrapper.setProps({ isActive: false })
    expect(wrapper.find('a').classes()).not.toContain('button_selected')
  })
})