import React, {useEffect} from 'react'
import styled, {keyframes} from 'styled-components'
import { ReactComponent as FireworkSVG } from '../../assets/scene-5/fireworks.svg'

const fireOne = keyframes`
  0% {opacity: 0;}
  40% {opacity: 0.2;}
  50% {opacity: 0.4;}
  60% {opacity: 0.2;}
  100% {opacity: 0;}
`
const fireTwo = keyframes`
  0% {opacity: 0;}
  40% {opacity: 0.3;}
  50% {opacity: 0.6;}
  60% {opacity: 0.3;}
  100% {opacity: 0;}
`
const fireThree = keyframes`
  0% {opacity: 0;}
  40% {opacity: 0.4;}
  50% {opacity: 0.8;}
  60% {opacity: 0.4;}
  100% {opacity: 0;}
`
const grow = keyframes`
  from {transform: scale(0.2)}
  to {transform: scale(1)}
`
const BangContainer = styled.div`
  width: 150px;
  position: relative;
  top: ${props => props.top};
  left: ${props => props.left};

  path {
    opacity: 0;
    fill: ${props => props.color}
  }

  &.explode {

    svg {
      animation-name: ${grow};
      animation-duration: 1s;
      animation-iteration-count: 1;
    }
    g>path {
      animation-duration: 0.7s;
      animation-iteration-count: 1;
    }
    g>path:nth-of-type(1) {
      animation-name: ${fireOne};
      animation-delay: 0.45s;
    }
    g>path:nth-of-type(2) {
      animation-name: ${fireTwo};
      animation-delay: 0.3s;
    }
    g>path:nth-of-type(3) {
      animation-name: ${fireThree};
      animation-delay: 0.2s;
    }
  }
`

const Bang = (props) => {
  useEffect(() => {
    let element = document.querySelectorAll(`.bang-container`)[props.id]
    let fire
    let delay = parseInt(props.delay) + 2000
    console.log('delay', delay)
    setTimeout(() => {
      fire = setInterval(() => {
        element.classList.toggle('explode')
      }, 1000)
    }, delay)

    return () => {
      clearInterval(fire)
    }
  })

  return ( 
    <BangContainer className="bang-container" left={props.left} top={props.top} color={props.color}>
      <FireworkSVG/>
    </BangContainer>
  )
}

export default Bang