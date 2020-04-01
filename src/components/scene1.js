import React, {useEffect} from 'react'
import styled from 'styled-components'
import BackgroundLayer from './scene-1/BackgroundLayer'
import Storyteller from './scene-1/Storyteller'
import { resetScrolls, animateScene1 } from '../helpers/animateScene1.js'
import { resetPlayCounter } from './controls'
import { transitionScene } from '../helpers/triggers';
import { start } from '../helpers/triggers'

const SceneContainer = styled.div`
  position: absolute;
`

function Scene1(props) {
  console.log('loading s1')
  let currentScene = props.currentScene
  let previousScene = props.prevScene
  let blackout

  //reset scrollpositions
  useEffect(() => {
    window.scroll(0, 0)
    resetScrolls()
    blackout = document.querySelector('.blackout');
  })

  //preparing scene
    useEffect(() => {
    start();
    window.addEventListener('scroll', animateScene1)
    window.addEventListener('scroll', changeScene)

    //if coming back, scroll to end of scene
    if (currentScene === 0 && previousScene === 1) {
      window.scroll(0, 44000)
    }
    //scenetransitionn
    blackout.style["opacity"] = 0
    transitionScene()

    return () => {
      window.removeEventListener('scroll', animateScene1)
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
    if (currentScene === 0 && scrollPos >= 49500 && prevScroll < scrollPos) {
      // Blackout screen for transition of scenes.
      blackout.style["opacity"] = 1;
      transitionScene()

      setTimeout( function () {
        //remove extra styling on Hank and others, when going to next scene
        let hank = document.querySelector('.hank-container')
        hank.classList.remove('enter')
        hank.removeAttribute('style')
        hank.removeAttribute('oldValue')
        let meter = document.querySelector('.meter')
        meter.removeAttribute('style')
        meter.removeAttribute('oldValue')
        let star = document.querySelector('.star')
        star.removeAttribute('style')
        star.removeAttribute('oldValue')

        props.changeNumber({
          current: 1,
          previous: 0,
        })
      },1000)
    }
    prevScroll = scrollPos
  }
  
  return (
    <SceneContainer>
      <BackgroundLayer/>
      <Storyteller/>
    </SceneContainer>
  );
}

export default Scene1;