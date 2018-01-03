/* global describe, it, expect */
import initStore from 'store'
import { incrementAsync } from 'ducks/count'

const store = initStore()

const initialState = store.getState()

describe('incrementAsync', () => {
  it('Asynchronously increments the counter', async () => {
    await store.dispatch(incrementAsync())
    expect(store.getState()).toEqual({ ...initialState, count: initialState.count + 1 })
  })
})
