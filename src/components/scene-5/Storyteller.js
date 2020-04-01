import React from 'react'
import styled from 'styled-components'
import { ReactComponent as LogoSVG } from '../../assets/scene-5/showpad.svg'
import PDFLink from './ResultsPDF'

const TextContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 20vh;
  left: 0;
  text-align: center;
  h3 {
    margin-bottom: 2vh;
  }
`
const Text1 = styled.div`
  position: absolute;
  top: 0;
  left: 1000px;
  width: max-content;
`
const Text2 = styled.div`
  position: absolute;
  top: -10vh;
  left: 1800px;
  width: 100vw;
  h4 {
    line-height: 6vh;
  }
`

const Text3 = styled.div`
  position: absolute;
  top: -10vh;
  left: 1800px;
  width: 100vw;
`

const SaveButton = styled.div`
  margin: 5vh auto;
  a {
    padding: 2vh;
    border: 1px solid #2D2E83;
    border-radius: 25px;
    text-decoration: none;
    color: #2D2E83;

    &:hover {
      background: #2D2E83;
      color: white;
    }
  }

`
const Showpad = styled(LogoSVG)`
  width: 150px;
  margin-bottom: 5vh;
`

const handleClick = () => {
    console.log('clicked')
}

const Storyteller = () => {

  return ( 
    <TextContainer className="story-layer">
      <Text1>
        <h3 >Now that Hank uses Showpad,</h3>
        <h3>he is ready to take over the world!</h3>
      </Text1>
      <Text2>
        <Showpad/>
        <h4>Click here to download the results of the survey</h4>
          <SaveButton onClick={( handleClick())} >{PDFLink()}</SaveButton>
        {/*<h4>SHOWPAD</h4>*/}
        {/*<h4>The All-In-One Sales Enablement Platform</h4>*/}
        {/*<h4>Turning mid-performers into top sellers every day</h4>*/}
      </Text2>
      <Text3>

      </Text3>
    </TextContainer>
  )
}

export default Storyteller