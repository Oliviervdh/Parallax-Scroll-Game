import React from 'react'
import disableScroll from 'disable-scroll';
import { returning } from '../components/scene3'

let disabledScroll = false;
let autoPause = false;

export const start = () => {
    let start = document.querySelector(".start");

    setInterval(function () {
        start.classList.add("BlinkingText")
    },500)
}

export const classTrigger = (previousPos, scrollPos, triggerPos, selector, classname) => {
    if ((previousPos < triggerPos && scrollPos > triggerPos) || (previousPos > triggerPos && scrollPos < triggerPos) || scrollPos === triggerPos) {
        if(returning === false || returning === undefined) {
            let el = document.querySelector(`${selector}`)
            el.classList.toggle(`${classname}`)
        }
    }
};

let questionsArray = {}

export const questionTrigger = (previousPos, scrollPos, triggerPos, selector, classname) => {

    let uid = selector.toString() + classname.toString()

    if (uid in questionsArray === false) questionsArray[uid] = false;

    if (questionsArray[uid] === false) {
        if (returning === false || returning === undefined) {
            if ((previousPos < triggerPos && scrollPos > triggerPos) || scrollPos === triggerPos) {
                let el = document.querySelector(`${selector}`)
                el.classList.add(`${classname}`)
                questionsArray[uid] = true;
            }
        }
    }
};

export const functionTrigger = (previousPos, scrollPos, triggerPos, functionToRun) => {
    if(returning === false || returning === undefined) {
        if (previousPos < triggerPos && scrollPos > triggerPos) {
            functionToRun()
        }
    }
}

export const attrTrigger = (previousPos, scrollPos, triggerPos, selector, attribute, newValue) => {
    let el = document.querySelector(`${selector}`)

    if(returning === false || returning === undefined) {
        if (previousPos < triggerPos && (scrollPos > triggerPos || scrollPos === triggerPos)) {
            //gaat over trigger: slaat vorige waarde op in attr oldValue
            let oldValue = window.getComputedStyle(el)[attribute]
            el.setAttribute("oldValue", oldValue)
            el.style[attribute] = newValue

            console.log("gaat over trigger")
        }
    }

    if (previousPos > triggerPos && (scrollPos < triggerPos || scrollPos === triggerPos)) {
        //keert terug over trigger: keert terug naar oude waarde en verwijdert oldValue attr
        let oldValue = el.getAttribute("oldValue");
        el.removeAttribute("oldValue");
        el.style[attribute] = oldValue

        console.log("keert terug")
    }
};

export const checkDisabledScroll = () => {

    if(disabledScroll === true ){
        return true
    }else{
        return false
    }
};


let pauseScrollArray = {}

export const pauseScroll = (previousPos, scrollPos, triggerPos, timeout, direction, uid, resetBefore, resetOver) => {

    if (uid in pauseScrollArray === false) pauseScrollArray[uid] = false;
    if ((previousPos > resetBefore && scrollPos < resetBefore) || scrollPos === resetBefore || (previousPos > resetOver && scrollPos < resetOver) || scrollPos === resetOver) {
        pauseScrollArray[uid] = false
    }

    switch (direction) {
        case "leftToRight":
            if (pauseScrollArray[uid] === false) {
                if ((previousPos < triggerPos && scrollPos > triggerPos) || scrollPos === triggerPos) {

                    disableScroll.on();
                    disabledScroll = true;
                    pauseScrollArray[uid] = true;

                    setTimeout(function () {
                        disableScroll.off();
                        disabledScroll = false;

                    }, timeout)
                }
            }
            break;

        case "rightToLeft":
            if (pauseScrollArray[uid] === false) {
                if ((previousPos > triggerPos && scrollPos < triggerPos) || scrollPos === triggerPos) {

                    disableScroll.on();
                    disabledScroll = true;
                    pauseScrollArray[uid] = true;

                    setTimeout(function () {
                        disableScroll.off();
                        disabledScroll = false;

                    }, timeout)
                }
                break;
            }
    }

    if (direction === undefined) {
        if ((previousPos < triggerPos && scrollPos > triggerPos) || (previousPos > triggerPos && scrollPos < triggerPos) || scrollPos === triggerPos) {

            disableScroll.on();
            disabledScroll = true;

            setTimeout(function () {

                disableScroll.off();
                disabledScroll = false;

            }, timeout)
        }
    }
};

export const checkAutoPause = () => {

    if(autoPause === true ){
        return true
    }else{
        return false
    }
};


export const autoPauseTrigger = (previousPos, scrollPos, triggerPos, timeout) => {
    if ((previousPos < triggerPos && scrollPos > triggerPos) || (previousPos > triggerPos && scrollPos < triggerPos) || scrollPos === triggerPos) {

        autoPause = true

        setTimeout(function(){
            autoPause = false
        },timeout)
    }
}


export const clickForAttrTrigger = (sel, attribute, nVal, timeout) => {
    let el = document.querySelector(`${sel}`);
    let oVal = window.getComputedStyle(el)[attribute];

    setTimeout(function () {
        el.setAttribute("oldValue", oVal);
        el.style[attribute] = nVal
    }, timeout)
}

export const clickForClassTrigger = (sel, classname, timeout) => {
    let el = document.querySelector(`${sel}`);

    setTimeout(function () {
        el.classList.toggle(`${classname}`)
    }, timeout);
};

