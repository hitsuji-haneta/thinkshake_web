import { shallowMount } from '@vue/test-utils'
import Navibar from '~/components/Navibar'
import NaviButton from '~/components/NaviButton'

describe('Navibar', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(Navibar)
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  test('has NaviButtons', () => {
    const naviButtons = wrapper.findAll(NaviButton)
    expect(naviButtons.at(0).props().name).toEqual('about')
    expect(naviButtons.at(1).props().name).toEqual('works')
    expect(naviButtons.at(2).props().name).toEqual('contact')
    expect(naviButtons.at(3).props().name).toEqual('blog')
  })
})