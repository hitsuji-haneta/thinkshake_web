import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Navibar from '~/components/Navibar'
import MyButton from '~/components/MyButton'

describe('Navibar', () => {
  const localVue = createLocalVue()
  localVue.use(VueRouter)
  const router = new VueRouter()

  let wrapper
  beforeAll(() => {
    wrapper = shallowMount(Navibar, {
      localVue,
      router
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('has MyButtons', () => {
    const myButtons = wrapper.findAll(MyButton)
    expect(myButtons.at(0).props().text).toEqual('about')
    expect(myButtons.at(1).props().text).toEqual('works')
    expect(myButtons.at(2).props().text).toEqual('contact')
    expect(myButtons.at(3).props().text).toEqual('blog')
  })

  describe('isTopPage()', () => {
    it('returns true on correct path', () => {
      expect(wrapper.vm.isTopPage('/')).toBe(true)
      expect(wrapper.vm.isTopPage('/#hehehe')).toBe(true)
    })

    it('returns false on wrong path', () => {
      expect(wrapper.vm.isTopPage('hehehe')).toBe(false)
    })
  })

  describe('blogClick()', () => {
    it('pushes /blog', () => {
      wrapper.vm.blogClick()
      expect(wrapper.vm.$route.path).toBe('/blog')
    })
  })

})