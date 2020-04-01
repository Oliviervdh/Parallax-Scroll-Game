import React, { useEffect } from 'react'
import styled from 'styled-components'
import Window from './scene-2&4/WindowComponent'
import GraphWall from './scene-2&4/GraphicWallComponent'
import Plant from './scene-2&4/PlantComponet'
import Client from './scene-2&4/ClientComponent'
import StoryTellerWalking from './scene-2&4/StoryWalkingComponent'
import StoryTellerMeeting from "./scene-2&4/StoryMeetingComponent";
import Doors from './scene-2&4/DoorComponent'
import FakeWall from "./scene-2&4/FakeWallComponent";
import {animateSceneFour, resetScrolls} from "../helpers/animateScene4";
import {transitionScene} from "../helpers/triggers";
import {resetPlayCounter} from "./controls";

const Scene4Wrapper = styled.div`
  position: absolute;
  transition: 1s;
  background-color: #92CDFA;
  width: 100vw;
  height: 100vh;
`

const FirstFloor = styled.div`
   position: absolute;
   transition: 2s ease-in-out;
   background-color: #92CDFA;
   width: 100vw;
   height: 85vh;
   top: 0vh;

   &.firstFloorToggle {
   top: 100vh;
   }
   .window1 {
   position: absolute;
   left: 13.85%;
   }
   .officeLight1 {
   left: 60%;
   }
   .storyWalking{
   left: 65%;
   }
   .graphWall {
   left: 140vw;
   } 
   .storyMeeting{
   top: 6%;
   left: 210vw;
   } 
   .client1 {
   left: 242vw;
   }
   .plant1{
    left: 280vw;
   } 
   .window2 {
   left: 280vw;
   }
   .plant2{
   left: 310vw;
   }
   .door1{
   left: 330vw;
   }
   .fakeWall1{
   left: 356.5vw;
   }
   .plant3{
   left: 420vw;
   }
`

const Floor1 = styled.div`
 background-color: #485C6E;
  position: relative;
  height: 20%;
  top: 98.5%;
  left: 0;
  border-top: 10px solid #ACACAC;
  `


const Scene4 = (props) => {
    console.log('loading s4')
    let currentScene = props.currentScene
    let previousScene = props.prevScene

    //reset scrollpositions
    useEffect(() => {
        window.scroll(0, 10)
        resetScrolls()
    })

    //adding and removing event listeners at render and unmount
    useEffect(() => {
        window.addEventListener('scroll', animateSceneFour)
        window.addEventListener('scroll', changeScene)

        // removing blackout transition screen.
        let blackout = document.querySelector('.blackout');
        blackout.style["opacity"] = 0;
        transitionScene()

        //if coming back, scroll to end of scene
        if (currentScene === 3 && previousScene === 4) {

            window.scroll(0, 20845);
            console.log("scroll to end of page: " + window.scrollY)
            //remove extra styling on Hank from previous scene.
        }
        return () => {
            window.removeEventListener('scroll', animateSceneFour)
            window.removeEventListener('scroll', changeScene)
            const play = document.querySelector('.control.play').classList.value;
            if (play.includes('active')) { resetPlayCounter()}
        }
    });

    //when to change scene
    let prevScroll = 0
    const changeScene = () => {
        let scrollPos = window.scrollY
        if (currentScene === 3 && scrollPos > 22785 && prevScroll < scrollPos && (prevScroll < 22785 && scrollPos > 22785) || (scrollPos === 22785)){

            console.log("blackout", " + change scene")

            // Blackout screen for transition of scenes.
            let blackout = document.querySelector('.blackout');
            blackout.style["opacity"] = 1;
            transitionScene()


            setTimeout(function () {
                // remove extra styling on Hank, when going to next scene.

                let hank = document.querySelector('.hank-container');
                hank.classList.remove('hankInElevator');
                hank.classList.remove('hankThroughDoor');

                props.changeNumber({
                    current: 4,
                    previous: 3
                })
            },1000)
        }
        if(currentScene === 3 && scrollPos <= 0 && prevScroll > 0) {

            // Blackout screen for transition of scenes.
            let blackout = document.querySelector('.blackout');
            blackout.style["opacity"] = 1;

            setTimeout(function () {
                props.changeNumber({
                    current: 2,
                    previous: 3
                })
            },1000)
        }
        prevScroll = scrollPos
    }

    // window.scroll(0, 10)

    return (
        <Scene4Wrapper>
            <FirstFloor className="firstFloor">
                <Floor1 className="floor1"/>
                <Window passClass="window1" />
                <StoryTellerWalking passClass="storyWalking"/>
                <GraphWall passClass="graphWall"/>
                <Plant passClass="plant1"/>
                <StoryTellerMeeting passClass="storyMeeting"/>
                <Client passClass="client1"/>
                <Window passClass="window2"/>
                <Plant passClass="plant2"/>
                <FakeWall passClass="fakeWall1"/>
                <Doors passClass="door1" />
                <Plant passClass="plant3"/>
            </FirstFloor>
        </Scene4Wrapper>
    )
};

export default Scene4