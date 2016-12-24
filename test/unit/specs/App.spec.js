import Vue from 'vue'
import App from 'src/App'

describe('App.vue default values', () => {
  it('should have data', () => {
    expect(App.data().characters).to.equal(null)
    expect(App.data().loading).to.equal(true)
    expect(App.data().limit).to.equal(22)
    expect(App.data().offset).to.equal(100)
    expect(App.data().currentOffset).to.equal(null)
  })
  it('should have a created hook', () => {
    expect(App.created).to.be.a('function')
  })
  it('should have methods', () => {
    expect(App.methods.fetchCharacters).to.be.a('function')
    expect(App.methods.loadCharacters).to.be.a('function')
    expect(App.methods.handleError).to.be.a('function')
    expect(App.methods.next).to.be.a('function')
    expect(App.methods.previous).to.be.a('function')
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
  it('loadCharacters should set vm characters and loading to false', () => {
    vm = vm.$mount()
    let moreCharacters = [...characters, {name: 'character3'}]
    vm.loadCharacters(moreCharacters)
    expect(vm.characters).to.equal(moreCharacters)
    expect(vm.loading).to.equal(false)
  })
  it('handleError should set loading to false', () => {
    vm.handleError()
    expect(vm.loading).to.equal(false)
  })
  it('should display loader while loading characters', () => {
    vm = vm.$mount()
    Vue.nextTick(() => {
      expect(vm.loading).to.equal(false)
    })
  })
  it('next method increment currentOffset and fetch other characters', () => {
    let spy = sinon.spy(vm, 'fetchCharacters')
    vm.next()
    expect(vm.currentOffset).to.equal(122)
    expect(spy.withArgs(122).called).to.equal(true)
  })
  it('previous method decrement currentOffset and fetch other characters', () => {
    let spy = sinon.spy(vm, 'fetchCharacters')
    vm.currentOffset = vm.offset + vm.limit
    vm.previous()
    expect(vm.currentOffset).to.equal(100)
    expect(spy.withArgs(100).called).to.equal(true)
  })
  it('previous method decrement currentOffset and fetch other characters', () => {
    let spy = sinon.spy(vm, 'fetchCharacters')
    vm.currentOffset = vm.offset + vm.limit
    vm.previous()
    expect(vm.currentOffset).to.equal(100)
    expect(spy.withArgs(100).called).to.equal(true)
  })
  it('previous method should not fetch characters if offset less than default offset', () => {
    let spy = sinon.spy(vm, 'fetchCharacters')
    vm.currentOffset = vm.offset = 100
    vm.previous()
    expect(vm.currentOffset).to.equal(100)
    expect(spy.called).to.equal(false)
  })
})
