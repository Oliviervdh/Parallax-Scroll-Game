import React, { useContext } from 'react'
import styled from 'styled-components'
import { ReactComponent as PlaySVG } from '../assets/controls/play.svg'
import { ReactComponent as PauseSVG } from '../assets/controls/pause.svg'
import { checkDisabledScroll, checkAutoPause } from '../helpers/triggers'
import { checkDisabledScrollOnClickS2 } from '../helpers/animateScene2'
import { checkDisabledScrollOnClickS4 } from '../helpers/animateScene4'
import disableScroll from 'disable-scroll';
import {QuestionContext} from "./QuestionsContext";


const ControlsContainer = styled.div`
  position: absolute;
  bottom: 5vh;
  left: 5vw;
  width: 10vw;
  height: 8vh;
  z-index: 100;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
   border-radius: 25px;
  ${'' /* border: 1px solid #2D2E83; */}
  
  .btnText{
  width: 200px;
  height: 200px; 
  }
  
  .btn{
    width: 200px;
  height: 200px; 
  }
`
const PlayButton = styled.div`
  width: 2.5vw;
  height: 2.5vw;
  border-radius: 50%;
  border: 1px solid #2D2E83;
  display: grid;
  justify-items: center;
  align-items: center;
  opacity: 0.3;
  transition: opacity 1s ease;
  svg {
    width: 50%;
    fill: #2D2E83;
  }
  &:hover {
    opacity: 1; 
  }
  &.active {
    background: #2D2E83;
    svg{
      fill: white;
    }
  }
`
const PauseButton = styled(PlayButton)``

//handleclick: autoplay starten of stoppen
let count = 0
let autoplay
let disabledScroll = false;
let disabledScrollOnClickS2 = false;
let disabledScrollOnClickS4 = false;
let autoPause = false;
let played = false;
let pause = false


const handleClick = (button, state, dispatch) => {
  count = window.scrollY;
  const controls = document.querySelectorAll('.control');

    //update active class
    // controls.forEach(el => {
    //   const classes = el.classList.value;
    //   if (classes.includes('active')){
    //     el.classList.remove('active');
    //   }
    //   if (classes.includes(button)) {
    //     el.classList.add('active');
    //   }
    // });


    if(button === "play" && state.gotActivated === "false" && pause === false && played === false){

        autoplay = setInterval(() => {
                // check als disableScroll al dan niet aanligt.
                disabledScroll = checkDisabledScroll();
                disabledScrollOnClickS2 = checkDisabledScrollOnClickS2();
                disabledScrollOnClickS4 = checkDisabledScrollOnClickS4();
                autoPause = checkAutoPause();

                //freeze if container has freeze class
                let classes = document.querySelector('.controls-container').classList.value;
                if (disabledScroll === false && disabledScrollOnClickS2 === false && disabledScrollOnClickS4 === false && autoPause === false) {
                    count += 10
                    played = true
                    disableScroll.on();
                }
                window.scroll(0, count)
        },1)
    }else if(button === "pause" || state.gotActivated === "true" ){
        dispatch({type: false})

        pause = true;
        disableScroll.off();
        clearInterval(autoplay);
        setInterval(function () {
            pause = false;
            played = false;
        }, 500)
    }

  // only if question is not triggered
  //   autoplay = setInterval(() => {
  //     if (button === 'play') {
  //       // console.log("play: ", state.gotClicked)
  //       // if(state.gotClicked === true){
  //
  //         // For loop speeds up the max speed of the interval.
  //         // for (var i = 0; i < 45; i++) {
  //
  //           // check als disableScroll al dan niet aanligt.
  //           disabledScroll = checkDisabledScroll();
  //           disabledScrollOnClickS2 = checkDisabledScrollOnClickS2();
  //           disabledScrollOnClickS4 = checkDisabledScrollOnClickS4();
  //           autoPause = checkAutoPause();
  //
  //           //freeze if container has freeze class
  //           let classes = document.querySelector('.controls-container').classList.value;
  //           if (disabledScroll === false && disabledScrollOnClickS2 === false && disabledScrollOnClickS4 === false && autoPause === false) {
  //             count += 10
  //             disableScroll.on();
  //           }
  //           window.scroll(0, count)
  //         // }
  //       } else {
  //         clearInterval(autoplay);
  //         disableScroll.off();
  //
  //         // console.log("stopped running: ", state.gotClicked)
  //       }
  //
  //       // }
  //   }, 1)

}

const Controls = () => {

  const { state, dispatch } = useContext(QuestionContext);

  return (
      <ControlsContainer className="controls-container">
        <PlayButton className="control play" onClick={() => handleClick('play', state, dispatch)}>
          <PlaySVG/>
        </PlayButton>

          <PauseButton className="control pause" onClick={() => handleClick('pause', state, dispatch)}>
          <PauseSVG/>
        </PauseButton>
      </ControlsContainer>
  )
}


export default Controls
export const resetPlayCounter = () => {
  clearInterval(autoplay)
  count = 0
  document.querySelector('.control.play').classList.remove('active')
   setTimeout(() => {
     handleClick("play")
   }, 1000)
}
