import React, {useEffect} from 'react'
import styled from 'styled-components'
import sprites from '../assets/sprite-sheet-case.png'
import sprites2 from '../assets/sprite-sheet-showpad.png'
import BeMeter from './beMeter.js'
import ConversationHank from "./scene-2&4/ConversationHankComponent";

//counter for number of attribute changes
let counter = 0

const HankSprites = styled.div`
  width: 1640px;
  height: 930px;
  background-image: url(${sprites});
  position: absolute;
  top: 0px;
  left: 0px;
  transition: background-image 1s ease-in;

  &.outfit2 {
    background-image: url(${sprites2})
  }
`

const HankContainer = styled.div`
  position: absolute;
  left: 50%;
  bottom: 5%; 
  transition: bottom 0.3s linear;
  z-index: 5;

  &.enter {
    bottom: 14.5%;
  }
  &.hankLeft{
  position: absolute;
  left: 15%;
  }
    
  &.hankWrapperUp {
  position: absolute;
  left: 22%;
  }
  &.hankThroughDoor {
  transition: 1s;
  bottom: 17%;
  z-index: 3;
  }
  &.hankInElevator {
  transition: 1s;
  bottom: 16%;
  z-index: 3
  } 
  &.hankDown{
  bottom: 5%;
  z-index: 5;
  }
`

const OneHank = styled.div`
  position: relative;
  transition: 5s;
  left: -50%;
  overflow: hidden;
  width: 205px;
  height: 310px;
 `
//standing still sprite
const standingSprite = () => {
    let element = document.querySelector('.sprites')
    //check dir
    const top = window.getComputedStyle(element).top
    const left = window.getComputedStyle(element).left
    element.style.top = '0px'
    switch (top) {
        case "-620px":

            //look left
            element.style.left = '-205px'
            break;
        case "-310px":
            //look right
            element.style.left = '0px'
            break;
        case "0px":
            //idle
            left === "-205px" ? element.style.left = '-205px' : element.style.left = '0px'
            break;
    }
}

//listen for attribute changes and update counter if it happens
const listenToAttributes = () => {
    let element = document.querySelector('.sprites')
    let observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === "attributes") {
                counter++
            }
        })
    })
    observer.observe(element, {
        attributes: true
    })
}

const Hank = () => {
    useEffect(() => {
        listenToAttributes()
        let previousValue = 0
        const checkMovement = setInterval(() => {
            let currentValue = counter
            if(currentValue === previousValue){
                standingSprite()
            }
            previousValue = currentValue
        }, 1000);
        return () => {
            clearInterval(checkMovement)
        }
    })

    return (
        <>
            <HankContainer className="hank-container">
                <BeMeter/>
                <OneHank className="hank" >
                    <HankSprites className="sprites"></HankSprites>
                </OneHank>
                <ConversationHank />
            </HankContainer>
        </>
    )
}

export default Hank