import React from 'react'
import styled from 'styled-components'
import { ReactComponent as SalesforceLogo } from '../../assets/scene-1/salesforce.svg'
import { ReactComponent as SharepointLogo } from '../../assets/scene-1/sharepoint.svg'

const StoryContainer = styled.div`
  position: absolute;
  width: 100vw;
  letter-spacing: 2px;
  text-align: center;
  top: 20vh;
  display: flex;
  flex-direction: row;
  
`

const Start = styled.div`
position: absolute;
transition: opacity 1s;
  left: calc(50vw - 255px);
  top: 20vh;
  opacity: 1;
  
  // Animation
  &.BlinkingText{
    animation:blinkingText 2s ease-in-out infinite;
}
@keyframes blinkingText{
    49%{    color: transparent; }
}

&.visible{
opacity: 0!important;
}

`

const Meet = styled.div`
  position: relative;
  left: calc(50vw - 220px);
  width: max-content;
`

const Block2 = styled.div`
  position: absolute;
  left: 1200px;
  width: 100%;
`

const Block3 = styled(Block2)`
  left: 2000px;

  h3, h4 {
    position: relative;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  svg {
    width: 120px;
    position: relative;
    top: 45vh;
    z-index: 10;
    transition: top 0.5s ease-in-out;
  }
  &.up {
    h3, h4 {
      top: 10vh;
      opacity: 1;
    }

    svg {
      top: -20vh;
    }
  }
`

const Block4 = styled(Block3)`
  left: 2700px;
`

const BuyerExperience = styled(Block2)`
  left: 3500px;
`

const Meter1 = styled(Block2)`
  left: 4300px;
`

const Meter2 = styled(Block2)`
  left: 5200px;
`

const End = styled(Block2)`
  left: 6000px
`

const Storyteller = () => {



  return (
    <StoryContainer className="storylayer">

        <Start className="start">
            <h3>Press play OR scroll down</h3>
        </Start>
      <Meet>
        <h2>Meet Hank</h2>
        <h3>a local salesrep</h3>
      </Meet>
      <Block2>
        <h3>Hank is about to meet a client</h3>
        <h3>but he still needs to pick up his tools...</h3>
      </Block2>
      <Block3 className="excel">
        <h3>Salesforce</h3>
        <h4>to track his accounts</h4>
        <SalesforceLogo/>
      </Block3>
      <Block4 className="drive">
        <h3>Sharepoint</h3>
        <h4>for content management</h4>
        <SharepointLogo/>
      </Block4>
      <BuyerExperience>
        <h3>Clients are always looking for</h3>
        <h3>the best buyer experience</h3>
      </BuyerExperience>
      <Meter1>
        <h3>This meter represents the</h3>
        <h3>buyer experience for Hanks clients</h3>
      </Meter1>
      <Meter2>
        <h3>Now that he has picked up his tools,</h3>
        <h3>his meter is filling up nicely</h3>
      </Meter2>
      <End>
        <h3>Time to meet our client!</h3>
      </End>
    </StoryContainer>
  )
}

export default Storyteller