import React from 'react'
import styled from 'styled-components'

const HoleContainer = styled.div`
  position: absolute;
  bottom: -37.2vh;
  left: 5375px;
  width: 500px;
  height: 400px;
  transition: bottom 1s linear;
`
const HoleDiv = styled.div`
  height: 20vh;
  background-color: #87CEFA;
`

const Hole = () => {
  return (
    <HoleContainer className="hole-container">
      <HoleDiv/>
    </HoleContainer>
  )
}

export default Hole