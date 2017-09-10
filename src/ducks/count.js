const initialState = 0

export default function reducer (currentState = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return currentState + 1
    default:
      return currentState
  }
}

export const increment = () => ({ type: INCREMENT })

export const incrementAsync = async dispatch => {
  dispatch({ type: INCREMENT_ASYNC })
}

const INCREMENT_ASYNC = 'increment-requested'
const INCREMENT = 'increment'
