import { mount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Footer', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Footer)

  it('Has 2019 copyright', () => {
    expect(wrapper.html()).toContain('2019 Copyright')
  })

  // it's also easy to check for the existence of elements
  it('Has a Footer Element', () => {
    expect(wrapper.contains('footer')).toBe(true)
  })
})