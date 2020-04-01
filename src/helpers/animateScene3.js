import { moveElement } from '../helpers/moveElement.js'
import { classTrigger, questionTrigger, attrTrigger, functionTrigger, timeoutToggleClassTrigger } from '../helpers/triggers.js'
import { getEndpoints } from '../helpers/getEndpoints.js'
import { changeSprite } from '../helpers/walking.js'
import { changeDay } from './changeDay.js'
import { returning } from '../components/scene3'
import disableScroll from 'disable-scroll';

let prevScroll = 0
let scrollPos = 0
let endpointScene = 0
let disabledScrollOnChangeDay = false

// coming back from other scene --> scrolls resetten
export const resetScrolls = () => {
  console.log('resetting scene 3')
  scrollPos = 0
  prevScroll = 0
}

export const animateScene3 = (state, dispatch) => {
  let back = returning
  // current position of last element and position when it has entered frame completely
  let points = getEndpoints('.last-office')
  // current scroll position
  let scrollPos = window.scrollY
  let delta = scrollPos - prevScroll;

  //normal animations
  const noFreeze = () => {

    console.log("Returning: ",back)

    changeSprite(prevScroll, scrollPos)
    moveElement("left", 5, delta, ".cloudlayer")
    moveElement("left", 10, delta, ".skylinelayer")
    moveElement("left", 7, delta, ".office")
    moveElement("left", 7, delta, ".last-office")
    moveElement("left", 7, delta, ".questions-layer")
    moveElement("left", 7, delta, ".fario-container")
    moveElement("left", 7, delta, ".ufo-container")
    moveElement("left", 7, delta, ".hole-container")
    moveElement("left", 7, delta, ".steelbeam-container")
    moveElement("left", 7, delta, ".house-container")
    moveElement("left", 7, delta, ".moon-container")
    moveElement("left", 7, delta, ".showpadlogo-container")
    moveElement("left", 7, delta, ".badges-layer")

    //moving hank
    classTrigger(prevScroll, scrollPos, 29700, '.hank-container', 'enter')
    classTrigger(prevScroll, scrollPos, 37500, '.hank-container', 'enter')
    classTrigger(prevScroll, scrollPos, 50500, '.hank-container', 'enter')
    attrTrigger(prevScroll, scrollPos, 54491, '.hank-container', 'z-index', '5')
    classTrigger(prevScroll, scrollPos, 57200, '.hank-container', 'enter')
    classTrigger(prevScroll, scrollPos, 63500, ".hank-container", "enter")

    //badges: come in view, badge joins full, opacity on full to 1
    attrTrigger(prevScroll, scrollPos, 17300, '.prep-sellers', 'opacity', '1')
    attrTrigger(prevScroll, scrollPos, 19300, '.prep-sellers>svg', 'left', '150vw')
    attrTrigger(prevScroll, scrollPos, 19300, '.prep-sellers', 'opacity', '0')
    attrTrigger(prevScroll, scrollPos, 19300, '.prep-full', 'opacity', '1')

    attrTrigger(prevScroll, scrollPos, 31400, '.engage-buyers', 'opacity', '1')
    attrTrigger(prevScroll, scrollPos, 33400, '.engage-buyers>svg', 'left', '150vw')
    attrTrigger(prevScroll, scrollPos, 33400, '.engage-buyers', 'opacity', '0')
    attrTrigger(prevScroll, scrollPos, 33400, '.engage-full', 'opacity', '1')

    attrTrigger(prevScroll, scrollPos, 45400, '.optimize-insights', 'opacity', '1')
    attrTrigger(prevScroll, scrollPos, 47400, '.optimize-insights>svg', 'left', '150vw')
    attrTrigger(prevScroll, scrollPos, 47400, '.optimize-insights', 'opacity', '0')
    attrTrigger(prevScroll, scrollPos, 47400, '.optimize-full', 'opacity', '1')

    //full badge
    classTrigger(prevScroll, scrollPos, 49400, '.platform', 'loading')
    attrTrigger(prevScroll, scrollPos, 49400, '.status-text', 'opacity', '1')

    //background elements
    attrTrigger(prevScroll, scrollPos, 7700, '.fario', 'bottom', '15vh')
    attrTrigger(prevScroll, scrollPos, 29700, '.steelbeam-container', 'bottom', '97.5vh')

    //cow kidnapping
    attrTrigger(prevScroll, scrollPos, 19000, '.ufo', 'bottom', '50vh')
    attrTrigger(prevScroll, scrollPos, 22074, '.light', 'height', '80vh')
    classTrigger(prevScroll, scrollPos, 23700, '.light', 'collect')
    attrTrigger(prevScroll, scrollPos, 25100, '.light', 'top', '-45vh')
    classTrigger(prevScroll, scrollPos, 25100, '.cow', 'kidnapped')
    timeoutToggleClassTrigger(prevScroll, scrollPos, 25100, '.light', 'collect', 100)
    attrTrigger(prevScroll, scrollPos, 27200, '.light', 'height', '0vh')
    attrTrigger(prevScroll, scrollPos, 28200, '.ufo', 'bottom', '90vh')

    //change day and night
    functionTrigger(prevScroll, scrollPos, 54480, changeDay)
    questionTrigger(prevScroll, scrollPos, 54480, '.house-container', 'entered')

    //change badges to showpad
    classTrigger(prevScroll, scrollPos, 54480, '.platform', 'fade-down')

    timeoutToggleClassTrigger(prevScroll, scrollPos, 54480, '.moon-container', 'down', 500)
    timeoutToggleClassTrigger(prevScroll, scrollPos, 54480, '.moon-container', 'down', 3200)
    attrTrigger(prevScroll, scrollPos, 54480, '.status-text', 'opacity', '0')
    classTrigger(prevScroll, scrollPos, 54480, '.showpadlogo-container', 'spinning')
    timeoutToggleClassTrigger(prevScroll, scrollPos, 54480, '.showpadlogo-container', 'show', 3000)
    timeoutToggleClassTrigger(prevScroll, scrollPos, 54480, '.showpadlogo-container', 'jumping', 6000)
    timeoutToggleClassTrigger(prevScroll, scrollPos, 54480, '.showpadlogo-container', 'spinning', 6000)

    //change outfits
    classTrigger(prevScroll, scrollPos, 58105, '.showpadlogo-container', 'show')
    classTrigger(prevScroll, scrollPos, 58105, '.sprites', 'outfit2')

    //questions
    questionTrigger(prevScroll, scrollPos, 6600, ".q-container.first", "up")
    questionTrigger(prevScroll, scrollPos, 10200, ".q-container.second", "up")
    questionTrigger(prevScroll, scrollPos, 13700, ".q-container.third", "up")
    questionTrigger(prevScroll, scrollPos, 17200, ".q-container.fourth", "up")

    questionTrigger(prevScroll, scrollPos, 20700, ".q-container.fifth", "up")
    questionTrigger(prevScroll, scrollPos, 24200, ".q-container.sixth", "up")
    questionTrigger(prevScroll, scrollPos, 27700, ".q-container.seventh", "up")
    questionTrigger(prevScroll, scrollPos, 31300, ".q-container.eighth", "up")

    questionTrigger(prevScroll, scrollPos, 34900, ".q-container.ninth", "up")
    questionTrigger(prevScroll, scrollPos, 38400, ".q-container.tenth", "up")
    questionTrigger(prevScroll, scrollPos, 42000, ".q-container.eleventh", "up")
    questionTrigger(prevScroll, scrollPos, 45300, ".q-container.twelfth", "up")


    //open doors
    attrTrigger(prevScroll, scrollPos, 65500, ".last-office svg:nth-child(3)", "left", "calc(50% - 265px)")
    attrTrigger(prevScroll, scrollPos, 65500, ".last-office svg:nth-child(4)", "left", "calc(50% + 95px)")
    //enter building
    attrTrigger(prevScroll, scrollPos, 66000, ".last-office svg:nth-child(4)", "z-index", "2")
    attrTrigger(prevScroll, scrollPos, 66000, ".sidewalk", "z-index", "3")
    attrTrigger(prevScroll, scrollPos, 66000, ".hank-container", "z-index", "1")
    attrTrigger(prevScroll, scrollPos, 67800, ".hank-container", "z-index", "-1")
    //close doors
    attrTrigger(prevScroll, scrollPos, 67950, ".last-office svg:nth-child(3)", "left", "calc(50% - 170px)")
    attrTrigger(prevScroll, scrollPos, 67950, ".last-office svg:nth-child(4)", "left", "50%")
  }


  //check for freeze
  const questions = document.querySelectorAll('.q-container')
  let activated = false

  //check for activated question
  for (let i = 0; i < questions.length; i++) {
    const classes = questions[i].classList.value
    if (classes.includes('up')){
      activated = true;
      console.log("includes up")
      // dispatch({type: true})
    }
  }

  //change day and night
  const stay = () => {
    let hank = document.querySelector('.hank-container');
    hank.style.zIndex = -5
  }

  const house = document.querySelector('.house-container');
  let change = false
  const houseClasses = house.classList.value
  if (houseClasses.includes('entered')) {
    change = true
  }

  //determine which animations to run, pause autoplay
  if (activated === true) {
    //if a question gets triggered
    console.log("acitvated")

    // Error here.
    // dispatch({type: true})

    // console.log("activated: ", state)
    disableScroll.on()

  } else if (change === true && back !== true) {

    // if hank enters house
    stay()
    disableScroll.on();
    disabledScrollOnChangeDay = true;

    setTimeout(function () {
      disableScroll.off();
      disabledScrollOnChangeDay = false;
    },5000)

  } else {
    if (points.leftValue > points.endLeft) {
      let hank = document.querySelector('.hank-container')
      if(hank.hasAttribute('style')) {
        hank.removeAttribute('style')
      }
      noFreeze()
    }
  }
  // if (points.leftValue <= points.endLeft) {
    if (endpointScene === 0) {
      endpointScene = scrollPos
    }
    if (scrollPos <= endpointScene && delta < 0) {
      noFreeze()
    }
  // }

  //updating prev scroll to current scroll position.
  prevScroll = scrollPos
  // console.log('prevScroll', prevScroll)
}
