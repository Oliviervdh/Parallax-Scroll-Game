import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Browser} from "../../assets/scene-2/ShowpadScreen.svg";

const ScreenLayer = styled.div`
  position: absolute;
  top: -2em;

  .screen {
  position: absolute;
  height: 10em;
  }
  
`

const Screen = (props) => {

    return(
        <ScreenLayer className={props.passClass}>
            <Browser className="screen"/>
        </ScreenLayer>
    )
};

export default Screen;