import React, {useEffect, useContext} from 'react'

import styled from 'styled-components'
import BackgroundLayer from './scene-3/BackgroundLayer'
import Questions from './scene-3/Questions'
import { resetScrolls, animateScene3 } from '../helpers/animateScene3.js'
import { resetPlayCounter } from './controls'
import {transitionScene} from "../helpers/triggers";
import {QuestionContext} from "./QuestionsContext";

const SceneContainer = styled.div`
  position: absolute;
`

export let returning = false

function Scene3(props) {

  const { state, dispatch } = useContext(QuestionContext);

  // console.log('loading s3')
  let currentScene = props.currentScene
  let previousScene = props.prevScene
  let blackout
  
  //reset scrollpositions
  useEffect(() => {
    window.scroll(0, 10)
    resetScrolls()
    blackout = document.querySelector('.blackout');
  })
  
  //preparing scene
  useEffect(() => {
    console.log('add event listener');

    // Error here
    // window.addEventListener('scroll', () =>{
    //   animateScene3(state, dispatch)
    // })

    window.addEventListener('scroll', animateScene3);
    window.addEventListener('scroll', changeScene);
    
    //if coming back, scroll to end of scene
    if (currentScene === 2 && previousScene === 3) {
      returning = true
      window.scroll(0, 65300)
      console.log("scroll to end of page: " + window.scrollY)

      //remove extra styling on Hank from previous scene.
      let hank = document.querySelector('.hank-container');
      hank.removeAttribute('oldValue');
      hank.removeAttribute('style');
      hank.classList.remove('hankInElevator');
      hank.classList.remove('hankThroughDoor');
      let sprites = document.querySelector('.sprites');
      sprites.classList.remove('outfit2')
    }
    //scenetransition
    blackout.style["opacity"] = 0;
    transitionScene()
    return () => {
      window.removeEventListener('scroll', animateScene3)
      window.removeEventListener('scroll', changeScene)
      const play = document.querySelector('.control.play').classList.value
      if (play.includes('active')) { resetPlayCounter() }
    }
  })

  //when to change scenes
  let prevScroll = 0
  const changeScene = () => {
    let scrollPos = window.scrollY
    //go to next scene
    if (currentScene === 2 && scrollPos >= 70000 && prevScroll < scrollPos){
      //scenetransition
      blackout.style["opacity"] = 1;
      transitionScene()
      setTimeout(function () {
        // remove extra styling on Hank
        let hank = document.querySelector('.hank-container')
        hank.classList.remove('enter')
        hank.removeAttribute('oldValue')
        hank.removeAttribute('style')

        props.changeNumber({
          current: 3,
          previous: 2
        })
      },1000)

    }
    //go to previous scene
    if(currentScene === 2 && scrollPos <= 0 && prevScroll > 0) {
      //scenetransition
      blackout.style["opacity"] = 1;
      transitionScene()

      setTimeout(function () {
        props.changeNumber({
          current: 1,
          previous: 2
        })
      },1000)
    }
    //update prevscroll
    prevScroll = scrollPos;
  }

  window.scroll(0, 10);

  return (

    <SceneContainer>
      <BackgroundLayer/>
      <Questions/>
    </SceneContainer>
  );
}

export default Scene3;