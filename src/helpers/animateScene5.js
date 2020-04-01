import { moveElement } from '../helpers/moveElement.js'
import { changeSprite } from '../helpers/walking.js'

let prevScroll = 0
let scrollPos = 0

// coming back from other scene --> scrolls resetten
export const resetScrolls = () => {
  console.log('resetting')
  scrollPos = 0
  prevScroll = 0
}

export const animateScene5 = () => {
  // current scroll position and delta
 scrollPos = window.scrollY
  let delta = scrollPos - prevScroll
  changeSprite(prevScroll, scrollPos)
  
  moveElement("left", 7, delta, ".office")
  moveElement("left", 9, delta, ".story-layer")
  moveElement("left", 7, delta, ".fireworks-container")

  //updating prev scroll to current scroll position.
  prevScroll = scrollPos
}