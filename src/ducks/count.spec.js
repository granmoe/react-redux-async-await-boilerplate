/* global describe, it, expect */
import initStore from 'store'
import { incrementAsync } from 'ducks/count'

const store = initStore()

describe('incrementAsync', () => {
  it('dispatches the increment action after one second', async () => {
    await store.dispatch(incrementAsync())
    expect(store.getState()).toEqual({ count: 1 })
  })
})
