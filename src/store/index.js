import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
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

  const middlewares = [thunk, routerMiddleware]

  const allReducers = {
    ...reducers,
    router: routerReducer
  }

  const store = createStore(
    combineReducers(allReducers),
    composeWithDevTools(enhancer, applyMiddleware(...middlewares))
  )

  return store
}
