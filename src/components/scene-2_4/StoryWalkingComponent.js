import React from 'react'
import styled from 'styled-components'
import Screen from "./screenComponent";
import { ReactComponent as LightBulb } from "../../assets/scene-2/LightBulb.svg";
import { ReactComponent as HeartMap } from "../../assets/scene-2/HeartMap.svg";
import { ReactComponent as Challenge } from "../../assets/scene-2/N1.svg";
import { ReactComponent as Articulate } from "../../assets/scene-2/Challenge.svg";

const StoryContainerWalking = styled.div`
text-align: center;
position: absolute;
width: 22em;
height: 8em;
color: #2D2E83;
font-size: 30px;


.screenWalking{
transition: 2s;
opacity: 1;
top: -300%;
}

  .screenWalkingToggle{
opacity: 1;
top: -25%;
}

.screenWalking{
position: absolute;
}

// scene2
.story1s2 { 
    position: absolute;
    opacity: 1;
    width: 16em;
    transition: 2s;
    top: -275%;
    left: 12%;
}
.story2s2 { 
    position: absolute;
    opacity:  0;
    transition: 2s;
    top: 50%;
    left: 15%;   
}
.challenge {
position: absolute;
    opacity: 0.2;
    transition: 1s;
    top: -200%;
    left: 70%;
    width: 100px;
}
.articulate {
position: absolute;
    opacity: 0.2;
    transition: 1s;
    top: -200%;
    left: 12%;
    width: 100px;
}

//Toggle classes.
.story1s2In {
    position: absolute;
    opacity: 1;
    transition: 2s;
    top: 10%;
}
.story1s2Out{
opacity: 0;
}
.story2s2Toggle {
    position: absolute;
    opacity: 1;
    transition: 2s;
}
.challengeToggle{
opacity: 1;
    top: 0%;
}
.articulateToggle{
opacity: 1;
    top: 0%;
}

// scene4
.story1s4 { 
    position: absolute;
    opacity: 1;
    width: 16em;
    transition: top 2s;
    top: -275%;
    left: 12%;
}
.story2s4 { 
    position: absolute;
    opacity:  0;
    transition: 2s;
    top: 15%;
    left: 12%;
}
.story3s4 { 
    position: absolute;
    opacity:  0;
    transition: 2s;
    top: 35%;
    left: 4%;
}
.lightBulb {
    position: absolute;
    opacity: 0.2;
    transition: 1s;
    font-size: 30px;
    top: -200%;
    left: 15%;
    width: 100px;
}
.heartMap {
    position: absolute;
    opacity: 0.2;
    transition: 1s;
    top: -200%;
    left: 65%;
    width: 100px;
}

//Toggle classes.
.story1s4In {
    position: absolute;
    opacity: 1;
    top: 15%
}
.story1s4Out{
opacity: 0;
}
.story2s4Toggle {
    position: absolute;
    opacity: 1;
    transition: 2s;
}
.story3s4Toggle {
    position: absolute;
    opacity: 1;
    transition: 2s;
}
.lightBulbToggle{
opacity: 1;
    top: 55%;
}

.heartMapToggle{
opacity: 1;
    top: 55%;
}
`


const StoryTellerWalking = (props) => {

    return (
                <StoryContainerWalking className={props.passClass}>
                    <Screen passClass="screenWalking" />
                    {/*Scene2*/}
                    <div className="story1s2" >#1 Challenge</div>
                    <Challenge className="challenge"/>
                    <Articulate className="articulate"/>
                    <div className="story2s2" >For sellers is to articulate <br/> unique value to their customers.</div>

                    {/*Scene4*/}
                    <div className="story1s4" >How to deliver better buying experiences in B2B?</div>
                    <div className="story2s4" >Having smart, informed sales reps.</div>
                    <LightBulb className="lightBulb"/>
                    <div className="story3s4" >Equipped to engage with the modern buyer.</div>
                    <HeartMap className="heartMap"/>
                    <div className="heatMap"></div>
                </StoryContainerWalking>
    )
}

export default StoryTellerWalking;