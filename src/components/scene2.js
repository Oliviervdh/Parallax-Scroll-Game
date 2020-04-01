import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Elevator from './scene-2&4/ElevatorComponent'
import Window from './scene-2&4/WindowComponent'
import GraphWall from './scene-2&4/GraphicWallComponent'
import Plant from './scene-2&4/PlantComponet'
// import Client from './scene-2&4/ClientComponent'
import StoryTellerWalking from './scene-2&4/StoryWalkingComponent'
import StoryTellerMeeting from "./scene-2&4/StoryMeetingComponent";
import Doors from './scene-2&4/DoorComponent'
import FakeWall from "./scene-2&4/FakeWallComponent";
import {animateSceneTwo, resetScrolls} from "../helpers/animateScene2";
import { transitionScene } from '../helpers/triggers';
import {resetPlayCounter} from "./controls";


const Scene2Wrapper = styled.div`
  position: absolute;
  transition: 1.5s;
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
  .plant1{
    left: 128%;
  } 
  .door1{
    left: 140%;
  }
  .fakeWall1{
  left: 166.4%;
  } 
 .fakeWall4{
   left: 601.8%;
 } 
 .door4{
   left: 618.65%;
 }
  .plant4{
 left: 645%;
 }
 .window4{
 left: 665%
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

const SecondFloor = styled.div` 
  position: absolute;
  transition: 2s ease-in-out;
  background-color: #92CDFA;
  width: 100vw;
  height: 85vh;
  top: -103vh;
  left: 157.6%;
   
   .storyMeeting{
   top: 6%;
   left: 195%;
   }
   &.secondFloorToggle {
    top: 0vh;
  }
  .fakeWall2{
  left: 56.62%;
  }
  .door2{
   left: 73.44%;
  }  
  .plant2{
   left: 130%;
  }
  .window2 {
   left: 143%;
  }

  .client1 {
   left: 227vw;
  }
   .graphWall {
   left: 290%;
  }
  .plant3{
   left: 358%;
  }
  .door3 {
   //left: 430.45%; 60.4
    left: 370%; 
  }
 .fakeWall3{
  //left: 456.8%;
   left: 396.4%;
  }
`

const Floor2 = styled.div`
  background-color: #485C6E;
  position: relative;
  height: 20%;
  top: 98.5%;
  left: -160%;
  width: 750%;
  border-top: 10px solid #ACACAC;
`
const ElevatorShaft1 = styled.div`
  background-color: #D4D4D4;
  width: 420px;
  height: 100vw;
  left: 185%;
  top: 116px;
  position: absolute;

`
const ElevatorShaft2 = styled.div`
  background-color: #D4D4D4;
  width: 420px;
  height: 100vw;
  left: 572.6%;
  top: 116px;
  position: absolute;
`


const Scene2 = (props) => {
    console.log('loading s2')
    let currentScene = props.currentScene
    let previousScene = props.prevScene
    let blackout

    //reset scrollpositions
    useEffect(() => {
        window.scroll(0, 10)
        resetScrolls()
        blackout = document.querySelector('.blackout');
    })

    //adding and removing event listeners at render and unmount
    useEffect(() => {
        window.addEventListener('scroll', animateSceneTwo)
        window.addEventListener('scroll', changeScene)

        //if coming back, scroll to end of scene
        if (currentScene === 1 && previousScene === 2) {
            window.scroll(0, 38640);
            console.log("scroll to end of page")
        }
        // removing blackout transition screen.
        blackout.style["opacity"] = 0;
        transitionScene()

        return () => {
            window.removeEventListener('scroll', animateSceneTwo);
            window.removeEventListener('scroll', changeScene);
            const play = document.querySelector('.control.play').classList.value
            if (play.includes('active')) { resetPlayCounter() }
        }
    })

    //when to change scene
    let prevScroll = 0
    const changeScene = () => {
        let scrollPos = window.scrollY

        if (currentScene === 1 && scrollPos > 39403 && prevScroll < scrollPos && (prevScroll < 39403 && scrollPos > 39403) || (scrollPos === 39403)) {

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
                    current: 2,
                    previous: 1
                })
            },1000)
        }
        if(currentScene === 1 && scrollPos <= 0 && prevScroll > 0) {

            // Blackout screen for transition of scenes.
            let blackout = document.querySelector('.blackout');
            blackout.style["opacity"] = 1;

            setTimeout(function () {
                props.changeNumber({
                    current: 0,
                    previous: 1
                })
            },1000)
        }

        prevScroll = scrollPos;
        // console.log(prevScroll);
    }

    window.scroll(0, 10);

    return (
        <Scene2Wrapper>
            <FirstFloor className="firstFloor">
                <Floor1 className="floor1"/>
                <Window passClass="window1" />
                <Plant passClass="plant1"/>
                <FakeWall passClass="fakeWall1"/>
                <Doors passClass="door1"/>
                <StoryTellerWalking passClass="storyWalking"/>
                <FakeWall passClass="fakeWall4"/>
                <Doors passClass="door4"/>
                <Plant passClass="plant4"/>
                <Window passClass="window4"/>
            </FirstFloor>
            <ElevatorShaft1 className="elevator1">
                <Elevator/>
            </ElevatorShaft1>
            <SecondFloor className="secondFloor">
                <Floor2 className="floor2"/>
                <FakeWall passClass="fakeWall2"/>
                <Doors passClass="door2"/>
                <Window passClass="window2"/>
                <StoryTellerMeeting passClass="storyMeeting"/>
                {/*<Client passClass="client1"/>*/}
                <GraphWall passClass="graphWall"/>
                <Plant passClass="plant2"/>
                <Plant passClass="plant3"/>
                <FakeWall passClass="fakeWall3"/>
                <Doors passClass="door3"/>
            </SecondFloor>
            <ElevatorShaft2 className="elevator2">
                <Elevator/>
            </ElevatorShaft2>
        </Scene2Wrapper>
    )
};

export default Scene2