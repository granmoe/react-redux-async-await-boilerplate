import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { incrementAsync } from 'ducks/count'

const CounterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Count = styled.p`
  margin-left: 15px;
`

const CounterButton = styled.button`
  display: block;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
`

class Counter extends PureComponent {
  static propTypes = {
    count: PropTypes.number.isRequired,
    incrementAsync: PropTypes.func.isRequired
  }

  render () {
    const { count, incrementAsync } = this.props

    return (
      <CounterWrapper>
        <CounterButton onClick={ incrementAsync }>increment async</CounterButton>
        <Count> Count: { count }</Count>
      </CounterWrapper>
    )
  }
}

export default connect(
  ({ count }) => ({ count }),
  { incrementAsync }
)(Counter)
