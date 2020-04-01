import React from 'react'
import styled, {keyframes} from 'styled-components'
import { ReactComponent as LogoSVG } from '../../assets/scene-3/showpad.svg'

const jump = keyframes`
  from {
    bottom: 8vh;
  }
  to {
    bottom: 14vh;
  }
`
const spinning = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const LogoContainer = styled.div`
  position: absolute;
  bottom: 8vh;
  left: 8930px;
  width: 175px;
  opacity: 0;
  transition: opacity 6s ease;
  &.show {
    opacity: 1;
  }
  &.spinning {
    animation: ${spinning} 1s linear infinite;
  }
  &.jumping {
    animation: ${jump} 0.4s ease-out alternate infinite;
  }
`

const ShowpadLogo = () => {
  return (
    <LogoContainer className="showpadlogo-container">
      <LogoSVG />
    </LogoContainer>
  )
}

export default ShowpadLogo