import React from 'react'
import styled from 'styled-components'
import {  ReactComponent as BeamSVG } from '../../assets/scene-3/beam.svg'

const BeamContainer = styled.div`
  position: absolute;
  bottom: 160vh;
  left: 5300px;
  width: 650px;
  height: 400px;
  transition: bottom 1s linear;
`
const Beam = styled(BeamSVG)`
`

const SteelBeam = () => {
  return (
    <BeamContainer className="steelbeam-container">
      <Beam />
    </BeamContainer>
  )
}

export default SteelBeam