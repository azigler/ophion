import Vue from 'vue'
import PageAbout from '@/components/PageAbout'

describe('PageAbout.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(PageAbout)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.about').textContent)
      .toEqual('About - Coming Soon!')
  })
})
