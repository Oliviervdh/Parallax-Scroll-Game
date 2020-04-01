import React from 'react'
import styled from 'styled-components'
import Bang from './Bang'

const FireworksContainer = styled.div`
  position: absolute;
  top: 10vh;
  left: 1000px;
  display: flex;
`
const red = "#e41656"
const green = "#41824B"
const yellow = "#E8C547"
const orange = "#EE6C4D"

const Fireworks = () => {

  return ( 
    <FireworksContainer className="fireworks-container">
      <Bang id="0" color={red} left="50px" top="0vh" delay="0"/>
      <Bang id="1" color={green} left="0px" top="10vh" delay="2500"/>
      <Bang id="2" color={orange} left="150px" top="0vh" delay="1200"/>
      <Bang id="3" color={red} left="250px" top="20vh" delay="1500"/>
      <Bang id="4" color={yellow} left="250px" top="5vh" delay="1900"/>
      <Bang id="5" color={red} left="150px" top="0vh" delay="1200"/>
      <Bang id="6" color={red} left="100px" top="10vh" delay="400"/>
      <Bang id="7" color={green} left="100px" top="7vh" delay="800"/>
      <Bang id="8" color={red} left="200px" top="15vh" delay="100"/>
      <Bang id="9" color={yellow} left="150px" top="12vh" delay="1700"/>
      <Bang id="10" color={orange} left="50px" top="0vh" delay="1500"/>
      <Bang id="11" color={red} left="100px" top="5vh" delay="1900"/>
      <Bang id="12" color={green} left="150px" top="10vh" delay="1400"/>
      <Bang id="13" color={red} left="250px" top="-5vh" delay="1800"/>
    </FireworksContainer>
  )
}

export default Fireworks