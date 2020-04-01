import React from 'react'
import styled from 'styled-components'
import Clouds from './Clouds'
import Buildings from './Buildings-bg'
import Office from './Office'
import LastOffice from './SecondOffice'
import Mario from './Mario'
import Ufo from './Ufo'
import Hole from './Hole'
import SteelBeam from './SteelBeam'
import House from './House'
import Moon from './Moon'
import ShowpadLogo from './ShowpadLogo'
import Badges from './Badges'

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
    <Background className="sky">
      <Clouds />
      <Buildings />
      <Office />
      <LastOffice />
      <Mario />
      <Ufo />
      <House />
      <Moon />
      <Sidewalk className="sidewalk"/>
      <ShowpadLogo />
      <Hole />
      <SteelBeam />
      <Badges />
    </Background>
  )
}

export default BackgroundLayer