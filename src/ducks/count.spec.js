/* global describe, it, expect */
import initStore from 'store'
import { incrementAsync } from 'ducks/count'

const store = initStore()

const initialState = {
  count: 0,
  router: {
    pathname: 'blank',
    query: {},
    search: ''
  }
}

describe('incrementAsync', () => {
  it('dispatches the increment action after one second', async () => {
    await store.dispatch(incrementAsync())
    expect(store.getState()).toEqual({ ...initialState, count: 1 })
  })
})
