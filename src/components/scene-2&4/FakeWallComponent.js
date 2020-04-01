import React from 'react'
import styled from 'styled-components'

const LightLayer = styled.div`
  position: absolute;
  bottom: 26.65em;

  .fakeWall {
  position: absolute;
  background-color: #92CDFA;
  z-index: 6;
  height: 26em;
  width: 16.8em;
  }
  
`

const FakeWall = (props) => {

    return(
        <LightLayer className={props.passClass}>
            <div className="fakeWall"></div>
        </LightLayer>
    )
};

export default FakeWall;