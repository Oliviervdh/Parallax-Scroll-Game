import { changeSprite } from '../helpers/walking.js'
import {moveElement} from "./moveElement";
import disableScroll from 'disable-scroll';
import {
    classTrigger,
    pauseScroll,
    clickForClassTrigger,
    clickForAttrTrigger,
    clickToRemoveClassTrigger,
    removeClassTrigger,
    resetToggleClassTrigger,
    resetStory,
    resetAttrTrigger,
    timeoutResetToggleClassTrigger,
    toggleItems,
    autoPauseTrigger
} from "./triggers";
import {getEndpoints} from "./getEndpoints";

let prevScroll = 0
let scrollPos = 0
let currentStory = 0;
let disabledScrollOnClick = false;

// coming back from other scene --> scrolls resetten
export const resetScrolls = () => {
    console.log('resetting scene 4')
    scrollPos = 0
    prevScroll = 0
}

export const animateSceneFour = () => {
    // current position of last element and position when it has entered frame completely
    let pointsScene2 = getEndpoints('.plant3');
    // current scroll position
    let scrollPos = window.scrollY
    let delta = scrollPos - prevScroll;

    changeSprite(prevScroll, scrollPos);

    const animationsScene4 = () => {

        // Move elements.
        moveElement("left", 5, delta, ".fakeWall1");
        moveElement("left", 5, delta, ".door1");
        moveElement("left", 5, delta, ".window1");
        moveElement("left", 5, delta, ".window2");
        moveElement("left", 5, delta, ".graphWall");
        moveElement("left", 5, delta, ".client1");
        moveElement("left", 5, delta, ".plant2");
        moveElement("left", 5, delta, ".storyWalking");
        moveElement("left", 5, delta, ".storyMeeting");
        moveElement("left", 5, delta, ".plant3");



        // storyWs4alking
        autoPauseTrigger(prevScroll, scrollPos, 2750, 4500);
        resetToggleClassTrigger(prevScroll, scrollPos, 600, ".screenWalking", "screenWalkingToggle",0, 21000);
        resetToggleClassTrigger(prevScroll, scrollPos, 600, ".story1s4", "story1s4In",0, 21000);
        timeoutResetToggleClassTrigger(prevScroll, scrollPos, 600, ".story1s4", "story1s4Out",2500,21000);
        timeoutResetToggleClassTrigger(prevScroll, scrollPos, 600, ".story2s4", "story2s4Toggle",2500, 21000);
        timeoutResetToggleClassTrigger(prevScroll, scrollPos, 600, ".lightBulb", "lightBulbToggle",3000, 21000);
        timeoutResetToggleClassTrigger(prevScroll, scrollPos, 600, ".story2s4", "story2s4Toggle",4500, 21000);
        timeoutResetToggleClassTrigger(prevScroll, scrollPos, 600, ".story3s4", "story3s4Toggle",4500, 21000);
        timeoutResetToggleClassTrigger(prevScroll, scrollPos, 600, ".heartMap", "heartMapToggle",5000, 21000);


        classTrigger(prevScroll, scrollPos, 600, ".clientTwo", "clientVisible");


        // meeting client.
        // Removing all classes from Meeting conversation client.
        removeClassTrigger(prevScroll, scrollPos, 300, ".clientTwo", "clientVisible", "rightToLeft")
        removeClassTrigger(prevScroll, scrollPos, 300, ".clientTwo", "clientIn", "rightToLeft");
        removeClassTrigger(prevScroll, scrollPos, 300, ".clientTwo", "clientWalks", "rightToLeft");
        removeClassTrigger(prevScroll, scrollPos, 300, ".clientTwo", "clientWalks","rightToLeft");
        removeClassTrigger(prevScroll, scrollPos, 300, ".clientTwo", "clientStanding", "rightToLeft");
        removeClassTrigger(prevScroll, scrollPos, 300, ".screenMeeting", "screenMeetingToggle", "rightToLeft");
        removeClassTrigger(prevScroll, scrollPos, 300, ".story333", "story333Toggle", "rightToLeft");
        removeClassTrigger(prevScroll, scrollPos, 300, ".nextBtnS4", "nextBtnS4Toggle", "rightToLeft");
        removeClassTrigger( prevScroll, scrollPos, 300,".story4s4", "story4s4Toggle", "rightToLeft");
        removeClassTrigger( prevScroll, scrollPos, 300,".questionMarkClient","questionMarkClientToggle","rightToLeft" );
        removeClassTrigger( prevScroll, scrollPos, 300,".balloonClientConversation", "balloonClientToggle", "rightToLeft");
        removeClassTrigger( prevScroll, scrollPos, 300,".apple", "appleToggle","rightToLeft");
        removeClassTrigger( prevScroll, scrollPos, 300,".story5s4", "story5s4Toggle","rightToLeft");
        removeClassTrigger( prevScroll, scrollPos, 300,".balloonHank", "balloonHankToggle","rightToLeft");
        removeClassTrigger( prevScroll, scrollPos, 300,".goldenApple", "goldenAppleToggle", "rightToLeft");
        removeClassTrigger( prevScroll, scrollPos, 300,".yesClient", "yesClientToggle","rightToLeft");
        removeClassTrigger( prevScroll, scrollPos, 300,".story6s4", "story6s4Toggle","rightToLeft");
        removeClassTrigger( prevScroll, scrollPos, 300,".annoyOMeter", "annoyOMeterToggle","rightToLeft");
        removeClassTrigger( prevScroll, scrollPos, 300,".annoyOGauge", "annoyOGaugeToggle","rightToLeft");
        removeClassTrigger( prevScroll, scrollPos, 300,".annoyOGauge", "AnnoyOGaugeToCool","rightToLeft");
        removeClassTrigger( prevScroll, scrollPos, 300,".story7s4", "story7s4Toggle","rightToLeft");
        removeClassTrigger( prevScroll, scrollPos, 300,".meter", "meterDown","rightToLeft");
        removeClassTrigger( prevScroll, scrollPos, 300,".clientTwo", "clientOut", "rightToLeft");
        removeClassTrigger( prevScroll, scrollPos, 300,".clientTwo", "clientWalks","rightToLeft");
        removeClassTrigger( prevScroll, scrollPos, 300,".clientTwo", "clientVisible", "rightToLeft");
        removeClassTrigger(prevScroll, scrollPos, 300, ".nextBtnS4", "nextBtnS4Visible", "rightToLeft");
        resetAttrTrigger( prevScroll, scrollPos, 300,".meter", "opacity", 0, "rightToLeft");

        // meeting client.
        autoPauseTrigger(prevScroll, scrollPos, 12163, 10000);
        pauseScroll(prevScroll ,scrollPos, 12163,  3000, "leftToRight", 2, 100, 21000);
        resetToggleClassTrigger(prevScroll, scrollPos, 10730, ".screenMeeting", "screenMeetingToggle", 600, 21000);
        resetToggleClassTrigger(prevScroll, scrollPos, 10730, ".story333", "story333Toggle", 100, 21000);
        resetToggleClassTrigger(prevScroll, scrollPos, 10730, ".nextBtnS4", "nextBtnS4Toggle", 100, 21000);
        resetToggleClassTrigger(prevScroll, scrollPos, 10730, ".clientTwo", "clientIn",100, 21000);
        resetToggleClassTrigger(prevScroll, scrollPos, 10730, ".clientTwo", "clientWalks",100, 21000);
        timeoutResetToggleClassTrigger(prevScroll, scrollPos, 10730, ".clientTwo", "clientWalks", 2000, 100, 21000);
        timeoutResetToggleClassTrigger(prevScroll, scrollPos, 10730, ".clientTwo", "clientStanding", 2000, 100, 21000);

        // Hank goes out the door.
        pauseScroll(prevScroll, scrollPos, 21000, 500);
        classTrigger(prevScroll, scrollPos, 21000, ".hank-container", "hankThroughDoor");

        // Removing all classes from Meeting conversation client.
        removeClassTrigger(prevScroll, scrollPos, 21000, ".clientTwo", "clientVisible", "leftToRight")
        removeClassTrigger(prevScroll, scrollPos, 21000, ".clientTwo", "clientIn", "leftToRight");
        removeClassTrigger(prevScroll, scrollPos, 21000, ".clientTwo", "clientWalks", "leftToRight");
        removeClassTrigger(prevScroll, scrollPos, 21000, ".clientTwo", "clientWalks","leftToRight");
        removeClassTrigger(prevScroll, scrollPos, 21000, ".clientTwo", "clientStanding", "leftToRight");
        removeClassTrigger(prevScroll, scrollPos, 21000, ".screenMeeting", "screenMeetingToggle", "leftToRight");
        removeClassTrigger(prevScroll, scrollPos, 21000, ".story333", "story333Toggle", "leftToRight");
        removeClassTrigger(prevScroll, scrollPos, 21000, ".nextBtnS4", "nextBtnS4Toggle", "leftToRight");
        removeClassTrigger( prevScroll, scrollPos, 21000,".story4s4", "story4s4Toggle", "leftToRight");
        removeClassTrigger( prevScroll, scrollPos, 21000,".questionMarkClient","questionMarkClientToggle","leftToRight" );
        removeClassTrigger( prevScroll, scrollPos, 21000,".balloonClientConversation", "balloonClientToggle", "leftToRight");
        removeClassTrigger( prevScroll, scrollPos, 21000,".apple", "appleToggle","leftToRight");
        removeClassTrigger( prevScroll, scrollPos, 21000,".story5s4", "story5s4Toggle","leftToRight");
        removeClassTrigger( prevScroll, scrollPos, 21000,".balloonHank", "balloonHankToggle","leftToRight");
        removeClassTrigger( prevScroll, scrollPos, 21000,".goldenApple", "goldenAppleToggle", "leftToRight");
        removeClassTrigger( prevScroll, scrollPos, 21000,".yesClient", "yesClientToggle","leftToRight");
        removeClassTrigger( prevScroll, scrollPos, 21000,".story6s4", "story6s4Toggle","leftToRight");
        removeClassTrigger( prevScroll, scrollPos, 21000,".annoyOMeter", "annoyOMeterToggle","leftToRight");
        removeClassTrigger( prevScroll, scrollPos, 21000,".annoyOGauge", "annoyOGaugeToggle","leftToRight");
        removeClassTrigger( prevScroll, scrollPos, 21000,".annoyOGauge", "AnnoyOGaugeToCool","leftToRight");
        removeClassTrigger( prevScroll, scrollPos, 21000,".story7s4", "story7s4Toggle","leftToRight");
        removeClassTrigger( prevScroll, scrollPos, 21000,".meter", "meterDown","leftToRight");
        removeClassTrigger( prevScroll, scrollPos, 21000,".clientTwo", "clientOut", "leftToRight");
        removeClassTrigger( prevScroll, scrollPos, 21000,".clientTwo", "clientWalks","leftToRight");
        removeClassTrigger( prevScroll, scrollPos, 21000,".clientTwo", "clientVisible", "leftToRight");
        removeClassTrigger(prevScroll, scrollPos, 21000, ".nextBtnS4", "nextBtnS4Visible", "leftToRight");
        resetAttrTrigger( prevScroll, scrollPos, 21000,".meter", "opacity", 0, "leftToRight");
    }

    if(pointsScene2.leftValue > pointsScene2.endLeft){
        animationsScene4()
    }

    // resetting currentStory if resetStory === true
    currentStory = resetStory(prevScroll, 23300) === true ? 0 : currentStory;

    //updating prev scroll to current scroll position.
    prevScroll = scrollPos;
    console.log('new prevScroll is', prevScroll)
}

