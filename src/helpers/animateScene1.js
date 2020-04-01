import { moveElement } from '../helpers/moveElement.js'
import { classTrigger, attrTrigger, pauseStart } from '../helpers/triggers.js'
import { getEndpoints } from '../helpers/getEndpoints.js'
import { changeSprite } from '../helpers/walking.js'
import {removeClassTrigger} from "../helpers/triggers";



let prevScroll = 0
let scrollPos = 0
let endpointScene = 0

// coming back from other scene --> scrolls resetten
export const resetScrolls = () => {
  console.log('resetting')
  scrollPos = 0
  prevScroll = 0
}



export const animateScene1 = () => {
  // current position of last element and position when it has entered frame completely 
  let points = getEndpoints('.office')
  // current scroll position
  scrollPos = window.scrollY
  // console.log('scrollPos', scrollPos)
  let delta = scrollPos - prevScroll;

  changeSprite(prevScroll, scrollPos)

    const beforeFreeze = () => {
    // layers scene 1
    moveElement("left", 5, delta, ".cloudlayer")
    moveElement("left", 10, delta, ".skylinelayer")
    moveElement("left", 7, delta, ".storylayer")
    moveElement("left", 8, delta, ".bench")
    moveElement("left", 7, delta, ".office")
  
    //triggers scene 1
    classTrigger(prevScroll, scrollPos, 200, ".start", "visible")
    classTrigger(prevScroll, scrollPos, 13200, ".excel", "up")
    classTrigger(prevScroll, scrollPos, 18100, ".drive", "up")
    attrTrigger(prevScroll, scrollPos, 28100, ".meter", "opacity", 1)
    attrTrigger(prevScroll, scrollPos, 35100, ".filler>rect", "width", 4100)
    attrTrigger(prevScroll, scrollPos, 35100, ".star", "left", "70%")
    attrTrigger(prevScroll, scrollPos, 42000, ".meter", "opacity", 0)
  }

  const afterFreeze = () => {
    moveElement("right", 5, delta, ".hank-container")
    //hank up
    classTrigger(prevScroll, scrollPos, 46500, ".hank-container", "enter")
    //open doors
    attrTrigger(prevScroll, scrollPos, 47000, ".office svg:nth-child(3)", "left", "calc(50% - 265px)")
    attrTrigger(prevScroll, scrollPos, 47000, ".office svg:nth-child(4)", "left", "calc(50% + 95px)")
    //enter building
    attrTrigger(prevScroll, scrollPos, 47500, ".office svg:nth-child(4)", "z-index", "2")
    attrTrigger(prevScroll, scrollPos, 47500, ".hank-container", "z-index", "1")
    attrTrigger(prevScroll, scrollPos, 48400, ".hank-container", "z-index", "-1")
    //close doors
    attrTrigger(prevScroll, scrollPos, 48650, ".office svg:nth-child(3)", "left", "calc(50% - 170px)")
    attrTrigger(prevScroll, scrollPos, 48650, ".office svg:nth-child(4)", "left", "50%")
  }

  if (points.leftValue > points.endLeft) {
    beforeFreeze()
  } else if (points.leftValue <= points.endLeft) {
    afterFreeze()
    if (endpointScene === 0) {
      endpointScene = scrollPos
    }
    if (scrollPos <= endpointScene && delta < 0) {
      beforeFreeze()
    }
  }

  //updating prev scroll to current scroll position.
  prevScroll = scrollPos
  // console.log('prevScroll', prevScroll)
}