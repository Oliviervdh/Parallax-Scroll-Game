import React from 'react'
import styled from 'styled-components'
import { ReactComponent as CowSVG } from '../../assets/scene-3/cow.svg'
import { ReactComponent as UfoSVG } from '../../assets/scene-3/ufo.svg'

const CowContainer = styled.div`
  position: absolute;
  bottom: 14.5vh;
  left: 3700px;
  width: 600px;

`
const Cow = styled(CowSVG)`
  width: 300px;
  position: relative;
  left: calc(50% - 150px);
  bottom: 0;
  transition: all 0.9s ease-in-out;
  
  &.kidnapped {
    opacity: 0;
    bottom: 80vh;
    width: 100px;
    left: calc(50% - 50px)
  }
`
const UFO = styled(UfoSVG)`
  position: absolute;
  bottom: 85vh;
  left: 0;
  z-index: 100;
  transition: bottom 1s ease-out;
`
const Light = styled.div`
  height: 0vh;
  width: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: -30vh;
  left: calc(50% - 5px);
  transition: height 0.5s ease-out, top 0.9s ease-in-out, width 1s ease-in-out, left 1s ease-in-out;

  &.collect {
    width: 350px;
    left: calc(50% - 175px)
  }
`

const Ufo = () => {
  return (
    <CowContainer className="ufo-container">
      <UFO className="ufo"/>
      <Cow className="cow"/>
      <Light className="light"/>
    </CowContainer>
  )
}

export default Ufo