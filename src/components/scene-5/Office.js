import React from 'react'
import styled from 'styled-components'
import { ReactComponent as OfficeSVG } from '../../assets/scene-1/office-building.svg'
import { ReactComponent as DoorSVG } from '../../assets/scene-1/sliding-part-door.svg'


const OfficeContainer = styled.div`
  width: 775px;
  position: absolute;
  bottom: 14%;
  left: 150px;
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
const Office = () => {

  return ( 
    <OfficeContainer className="office">
      <OfficeSVG />
      <LeftDoor />
      <RightDoor />
    </OfficeContainer>
  )
}

export default Office