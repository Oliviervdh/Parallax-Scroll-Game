import React from 'react'
import styled from 'styled-components'

import WindowPNG from "../../assets/scene-2/Window.svg";

const WindowLayer = styled.div`
  position: absolute;
    bottom: 32em;

 .window {
    position: absolute;
    height: 25em;
  }
`

const Window = (props) => {
    return(
        <WindowLayer className={props.passClass} >
            <div><img className="window" src={WindowPNG} alt=""/></div>
        </WindowLayer>
    )
};

export default Window;