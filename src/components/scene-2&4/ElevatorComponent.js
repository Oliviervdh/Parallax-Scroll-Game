import React from "react";
import styled from 'styled-components'

import { ReactComponent as Rails } from "../../assets/scene-2/ElevatorRails.svg";
import { ReactComponent as Cabin } from "../../assets/scene-2/ElevatorCabin.svg";
import { ReactComponent as Doors } from "../../assets/scene-2/ElevatorDoors.svg";
import { ReactComponent as Window} from "../../assets/scene-2/ElevatorWindow.svg";

const ElevatorLayer = styled.div`
  position: absolute;
  bottom: 100%;
  height: 100vh;
    .elevatorRails {
    z-index: 1;
    position: absolute;
    top: -140px;
    width: 26.3em;
  }
    .elevatorCabin {
    z-index: 7;
    position: absolute;
    transition: 1.75s;
    top: 8.5vh;
    width: 26.25em;
  } 
  .elevatorWindow{
    transition: 1.75s;
      z-index: 7;
      position: absolute;
      top: 114.3vh;
      width: 26.3em;
  }
  .elevatorDoors{
    transition: 1.75s;
       z-index: 2;
       position: absolute;
       width: 26.3em; 
       top: 107vh;
  }
   .CabinLd{
  transition: 1s;
  fill: #666E7A;
  z-index: 1;
  opacity: 1;
  }
  .CabinRd{ 
  transition: 1s;
  fill: #666E7A;
  opacity: 1;
  right: 0;
  float: right;
  }
  .CabinLdToggle{
  transition: 1s;
  opacity: 0;
  position: absolute;
  width: 15.4%;
  }
  .CabinRdToggle{
  position: absolute;
  opacity: 0;
  width: 20%;
  x: 207;
  }
  
   .cabinUp{
    top: -105.5vh;
  }
  .windowUp{
        top: 0.3vh;
  }
  .doorsUp{
         top: -7vh;
  }
`

const Elevator = () => {


    return(
        <ElevatorLayer >
            <Rails className={"elevatorRails"}/>
            <Rails className="elevatorRails"/>
            <Cabin className="elevatorCabin"/>
            <Doors className="elevatorDoors"/>
            <Window className="elevatorWindow"/>
        </ElevatorLayer>
    )
};

export default Elevator;