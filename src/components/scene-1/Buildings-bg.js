import React from 'react'
import styled from 'styled-components'
import Skyline from '../../assets/scene-1/Buildings.png'

const SkylineLayer = styled.div`
  width: 6000px;
  height: 1136px;
  position: absolute;
  top: 50px;
  left: 0;
  background: repeat-x url(${Skyline});
`

const Buildings = () => {
  return ( 
    <SkylineLayer className="skylinelayer"></SkylineLayer>
  )
}

export default Buildings