export const checkDisabledScrollOnClickS4 = () => {

    if(disabledScrollOnClick === true ){
        return true
    }else{
        return false
    }
};

//Next button conversation.
const firstClick = () => {
    disableScroll.on();
    disabledScrollOnClick = true;

    // console.log("82% of B2B buyers make a purchase based on experience, ahead of price and product");
    toggleItems(".apple", "appleToggle", ".questionMarkClient","questionMarkClientToggle")
    clickForClassTrigger( ".story4s4", "story4s4Toggle",0);
    clickForClassTrigger( ".balloonClientConversation", "balloonClientToggle", 500);
    clickForAttrTrigger(".blackout", "z-index", 50)
    clickForAttrTrigger(".blackout", "z-index", 20, 1500)
    // Balloon client in. // Apple in. // Question mark in ...
}
const secondClick = () => {
    // console.log("Hank is now Showpad-certified, he provides the client with high quality content..");
    clearInterval(window.toggleApple);
    clearInterval(window.toggeQuestionMark);
    clickToRemoveClassTrigger( ".apple", "appleToggle");
    clickForClassTrigger( ".balloonHank", "balloonHankS4Toggle",500);
    clickForClassTrigger( ".goldenApple", "goldenAppleToggle", 500);
    clickToRemoveClassTrigger( ".questionMarkClient","questionMarkClientToggle", 1500);
    clickForClassTrigger( ".yesClient", "yesClientToggle",1500);
    clickForClassTrigger( ".story4s4", "story4s4Toggle",  3000);
    clickForClassTrigger( ".story5s4", "story5s4Toggle",3000);
    clickForAttrTrigger(".blackout", "z-index", 50)
    clickForAttrTrigger(".blackout", "z-index", 20, 3500)
    // Apple out. // No in!
}
const thirdClick = () => {
    // console.log("The client is blown away by Hanks professionalism.");
    clickForClassTrigger( ".yesClient", "yesClientToggle", 0);
    clickForClassTrigger( ".goldenApple", "goldenAppleToggle", 0);
    clickForClassTrigger( ".balloonHank", "balloonHankS4Toggle",0);
    clickForClassTrigger( ".balloonClientConversation", "balloonClientToggle",0);
    clickForClassTrigger( ".annoyOMeter", "annoyOMeterToggle",500);
    clickForClassTrigger( ".annoyOGauge", "annoyOGaugeToggle",500);
    clickForClassTrigger(".annoyOGauge", "AnnoyOGaugeToCool",1000);
    clickForClassTrigger( ".story5s4", "story5s4Toggle", 2000);
    clickForClassTrigger( ".story6s4", "story6s4Toggle",2000);
    clickForAttrTrigger(".blackout", "z-index", 50)
    clickForAttrTrigger(".blackout", "z-index", 20, 1500)
    // Be meter goes down & disappears again.  // Balloons out, NoHank out, Banana out.
}
const fourthClick = () => {
    // console.log("Congratulations, you closed the deal!!");
    clickForClassTrigger(".annoyOMeter", "annoyOMeterToggle",0);
    clickForClassTrigger( ".annoyOGauge", "annoyOGaugeToggle",0);
    clickForClassTrigger( ".story6s4", "story6s4Toggle",1500);
    clickForClassTrigger( ".story7s4", "story7s4Toggle",1500);
    clickForAttrTrigger( ".star", "left", "15%", 0);
    clickForAttrTrigger(".filler>rect", "width", 1500, 0);
    clickForAttrTrigger( ".meter", "opacity", 1, 1000);
    clickForAttrTrigger( ".filler>rect", "width", 5000, 2000);
    clickForAttrTrigger( ".star", "left", "85%", 2000);
    clickForAttrTrigger(".blackout", "z-index", 50)
    clickForAttrTrigger(".blackout", "z-index", 20, 2500)
}
const fifthClick = () => {
    clickForAttrTrigger( ".meter", "opacity", 0, 0);
    clickForClassTrigger( ".clientTwo", "clientOut", 500);
    clickForClassTrigger( ".clientTwo", "clientWalks",500);
    clickForClassTrigger(".clientTwo", "clientVisible", 4000);
    clickForClassTrigger( ".nextBtnS4", "nextBtnS4Visible");
    // Client walks of // Client & ballon become invisible.

    setTimeout(function () {
        disabledScrollOnClick = false;
        disableScroll.off();
    }, 3000)
}

let array = [
    firstClick, secondClick, thirdClick, fourthClick, fifthClick,
];

export const handleClickScene4 = () => {
    if(currentStory == array.length){

        currentStory = 0;
        return
    }
    else{
        currentStory++;
    }
    array[currentStory-1]();
}