export const clickToRemoveClassTrigger = (sel, classname, timeout) => {
    let el = document.querySelector(`${sel}`);

    setTimeout(function () {
        el.classList.remove(`${classname}`)
    }, timeout)
}

export const timeoutToggleClassTrigger = (previousPos, scrollPos, triggerPos, selector, classname, timeout) => {
    let el = document.querySelector(`${selector}`);

    if ((previousPos < triggerPos && scrollPos > triggerPos) || (previousPos > triggerPos && scrollPos < triggerPos) || scrollPos === triggerPos) {

        setTimeout(function () {
            el.classList.toggle(`${classname}`)
        }, timeout);
    }
};


export const removeClassTrigger = (previousPos, scrollPos, triggerPos, selector, classname, direction) => {
    let el = document.querySelector(`${selector}`)

    switch (direction) {
        case "leftToRight":
            if ((previousPos < triggerPos && scrollPos > triggerPos) || scrollPos === triggerPos) {
                el.classList.remove(`${classname}`)
            }
            break;
        case "rightToLeft":
            if ((previousPos > triggerPos && scrollPos < triggerPos) || scrollPos === triggerPos) {
                el.classList.remove(`${classname}`)
            }
            break;
    }
    if (direction === undefined) {
        if ((previousPos < triggerPos && scrollPos > triggerPos) || (previousPos > triggerPos && scrollPos < triggerPos) || scrollPos === triggerPos) {
            el.classList.remove(`${classname}`)
        }
    }
};

export const resetAttrTrigger = (previousPos, scrollPos, triggerPos, sel, attribute, nVal, direction) => {
    let el = document.querySelector(`${sel}`);
    let oVal = window.getComputedStyle(el)[attribute];

    switch (direction) {
        case "leftToRight":
            if ((previousPos < triggerPos && scrollPos > triggerPos) || scrollPos === triggerPos) {
                el.setAttribute("oldValue", oVal);
                el.style[attribute] = nVal            }
            break;
        case "rightToLeft":
            if ((previousPos > triggerPos && scrollPos < triggerPos) || scrollPos === triggerPos) {
                el.setAttribute("oldValue", oVal);
                el.style[attribute] = nVal            }
            break;
    }
    if (direction === undefined) {
        if ((previousPos < triggerPos && scrollPos > triggerPos) || (previousPos > triggerPos && scrollPos < triggerPos) || scrollPos === triggerPos) {
            el.setAttribute("oldValue", oVal);
            el.style[attribute] = nVal        }
    }
}


let resetToggleArray = {}

export const resetToggleClassTrigger = (previousPos, scrollPos, triggerPos, selector, classname, resetBefore, resetOver) => {
    let el = document.querySelector(`${selector}`);
    let uid = selector.toString() + classname.toString()

    if (uid in resetToggleArray === false) resetToggleArray[uid] = false;

    if ((previousPos > resetBefore && scrollPos < resetBefore) || scrollPos === resetBefore || (previousPos < resetOver && scrollPos > resetOver) || scrollPos === resetOver) {
        // reset.
        resetToggleArray[uid] = false
    }

    if (resetToggleArray[uid] === false) {

        if ((previousPos < triggerPos && scrollPos > triggerPos) || (previousPos > triggerPos && scrollPos < triggerPos) || scrollPos === triggerPos) {
            resetToggleArray[uid] = true;
            el.classList.toggle(`${classname}`)
        }
    }
}

let timeoutResetToggleArray = {}

export const timeoutResetToggleClassTrigger = (previousPos, scrollPos, triggerPos, selector, classname, timeout, resetBefore, resetOver) => {
    let el = document.querySelector(`${selector}`);
    let uid = selector.toString() + classname.toString()

    if (uid in timeoutResetToggleArray === false) timeoutResetToggleArray[uid] = false;

    if ((previousPos > resetBefore && scrollPos < resetBefore) || scrollPos === resetBefore || (previousPos > resetOver && scrollPos < resetOver) || scrollPos === resetOver) {
        // reset.
        timeoutResetToggleArray[uid] = false
    }

    setTimeout(function () {
        if (timeoutResetToggleArray[uid] === false) {
            if ((previousPos < triggerPos && scrollPos > triggerPos) || (previousPos > triggerPos && scrollPos < triggerPos) || scrollPos === triggerPos) {

                timeoutResetToggleArray[uid] = true;
                el.classList.toggle(`${classname}`)
            }
        }
    }, timeout)
}


export const toggleItems = ( selectorOne, classNameOne, selectorTwo, classNameTwo) => {

    let firstItem = document.querySelector(`${selectorOne}`);
    window.toggleApple = setInterval(setApple, 1000);

    function setApple() {
        firstItem.classList.toggle(`${classNameOne}`)
    }

    let secondItem = document.querySelector(`${selectorTwo}`);
    window.toggeQuestionMark = setInterval(setQuestionMark, 1000);

    function setQuestionMark() {
        setTimeout( function () {
            secondItem.classList.toggle(`${classNameTwo}`)
        },1000)
    }
}


export const resetStory = (previousPos, triggerPos) => {

    if (previousPos > (triggerPos - 5000) && previousPos < (triggerPos + 5000)) {
        return false
    } else {
        return true
    }
}

export const transitionScene = () => {
    disableScroll.on()

    setTimeout(function () {
        disableScroll.off()
    },800)
}






















