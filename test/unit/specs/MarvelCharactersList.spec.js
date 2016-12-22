import Vue from 'vue'
import MarvelCharactersList from 'src/components/MarvelCharactersList'

let vm
let propsData = {
  characters: [{
    name: 'character1',
    thumbnail: {
      path: 'http://character1.jpg'
    }
  }, {
    name: 'character2',
    thumbnail: {
      path: 'http://character2.jpg'
    }
  }]
}

beforeEach(() => {
  const Comp = Vue.extend(MarvelCharactersList)
  vm = new Comp({ propsData }).$mount()
})

describe('MarvelCharactersList.vue', () => {
  it('should render a UL tag', () => {
    expect(vm.$el.tagName).to.equal('UL')
  })
  it('should render a list of two characters', () => {
    expect(vm.$el.querySelectorAll('li').length).to.equal(2)
  })
  it('should have a thumbnailSuffix and getThumbnailSrc method', () => {
    expect(vm.getThumbnailSrc).is.a('function')
    expect(vm.thumbnailSuffix).to.equal('/portrait_large.jpg')
  })
  it('should have a getThumbnailSrc method that returns a proper img src', () => {
    let path = 'http://character1'
    expect(vm.getThumbnailSrc(path)).to.equal(`${path}${vm.thumbnailSuffix}`)
  })
})
