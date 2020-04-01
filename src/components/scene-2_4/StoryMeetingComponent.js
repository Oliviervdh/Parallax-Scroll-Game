import React from 'react'
import styled from 'styled-components'
import Screen from "./screenComponent";

import {handleClickScene2} from "../../helpers/animateScene2";
import {handleClickScene4} from "../../helpers/animateScene4";


const StoryContainerMeeting = styled.div`
text-align: center;
position: absolute;
left: 10%;
width: 22em;
height: 10em;
color: #2D2E83;
font-size: 30px;

.nextBtnS2{
position: absolute;
transition: 2s;
color: white;
background-color: #2D2E83;
top: -155%;
left: 42.5%;
width: 80px;
height: 40px;
border-style: none;
border-radius: 5px;
z-index: 30;
}

.nextBtnS4{
position: absolute;
transition: 2s;
color: white;
background-color: #2D2E83;
top: -155%;
left: 42.5%;
width: 80px;
height: 40px;
border-style: none;
border-radius: 5px;
z-index: 30;
}

.screenMeeting{
position: absolute;
transition: 2s;
opacity: 1;
top: -235%;
}

.screenMeetingToggle{
opacity: 1;
top: 12%;
}

//Scene 2.
.story3s2 { 
    opacity: 1;
    position: absolute;
    transition: 2s;
    top: -210%;
    left: 13%;
    font-size: 38px;
}
.story3s2In{
    position: absolute;
    transition: 2s;
    top: 36%;
}
.story3s2Out{
opacity: 0;
}
.story4s2 { 
    opacity: 0;
    position: absolute;
    transition: 0.5s;
    top: 55%;
    text-align: center;
}
.story5s2 { 
    opacity: 0;
    position: absolute;
    transition: 0.5s;
    top: 51.5%;
    text-align: center;
}
.story6s2 { 
    opacity: 0;
    position: absolute;
    transition: 0.5s;
    top: 57%;
    left: 13%;
    text-align: center;
}
.story7s2 { 
    opacity: 0;
    position: absolute;
    transition: 0.5s;
    top: 55%;
    left: 2%;
    text-align: center;
}
.story8s2 { 
    opacity: 0;
    position: absolute;
    transition: 0.5s;
    top: 55%;
    left: 25%;
    text-align: center;
}

// Toggle classes.
.story4s2Toggle{
opacity: 1;
}
.story5s2Toggle{
opacity: 1;
}
.story6s2Toggle{
opacity: 1;
}
.story7s2Toggle{
opacity: 1;
}
.story8s2Toggle{
opacity: 1;
}

//Scene 4.
.story333 { 
    z-index: 20;
    opacity: 1;
    position: absolute;
    transition: 2s;
    top: -210%;
    left: 8%;
    font-size: 38px;
}
.story4s4 { 
    opacity: 0;
    position: absolute;
    transition: 0.5s;
    top: 55%;
    text-align: center;
}
.story5s4 { 
    opacity: 0;
    position: absolute;
    transition: 0.5s;
    top: 55%;
    text-align: center;
}
.story6s4 { 
    opacity: 0;
    position: absolute;
    transition: 0.5s;
    top: 55%;
    left: 0%;
    text-align: center;
}
.story7s4 { 
    opacity: 0;
    position: absolute;
    transition: 0.5s;
    top: 55%;
    left: 8.4%;
    text-align: center;
}

//Toggle Classes.

.story333Toggle{
    top: 35%;;
}
.story4s4Toggle{
opacity: 1;
}
.story5s4Toggle{
opacity: 1;
}
.story6s4Toggle{
opacity: 1;
}
.story7s4Toggle{
opacity: 1;
}
.nextBtnS2Visible{
opacity: 0;
}
.nextBtnS4Visible{
opacity: 0;
}

.nextBtnS2Toggle{
top: 90%;
}
.nextBtnS4Toggle{
top: 90%;
}

`



const StoryTellerMeeting = (props) => {

    return (
        <StoryContainerMeeting className={props.passClass}>
            <Screen passClass="screenMeeting" />
            <button className="nextBtnS2" onClick={handleClickScene2} disabled={false} >Next</button>
            <button className="nextBtnS4" onClick={handleClickScene4} disabled={false} >Next</button>

            {/*Scene2*/}
            <div className="story3s2">The content struggle is real</div>
            <div className="story4s2">80% of sales reps spend up to 30 hours/month finding the right materials.</div>
            <div className="story5s2">In Hanks struggle to find the right materials <br/> he accidentally gave the client the wrong content.</div>
            <div className="story6s2">Resulting in poor buyer experience... <br/> </div>
            <div className="story7s2">The client gets annoyed and Hank does not close his sale.</div>
            <div className="story8s2">Better luck next time...</div>
            {/*Scene3*/}
            <div className="story333">The best buyer experience wins.</div>
            <div className="story4s4">82% of B2B buyers make a purchase based on experience, ahead of price and product</div>
            <div className="story5s4">Being Showpad-certified, Hank is now able to provide high quality content to his clients.</div>
            <div className="story6s4">The client is totally blown away this level of professionalism.</div>
            <div className="story7s4">Congratulations, Hank closed the deal!!!</div>
        </StoryContainerMeeting>
    )
}

export default StoryTellerMeeting;