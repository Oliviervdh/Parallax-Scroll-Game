import React from 'react'
import styled from 'styled-components'

import ClientOnePNG from "../../assets/scene-2/FemaleClientOne.png";
import ClientTwoPNG from "../../assets/scene-2/FemaleClientTwo.png";
import { ReactComponent as TextBalloonClientConversation } from '../../assets/scene-2/TextCloud3.2.svg';
import { ReactComponent as TextBalloonClientSwearing } from '../../assets/scene-2/TextCloud3.2.svg';
import { ReactComponent as YesBox } from '../../assets/scene-2/Yes-box.svg';
import { ReactComponent as NoBox } from '../../assets/scene-2/No-box.svg';
import { ReactComponent as AnnoyOpointer } from '../../assets/scene-2/Annoy-o-pointer.svg';
import { ReactComponent as Apple } from '../../assets/scene-2/Apple.svg';
import { ReactComponent as AnnoyOmeter } from '../../assets/scene-2/Annoy-O-Meter.svg';

const ClientLayer = styled.div`
  position: relative;
  color: #2D2E83;
  
   .clientOne {
    transition: left 2s linear;
    position: absolute;
    opacity: 0;
    z-index: 5;
    top: 290px;
    left: 30vw;
    width: calc(1640px / 8);
    height: 310px;
    background: url(${ClientOnePNG});
    background-position: 0px 310px;
   } 
   .clientTwo {
    transition: left 2s linear;
    position: absolute;
    opacity: 0;
    z-index: 5;
    top: 290px;
    left: 30vw;
    width: calc(1640px / 8);
    height: 310px;
    background: url(${ClientTwoPNG});
    background-position: 0px 310px;
   } 
   .annoyOMeter{
   position: absolute;
   opacity: 0;
   width: 150px;
   left: 1vw;   
   top: 25vh 
   }
   .annoyOGauge{
   position: absolute;
   opacity: 0;
   width: 20px;
   left: 5.5vw;   
   top: 29vh;
   }  
   .balloonClientConversation{
   opacity: 0;
   transition: 0.4s;
   position: absolute;
   width: 100px;
   height: 100px;
   top: 17em;
   left: -3vw;   
   }
   .balloonClientSwearing{
   opacity: 0;
   transition: 2s linear;
   position: absolute;
   width: 100px;
   height: 100px;
   top: 17em;
   left: -3vw;   
   }
   .yesClient{
   position: absolute;
   opacity: 0;
   transition: 0.4s;
   width: 40px;
   height: 40px;
   left: -1.3vw;   
   top: 18.75em;
   }
   .noClient{
   position: absolute;
   opacity: 0;
   transition: 0.4s;
   width: 40px;
   height: 40px;
   left: -1.3vw;   
   top: 18.75em;
   }
   .questionMarkClient{
   color: white;
   position: absolute;
   opacity: 0;
   font-size: 22px;
   left: -1.3vw;   
   top: 13.75em;
   }
   .swearingClient {
   color: white;
   position: absolute;
   opacity: 0;
   transition: 2s linear;
   font-size: 16px;
   left: -2.5vw;   
   top: 19.3em;
   }
  .apple{
   position: absolute;
   opacity: 0;
   width: 40px;
   height: 40px;
   left: -1.3vw;   
   top: 18.75em;
  }
  
   // toggle classes
   
   .clientWalks{
    animation: walking_client 1s steps(8) infinite;
   }
    .clientStanding{
    background-position: -205px 0px;
    }   
    .clientIn {
    left: 0vw;
        }
    .clientVisible{
    opacity: 1;
    }
    .clientOut{
    left: -120em;
    transition: 2s linear;
    }
    .annoyOMeterOut{
    left: -120em;
    }
    .annoyOGaugeOut{
    left: -116em;
    }
    .swearingClientOut{
    left: -120em;
    transition: 2s linear;
    }
    .whistlingClientOut{
    left: -124em;
    }
    .balloonClientOut{
    left: -120em;
    transition: 2s linear;
    }   
   .annoyOMeterToggle{
   opacity: 1;
   }   
   .annoyOGaugeToggle{
   opacity: 1;
   }
   .balloonClientToggle{
   opacity: 1;
   }
   .questionMarkClientToggle{
   opacity: 1;
   }
   .swearingClientToggle{
   opacity: 1;
   }
   .whistlingClient{
   opacity: 1;      
   }
   }
   .yesClientToggle{
   opacity: 1;
   }
   .noClientToggle{
   opacity: 1;
   }
   .appleToggle{
   opacity: 1;
   }
  
  // Animations
  .AnnoyOGaugeToCool{
   transform-origin: bottom;
   animation-name: annoy_to_crank;
   animation-duration: 2s;
   animation-fill-mode:forwards;
   }
    .AnnoyOGaugeToCrank{
   transform-origin: bottom;
   animation-name: annoy_to_cool;
   animation-duration: 1.5s;
   animation-direction: reverse;
   animation-fill-mode:forwards;
   }
   
  // Keyframes
  @keyframes annoy_to_crank {
    from { transform: rotateZ(0deg)}
    to { transform: rotateZ(60deg)}
  }
  @keyframes annoy_to_cool {
    from { transform: rotateZ(-60deg)}
    to { transform: rotateZ(0deg)}
  }
  @keyframes walking_client {
    from{
    background-position: 0px 310px;
    }
    to{
        background-position: 1640px 310px;
    } 
`

const Client = (props) => {


    return(
        <ClientLayer className={props.passClass}>
            <AnnoyOmeter className="annoyOMeter"/>
            <div className="annoyOGauge">
                <AnnoyOpointer />
            </div>
            <div className="clientOne"></div>
            <div className="clientTwo"></div>
            <TextBalloonClientConversation className="balloonClientConversation"/>
            <TextBalloonClientSwearing className="balloonClientSwearing"/>
            <div className="questionMarkClient"><p>???</p></div>
            <div className="swearingClient">#$@&%*!</div>
            <YesBox className="yesClient"/>
            <NoBox className="noClient"/>
            <Apple className="apple"/>
        </ClientLayer>
    )
};

export default Client;