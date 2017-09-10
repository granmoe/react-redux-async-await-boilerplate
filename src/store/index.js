import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'store/thunk'
import { routerForBrowser } from 'redux-little-router'
import * as reducers from 'ducks'

export default function () {
  const routes = {
    '/react-redux-async-await-boilerplate': {
      '/counter': {
        test: 'foo'
      },
      '/foo': {},
      '/bar': {},
    }
  }

  const {
    reducer: routerReducer,
    middleware: routerMiddleware,
    enhancer
  } = routerForBrowser({ routes })

  let middlewares = [thunk, routerMiddleware]

  if (process.env.NODE_ENV === `development`) {
    const createLogger = require('redux-logger')
    const logger = createLogger({ collapsed: _ => true })
    middlewares.push(logger)
  }

  const allReducers = {
    ...reducers,
    router: routerReducer
  }

  const store = createStore(
    combineReducers(allReducers),
    compose(enhancer, applyMiddleware(...middlewares))
  )

  return store
}
