import React from 'react'
import styled from 'styled-components'
import Office from '../scene-3/Office'
import Storyteller from './Storyteller'
import Fireworks from './Fireworks'

const Background = styled.div`
  background-color: #87CEFA;
  width: 100vw;
  height: 100vh;
  position: absolute;
  transition: background-color 2s ease-in;
`

const Sidewalk = styled.div`
  background-color: #BCBCBC;
  position: relative;
  height: 15%;
  top: 85%;
  left: 0;
  border-top: 10px solid #ACACAC;
`

const BackgroundLayer = () => {
  return (
    <Background>
      <Fireworks />
      <Storyteller />
      <Office />
      <Sidewalk />
    </Background>
  )
}

export default BackgroundLayer