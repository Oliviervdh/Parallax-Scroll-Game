import React from 'react'
import styled from 'styled-components'

import { ReactComponent as DoorFrame } from "../../assets/scene-2/DoorFrame.svg";
import { ReactComponent as DoorBackGround } from "../../assets/scene-2/DoorBackGround.svg";



const DoorLayer = styled.div`
  position: absolute;
  bottom: 30em;

  .doorFrame{
   position: absolute;
   height: 30em;
   z-index: 4;
  }
  .doorBackGround{
   position: absolute;
   height: 26.6em;
   left: 2.8em;
   z-index: 2;
   top: 2.9em;
  }

`

const Doors = (props) => {

    return(
        <DoorLayer className={props.passClass}>
            <DoorFrame className="doorFrame"/>
            <DoorBackGround className="doorBackGround"/>
        </DoorLayer>
    )
};


const testing = document.querySelector('.doorFrame');

console.log(testing);


export default Doors;