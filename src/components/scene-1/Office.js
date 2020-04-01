import React from 'react'
import styled from 'styled-components'
import { ReactComponent as OfficeSVG } from '../../assets/scene-1/office-building.svg'
import { ReactComponent as DoorSVG } from '../../assets/scene-1/sliding-part-door.svg'
import { ReactComponent as InteriorSVG } from '../../assets/scene-1/interior.svg'

const OfficeContainer = styled.div`
  width: 775px;
  position: absolute;
  left: 7200px;
  bottom: 14%;
`

const LeftDoor = styled(DoorSVG)`
  width: 170px;
  position: absolute;
  bottom: 0;
  left: calc(50% - 170px);
  border-right: 5px solid #7DA9B5;
  transition: left 0.4s ease-in-out;
`

const RightDoor = styled(LeftDoor)`
  left: 50%;
  border-right: none;
  border-left: 5px solid #7DA9B5;
`

const Interior = styled(InteriorSVG)`
  height: 339px;
  position: absolute;
  bottom: 0;
  left: calc(50% - 95px);
  opacity: 0.3;
`

const Office = () => {

  return ( 
    <OfficeContainer className="office">
      <OfficeSVG />
      <Interior />
      <LeftDoor />
      <RightDoor />
    </OfficeContainer>
  )
}

export default Office