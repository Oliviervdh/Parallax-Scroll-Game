import React from 'react'
import styled from 'styled-components'
import { ReactComponent as SkylineSVG } from '../../assets/scene-1/skyline.svg'

const SkylineLayer = styled.div`
  width: 7500px;
  height: 100vh;
  position: absolute;
  top: 50px;
  left: 0;
  display: flex;
  flex-direction: row;
`
const Skyline = styled(SkylineSVG)`
  height: 100vh;
  fill: #76bde9;
  transition: fill 2s ease-in;
`

const Buildings = () => {
  return ( 
    <SkylineLayer className="skylinelayer">
      <Skyline/>
      <Skyline/>
    </SkylineLayer>
  )
}

export default Buildings