import React from 'react'
import styled from 'styled-components'
import { ReactComponent as MoonSVG } from '../../assets/scene-3/moon.svg'

const MoonContainer = styled.div`
  position: absolute;
  top: -20vh;
  left: 8930px;
  width: 150px;
  transition: top 1s ease;
  
  &.down {
    top: 10vh;
  }
`

const Moon = () => {
  return (
    <MoonContainer className="moon-container">
      <MoonSVG />
    </MoonContainer>
  )
}

export default Moon