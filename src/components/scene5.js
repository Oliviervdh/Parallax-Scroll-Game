import React, {useEffect, useContext} from 'react'
import styled from 'styled-components'
import { resetScrolls, animateScene5 } from '../helpers/animateScene5.js'
import BackgroundLayer from './scene-5/BackgroundLayer'
import { resetPlayCounter } from './controls'
import {transitionScene} from "../helpers/triggers";
import {QuestionContext} from "./QuestionsContext";

const SceneContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`

function Scene5 (props) {

    console.log('loading s5')
   let currentScene = props.currentScene
   let blackout

   //reset scrollpositions
   useEffect(() => {
    window.scroll(0, 10)
     resetScrolls()
     blackout = document.querySelector('.blackout');
   })

   //preparing scene
   useEffect(() => {
     window.addEventListener('scroll', animateScene5)
     window.addEventListener('scroll', changeScene)

     // removing blackout transition screen.
     blackout.style["opacity"] = 0;
     blackout.style.zIndex = 0;
     transitionScene()

     return () => {
       window.removeEventListener('scroll', animateScene5)
       window.removeEventListener('scroll', changeScene)
       const play = document.querySelector('.control.play').classList.value
       if (play.includes('active')) { resetPlayCounter() }
     }
   })

   //when to change scenes
   let prevScroll = 0
   const changeScene = () => {
    let scrollPos = window.scrollY
     if(currentScene === 4 && scrollPos <= 0 && prevScroll > 0) {

       // Blackout screen for transition of scenes.
       blackout.style["opacity"] = 1;
       transitionScene()

       setTimeout(function () {
         props.changeNumber({
           current: 3,
           previous: 4

         })
           window.scroll(0, 20845);
       },1000)
     }
     prevScroll = scrollPos
   }

   window.scroll(0, 10)

  return (
    <SceneContainer>
      <BackgroundLayer />
    </SceneContainer>
  );
}

export default Scene5;