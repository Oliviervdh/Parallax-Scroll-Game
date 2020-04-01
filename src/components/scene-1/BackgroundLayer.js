import React from 'react'
import styled from 'styled-components'
import Clouds from './Clouds'
import Buildings from './Buildings-bg'
import Bench from './Bench'
import Office from './Office'

const Background = styled.div`
  background-color: #87CEFA;
  width: 100vw;
  height: 100vh;
  position: absolute;
`

const Sidewalk = styled.div`
  background-color: #BCBCBC;
  position: relative;
  height: 15%;
  top: 85%;
  left: 0;
  border-top: 10px solid #ACACAC;
  z-index: 5;
`

const BackgroundLayer = () => {
  return (
    <Background>
      <Clouds />
      <Buildings />
      <Bench />
      <Office />
      <Sidewalk />
    </Background>
  )
}

export default BackgroundLayer