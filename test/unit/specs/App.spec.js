import Vue from 'vue'
import App from 'src/App'

describe('App.vue default values', () => {
  it('should have a created hook', () => {
    expect(App.created).to.be.a('function')
  })
  it('should have a fetchCharacters method', () => {
    expect(App.methods.fetchCharacters).to.be.a('function')
  })
  it('should have default characters to null', () => {
    expect(App.data().characters).to.equal(null)
  })
  it('should have a default loading status to true', () => {
    expect(App.data().loading).to.equal(true)
  })
})

describe('App.vue creation', () => {
  let vm
  let characters = [{
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
  beforeEach(() => {
    let resolved = new Promise(resolve => resolve(characters))
    sinon.stub(App.methods, 'fetchCharacters').returns(resolved)
    vm = new Vue(App)
  })
  afterEach(() => {
    App.methods.fetchCharacters.restore()
  })
  it('should fetch characters', () => {
    vm = vm.$mount()
    Vue.nextTick(() => {
      expect(vm.characters).to.equal(characters)
    })
  })
  it('should display loader while loading characters', () => {
    vm = vm.$mount()
    Vue.nextTick(() => {
      expect(vm.loading).to.equal(false)
    })
  })
})
