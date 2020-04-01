import React from 'react'
import styled from 'styled-components'
import {  ReactComponent as HouseLEFT } from '../../assets/scene-3/house-left.svg'
import {  ReactComponent as HouseRIGHT } from '../../assets/scene-3/house-right.svg'
import {  ReactComponent as HouseINT } from '../../assets/scene-3/house-interior.svg'

const HouseContainer = styled.div`
  position: absolute;
  top: -15vh;
  left: 8000px;
  width: 900px;

  svg {
    position: absolute;
    top: 0;
    left: 0;
  }

  svg:nth-of-type(3) {
    z-index: 6;
  }
`

const House = () => {

  return (
    <HouseContainer className="house-container">
      <HouseINT />
      <HouseLEFT />
      <HouseRIGHT />
    </HouseContainer>
  )
}

export default House