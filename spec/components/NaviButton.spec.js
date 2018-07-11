import { mount } from '@vue/test-utils'
import NaviButton from '~/components/NaviButton'

describe('NaviButton', () => {
  let wrapper
  let $route = { path: '/' }
  let $window = {
    getPosYOfElement: () => 0,
    scrollY: 0,
    height: 0
  }

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('contains a-tag', () => {
    expect(wrapper.contains('a')).toBe(true)
  })

  describe('of blog', () => {
    beforeAll(() => {
      wrapper = mount(NaviButton, {
        propsData: {
          name: 'blog'
        },
        mocks: {
          $route,
          $window
        }
      })
    })

    // it('has link to /blog', () => {
    //   expect(wrapper.trigger('click'))
    // })
  })
})