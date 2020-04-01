import React from 'react'
import styled from 'styled-components'
import { ReactComponent as TextBalloonHank } from '../../assets/scene-2/TextCloud3.svg'
import { ReactComponent as YesBox } from '../../assets/scene-2/Yes-box.svg';
import { ReactComponent as NoBox } from '../../assets/scene-2/No-box.svg';
import { ReactComponent as Banana } from '../../assets/scene-2/Banana.svg';
import { ReactComponent as GoldenApple } from "../../assets/scene-2/AppleGold.svg";

const ConversationLayerHank = styled.div`

  .balloonHank {
  opacity: 0;
  position: absolute;
  transition: 0.4s;
  left: 35px;
  top: 45px;
  width: 100px;
  height: 100px;
  }
   .yesHank{
    position: absolute;
    opacity: 0;
    transition: 0.4s;
    width: 40px;
    height: 40px;
    top: 75px;
    left: 70px;
   }
   .noHank{
   position: absolute;
   opacity: 0;
   transition: 0.4s;
   width: 40px;
   height: 40px;
   top: 75px;
   left: 70px;
   } 
   .banana{
   position: absolute;
   opacity: 0;
   transition: 0.4s;
   width: 40px;
   height: 40px;
   top: 75px;
   left: 70px;
   }
   .goldenApple{
   position: absolute;
   opacity: 0;
   transition: 0.4s;
   width: 80px;
   height: 80px;
   top: 52px;
   left: 48px;
   }
   
   // Toggle Classes
   .balloonHankToggle {
   opacity: 1;
   }
    .balloonHankS4Toggle {
   opacity: 1;
   left: 50px;
   }
   .yesHankToggle{
      opacity: 1;
   }
   .noHankToggle{
      opacity: 1;
   }
    .bananaToggle{
      opacity: 1;
   }
   .goldenAppleToggle{
   opacity: 1;
   left: 63px;
   }
`

const ConversationHank = () => {

    return(
        <ConversationLayerHank className="conversation">
            <TextBalloonHank className="balloonHank"/>
            <YesBox className="yesHank"/>
            <NoBox className="noHank"/>
            <Banana className="banana"/>
            <GoldenApple className="goldenApple"/>
        </ConversationLayerHank>
    )
};

export default ConversationHank;