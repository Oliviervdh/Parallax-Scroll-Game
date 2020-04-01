import React from 'react'
import styled from 'styled-components'

import GraphWallPNG from "../../assets/scene-2/GraphicWall.svg";

const GraphicWallLayer = styled.div`
  position: absolute;
  bottom: 32em;

  .graphWall1 {
  position: absolute;
    height: 25em;
  }
  
  
`

const GraphWall = (props) => {


    return(
        <GraphicWallLayer className={props.passClass}>
            <div><img className="graphWall1" src={GraphWallPNG} alt=""/></div>
        </GraphicWallLayer>
    )
};


export default GraphWall;