import React from 'react'
import styled from 'styled-components'
import { ReactComponent as FillerSVG } from '../assets/be-meter/filler.svg'
import { ReactComponent as StarSVG } from '../assets/be-meter/star.svg'

const MeterContainer = styled.div`
  position: relative;
  left: -45%;
  top: 1vw;
  width: 80%;
  opacity: 0;
  transition: opacity 0.5s ease-in;
  
`

const Filler = styled(FillerSVG)`
  border: 1px solid #FF6347;
  border-radius: 20px;
  background: rgba(242, 99, 75, 0.5);
  
  rect {
    transition: width 1s ease-out;
  }
`

const Star = styled(StarSVG)`
  width: 25px;
  position: relative;
  top: -25px;
  left: 5%;
  transition: left 1s ease-out;
`

const beMeter = () => {
  return (
    <MeterContainer className="meter">
      <Filler className="filler"/>
      <Star className="star"/>
    </MeterContainer>
  )
}

export default beMeter