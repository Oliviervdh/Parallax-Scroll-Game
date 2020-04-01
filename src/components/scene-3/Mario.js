import React from 'react'
import styled from 'styled-components'
import { ReactComponent as FarioSVG } from '../../assets/scene-3/fario.svg'
import { ReactComponent as PipeSVG } from '../../assets/scene-3/pipe.svg'

const MarioContainer = styled.div`
  position: absolute;
  bottom: 14vh;
  left: 2450px;
  
  svg {
    position: absolute;
  }
`
const Fario = styled(FarioSVG)`
  width: 100px;
  bottom: 33.5vh;
  left: 0;
  transition: bottom 1s linear;
`
const Pipe = styled(PipeSVG)`
  width: 250px;
  bottom: 0;
  left: -70px
`

const Mario = () => {
  return (
    <MarioContainer className="fario-container">
      <Fario className="fario"/>
      <Pipe />
    </MarioContainer>
  )
}

export default Mario