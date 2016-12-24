import Pagination from 'src/components/Pagination'
import Vue from 'vue'

let Ctor = Vue.extend(Pagination)
let propsData = {
  next: sinon.spy(),
  previous: sinon.spy()
}
let vm = new Ctor({propsData}).$mount()

describe('Pagination.vue default values', () => {
  it('should have a getNextPage method that call next bind function', () => {
    expect(Pagination.methods.getNextPage).to.be.a('function')
    vm.getNextPage()
    expect(propsData.next.called).to.equal(true)
  })
  it('should have a getPreviousPage method', () => {
    expect(Pagination.methods.getPreviousPage).to.be.a('function')
    vm.getPreviousPage()
    expect(propsData.previous.called).to.equal(true)
  })
})
