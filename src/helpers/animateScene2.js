import { changeSprite } from '../helpers/walking.js'
import {moveElement} from "./moveElement";
import disableScroll from 'disable-scroll';
import {
  classTrigger,
  clickForClassTrigger,
  pauseScroll,
  clickForAttrTrigger,
  timeoutToggleClassTrigger,
  removeClassTrigger,
  resetToggleClassTrigger,
  timeoutResetToggleClassTrigger,
  resetStory,
  resetAttrTrigger,
  toggleItems,
  clickToRemoveClassTrigger,
  autoPauseTrigger
} from "./triggers";
import {getEndpoints} from "./getEndpoints";

let prevScroll = 0;
let scrollPos = 0;
let currentStory = 0;
let disabledScrollOnClick = false;

// coming back from other scene --> scrolls resetten
export const resetScrolls = () => {
  console.log('resetting scene2')
  scrollPos = 0
  prevScroll = 0
}

export const animateSceneTwo = () => {
  // current position of last element and position when it has entered frame completely
  let pointsScene2 = getEndpoints('.plant4');
  // current scroll position
  let scrollPos = window.scrollY
  let delta = scrollPos - prevScroll;

  changeSprite(prevScroll, scrollPos);

  const animationsScene2 = () => {

    // Move elements.
    moveElement("left", 5, delta, ".fakeWall1");
    moveElement("left", 5, delta, ".door1");
    moveElement("left", 5, delta, ".plant1");
    moveElement("left", 5, delta, ".window1");
    moveElement("left", 5, delta, ".fakeWall4");
    moveElement("left", 5, delta, ".door4");
    moveElement("left", 5, delta, ".elevator1");
    moveElement("left", 5, delta, ".elevator2");
    moveElement("left", 5, delta, ".plant4");
    moveElement("left", 5, delta,".window4");
    moveElement("left", 5, delta, ".floor2");
    moveElement("left", 5, delta, ".fakeWall2");
    moveElement("left", 5, delta, ".door2");
    moveElement("left", 5, delta, ".window2");
    moveElement("left", 5, delta, ".graphWall");
    moveElement("left", 5, delta, ".client1");
    moveElement("left", 5, delta, ".plant2");
    moveElement("left", 5, delta, ".plant3");
    moveElement("left", 5, delta, ".fakeWall3");
    moveElement("left", 5, delta, ".door3");
    moveElement("left", 5, delta, ".storyWalking");
    moveElement("left", 5, delta, ".storyMeeting");


    // storyWs2alking
    autoPauseTrigger(prevScroll, scrollPos, 2750, 4000);
    resetToggleClassTrigger(prevScroll, scrollPos, 600, ".screenWalking", "screenWalkingToggle",0, 38635);
    resetToggleClassTrigger(prevScroll, scrollPos, 600, ".story1s2", "story1s2In",0, 38635);
    timeoutResetToggleClassTrigger(prevScroll, scrollPos, 600, ".challenge", "challengeToggle",2000, 38635);
    timeoutResetToggleClassTrigger(prevScroll, scrollPos, 600, ".story2s2", "story2s2Toggle",3000, 38635);
    timeoutResetToggleClassTrigger(prevScroll, scrollPos, 600, ".articulate", "articulateToggle",3500, 38635);

    // to secondFloor
    pauseScroll(prevScroll, scrollPos, 7500, 800);
    classTrigger(prevScroll, scrollPos, 7500, ".hank-container", "hankThroughDoor");
    classTrigger(prevScroll, scrollPos, 9515, ".CabinLd", "CabinLdToggle");
    classTrigger(prevScroll, scrollPos, 9515, ".CabinRd", "CabinRdToggle");

    // Hank through door, elevator open.
    pauseScroll(prevScroll ,scrollPos, 10815,  3000);
    timeoutToggleClassTrigger(prevScroll, scrollPos, 10815, ".hank-container", "hankThroughDoor", 10);
    timeoutToggleClassTrigger(prevScroll, scrollPos, 10815, ".hank-container", "hankInElevator", 20);
    timeoutToggleClassTrigger(prevScroll, scrollPos, 10815, ".CabinLd", "CabinLdToggle", 250);
    timeoutToggleClassTrigger(prevScroll, scrollPos, 10815, ".CabinRd", "CabinRdToggle",250);
    timeoutToggleClassTrigger(prevScroll, scrollPos, 10815, ".firstFloor", "firstFloorToggle",500);
    timeoutToggleClassTrigger(prevScroll, scrollPos, 10815, ".secondFloor", "secondFloorToggle", 500);
    timeoutToggleClassTrigger(prevScroll, scrollPos, 10815, ".CabinLd", "CabinLdToggle",3000);
    timeoutToggleClassTrigger(prevScroll, scrollPos, 10815, ".CabinRd", "CabinRdToggle",3000);
    timeoutToggleClassTrigger(prevScroll, scrollPos, 12150, ".CabinLd", "CabinLdToggle",0);
    timeoutToggleClassTrigger(prevScroll, scrollPos, 12150, ".CabinRd", "CabinRdToggle",0);
    // In elevator, close elevator, second floor, elevator open, out elevator.


    // Hank back through door, setting clientOne to opacity 1.
    pauseScroll(prevScroll, scrollPos, 14085, 800)
    classTrigger(prevScroll, scrollPos, 14085, ".hank-container", "hankDown");
    timeoutToggleClassTrigger(prevScroll, scrollPos, 14200, ".hank-container", "hankInElevator", 0);
    classTrigger(prevScroll, scrollPos, 14200, ".hank-container", "hankDown");
    classTrigger(prevScroll, scrollPos, 14500, ".clientOne", "clientVisible");

    // Elevator up.
    classTrigger(prevScroll, scrollPos, 14500, ".elevatorCabin", "cabinUp");
    classTrigger(prevScroll, scrollPos, 14500, ".elevatorWindow", "windowUp");
    classTrigger(prevScroll, scrollPos, 14500, ".elevatorDoors", "doorsUp");

    // meeting client.
    // Removing all classes from Meeting conversation client when hank returns to the reset position.
    removeClassTrigger(prevScroll, scrollPos, 14500, ".clientOne", "clientVisible", "rightToLeft")
    removeClassTrigger(prevScroll, scrollPos, 14500, ".clientOne", "clientIn", "rightToLeft");
    removeClassTrigger(prevScroll, scrollPos, 14500, ".clientOne", "clientWalks", "rightToLeft");
    removeClassTrigger(prevScroll, scrollPos, 14500, ".clientOne", "clientStanding", "rightToLeft");
    removeClassTrigger(prevScroll, scrollPos, 15500, ".screenMeeting", "screenMeetingToggle", "rightToLeft");
    removeClassTrigger(prevScroll, scrollPos, 14500, ".story3s2", "story3s2In", "rightToLeft");
    removeClassTrigger(prevScroll, scrollPos, 14500, ".nextBtnS2", "nextBtnS2Toggle", "rightToLeft");
    removeClassTrigger(prevScroll, scrollPos, 14500, ".story4s2", "story4s2Toggle", "rightToLeft");
    removeClassTrigger(prevScroll, scrollPos, 14500,".questionMarkClient","questionMarkClientToggle", "rightToLeft");
    removeClassTrigger(prevScroll, scrollPos, 14500,".balloonClientConversation", "balloonClientToggle", "rightToLeft");
    removeClassTrigger(prevScroll, scrollPos, 14500,".apple", "appleToggle", "rightToLeft");
    removeClassTrigger( prevScroll, scrollPos, 14500,".balloonHank", "balloonHankToggle", "rightToLeft");
    removeClassTrigger( prevScroll, scrollPos, 14500,".banana", "bananaToggle", "rightToLeft");
    removeClassTrigger( prevScroll, scrollPos, 14500,".story5s2", "story5s2Toggle", "rightToLeft");
    removeClassTrigger( prevScroll, scrollPos, 14500,".noClient", "noClientToggle", "rightToLeft");
    removeClassTrigger( prevScroll, scrollPos, 14500,".story6s2", "story6s2Toggle", "rightToLeft");
    removeClassTrigger( prevScroll, scrollPos, 14500,".story7s2", "story7s2Toggle", "rightToLeft");
    removeClassTrigger( prevScroll, scrollPos, 14500,".meter", "opacity", "rightToLeft");
    removeClassTrigger( prevScroll, scrollPos, 14500,".balloonClientSwearing", "balloonClientToggle", "rightToLeft");
    removeClassTrigger( prevScroll, scrollPos, 14500,".swearingClient", "swearingClientToggle", "rightToLeft");
    removeClassTrigger( prevScroll, scrollPos, 14500,".annoyOMeter", "annoyOMeterToggle", "rightToLeft");
    removeClassTrigger( prevScroll, scrollPos, 14500,".annoyOGauge", "annoyOGaugeToggle", "rightToLeft");
    removeClassTrigger( prevScroll, scrollPos, 14500,".annoyOGauge", "AnnoyOGaugeToCrank", "rightToLeft");
    removeClassTrigger( prevScroll, scrollPos, 14500,".story8s2", "story8s2Toggle", "rightToLeft");
    removeClassTrigger( prevScroll, scrollPos, 14500,".clientOne", "clientOut", "rightToLeft");
    removeClassTrigger( prevScroll, scrollPos, 14500,".clientOne", "clientWalks", "rightToLeft");
    removeClassTrigger( prevScroll, scrollPos, 14500,".balloonClientSwearing", "balloonClientOut", "rightToLeft");
    removeClassTrigger( prevScroll, scrollPos, 14500,".swearingClient", "swearingClientOut", "rightToLeft");
    removeClassTrigger(prevScroll, scrollPos, 14500, ".clientOne", "clientVisible", "rightToLeft");
    removeClassTrigger(prevScroll, scrollPos, 14500, ".nextBtnS2", "nextBtnS2Visible", "rightToLeft");
    resetAttrTrigger( prevScroll, scrollPos, 15500,".meter", "opacity", 0, "rightToLeft");

    // meeting client.
    autoPauseTrigger(prevScroll, scrollPos,22445,10000);
    pauseScroll(prevScroll, scrollPos,22445, 3000, "leftToRight", 1, 100, 38635)
    resetToggleClassTrigger(prevScroll, scrollPos, 21015, ".screenMeeting", "screenMeetingToggle", 14500, 38635 );
    resetToggleClassTrigger(prevScroll, scrollPos, 21015, ".story3s2", "story3s2In", 14500, 38635);
    resetToggleClassTrigger(prevScroll, scrollPos, 21015, ".nextBtnS2", "nextBtnS2Toggle", 14500, 38635);
    resetToggleClassTrigger(prevScroll, scrollPos, 21015, ".clientOne", "clientIn", 14500, 38635);
    resetToggleClassTrigger(prevScroll, scrollPos, 21015, ".clientOne", "clientWalks", 14500,38635);
    timeoutResetToggleClassTrigger(prevScroll, scrollPos, 21015, ".clientOne", "clientWalks",2000, 14500, 38635);
    timeoutResetToggleClassTrigger(prevScroll, scrollPos, 21015, ".clientOne", "clientStanding",2000,14500, 38635);

    // back to first floor 4450
    pauseScroll(prevScroll, scrollPos, 35350, 800);
    classTrigger(prevScroll, scrollPos, 35350, ".hank-container", "hankThroughDoor");
    classTrigger(prevScroll, scrollPos, 36750, ".CabinLd", "CabinLdToggle");
    classTrigger(prevScroll, scrollPos, 36750, ".CabinRd", "CabinRdToggle");

    // Hank through door, elevator open.
    pauseScroll(prevScroll, scrollPos, 38635, 3000);
    timeoutToggleClassTrigger(prevScroll, scrollPos, 38635, ".hank-container", "hankThroughDoor", 10);
    timeoutToggleClassTrigger(prevScroll, scrollPos, 38635, ".hank-container", "hankInElevator", 20);
    timeoutToggleClassTrigger(prevScroll, scrollPos, 38635, ".CabinLd", "CabinLdToggle", 250);
    timeoutToggleClassTrigger(prevScroll, scrollPos, 38635, ".CabinRd", "CabinRdToggle",250);
    timeoutToggleClassTrigger(prevScroll, scrollPos, 38635, ".firstFloor", "firstFloorToggle",500);
    timeoutToggleClassTrigger(prevScroll, scrollPos, 38635, ".secondFloor", "secondFloorToggle", 500);
    timeoutToggleClassTrigger(prevScroll, scrollPos, 38635, ".CabinLd", "CabinLdToggle",3000);
    timeoutToggleClassTrigger(prevScroll, scrollPos, 38635, ".CabinRd", "CabinRdToggle",3000);

    // Removing all classes from Meeting conversation client when hank returns to the reset position.
    removeClassTrigger(prevScroll, scrollPos, 38635, ".clientOne", "clientVisible", "leftToRight")
    removeClassTrigger(prevScroll, scrollPos, 38635, ".clientOne", "clientIn", "leftToRight");
    removeClassTrigger(prevScroll, scrollPos, 38635, ".clientOne", "clientWalks", "leftToRight");
    removeClassTrigger(prevScroll, scrollPos, 38635, ".clientOne", "clientStanding", "leftToRight");
    removeClassTrigger(prevScroll, scrollPos, 38635, ".screenMeeting", "screenMeetingToggle", "leftToRight");
    removeClassTrigger(prevScroll, scrollPos, 38635, ".story3s2", "story3s2In", "leftToRight");
    removeClassTrigger(prevScroll, scrollPos, 38635, ".nextBtnS2", "nextBtnS2Toggle", "leftToRight");
    removeClassTrigger(prevScroll, scrollPos, 38635, ".story4s2", "story4s2Toggle", "leftToRight");
    removeClassTrigger(prevScroll, scrollPos, 38635,".questionMarkClient","questionMarkClientToggle", "leftToRight");
    removeClassTrigger(prevScroll, scrollPos, 38635,".balloonClientConversation", "balloonClientToggle", "leftToRight");
    removeClassTrigger(prevScroll, scrollPos, 38635,".apple", "appleToggle", "leftToRight");
    removeClassTrigger( prevScroll, scrollPos, 38635,".balloonHank", "balloonHankToggle", "leftToRight");
    removeClassTrigger( prevScroll, scrollPos, 38635,".banana", "bananaToggle", "leftToRight");
    removeClassTrigger( prevScroll, scrollPos, 38635,".story5s2", "story5s2Toggle", "leftToRight");
    removeClassTrigger( prevScroll, scrollPos, 38635,".noClient", "noClientToggle", "leftToRight");
    removeClassTrigger( prevScroll, scrollPos, 38635,".story6s2", "story6s2Toggle", "leftToRight");
    removeClassTrigger( prevScroll, scrollPos, 38635,".story7s2", "story7s2Toggle", "leftToRight");
    removeClassTrigger( prevScroll, scrollPos, 38635,".meter", "opacity", "leftToRight");
    removeClassTrigger( prevScroll, scrollPos, 38635,".balloonClientSwearing", "balloonClientToggle", "leftToRight");
    removeClassTrigger( prevScroll, scrollPos, 38635,".swearingClient", "swearingClientToggle", "leftToRight");
    removeClassTrigger( prevScroll, scrollPos, 38635,".annoyOMeter", "annoyOMeterToggle", "leftToRight");
    removeClassTrigger( prevScroll, scrollPos, 38635,".annoyOGauge", "annoyOGaugeToggle", "leftToRight");
    removeClassTrigger( prevScroll, scrollPos, 38635,".annoyOGauge", "AnnoyOGaugeToCrank", "leftToRight");
    removeClassTrigger( prevScroll, scrollPos, 38635,".story8s2", "story8s2Toggle", "leftToRight");
    removeClassTrigger( prevScroll, scrollPos, 38635,".clientOne", "clientOut", "leftToRight");
    removeClassTrigger( prevScroll, scrollPos, 38635,".clientOne", "clientWalks", "leftToRight");
    removeClassTrigger( prevScroll, scrollPos, 38635,".balloonClientSwearing", "balloonClientOut", "leftToRight");
    removeClassTrigger( prevScroll, scrollPos, 38635,".swearingClient", "swearingClientOut", "leftToRight");
    removeClassTrigger(prevScroll, scrollPos, 38635, ".clientOne", "clientVisible", "leftToRight");
    removeClassTrigger(prevScroll, scrollPos, 38635, ".nextBtnS2", "nextBtnS2Visible", "leftToRight");
    resetAttrTrigger( prevScroll, scrollPos, 38635,".meter", "opacity", 0, "leftToRight");
  }

  if(pointsScene2.leftValue > pointsScene2.endLeft){
    animationsScene2()
  }

  // resetting currentStory if resetStory === true
  currentStory = resetStory(prevScroll, 23300) === true ? 0 : currentStory;

  //updating prev scroll to current scroll position.
  prevScroll = scrollPos
  console.log('new prevScroll is', prevScroll)
}

export const checkDisabledScrollOnClickS2 = () => {

  if(disabledScrollOnClick === true ){
    return true
  }else{
    return false
  }
};

// Next Button conversation.
const firstClick = () => {
  disableScroll.on();
  disabledScrollOnClick = true;

  // console.log("80% of sales reps spend up to 30 hours/month finding the right materials.");
  toggleItems(".apple", "appleToggle", ".questionMarkClient","questionMarkClientToggle")
  clickForClassTrigger( ".story4s2", "story4s2Toggle",0);
  clickForClassTrigger(".balloonClientConversation", "balloonClientToggle", 500);
  clickForAttrTrigger(".blackout", "z-index", 50)
  clickForAttrTrigger(".blackout", "z-index", 20, 1500)
  // Balloon client in. // Apple in. // Question mark in ...  // Balloon Hank in. // Banana in.
}
const secondClick = () => {
  clearInterval(window.toggleApple);
  clearInterval(window.toggeQuestionMark);
  disabledScrollOnClick = true;

  // console.log("In his struggle to find the right materials... he accidentally gave the client the wrong content");
  clickToRemoveClassTrigger( ".apple", "appleToggle");
  clickForClassTrigger( ".balloonHank", "balloonHankToggle",500);
  clickForClassTrigger( ".banana", "bananaToggle", 500);
  clickForClassTrigger( ".questionMarkClient","questionMarkClientToggle",1500 );
  clickForClassTrigger( ".noClient", "noClientToggle",1500);
  clickToRemoveClassTrigger( ".questionMarkClient","questionMarkClientToggle", 1500);
  clickForClassTrigger( ".story4s2", "story4s2Toggle",  2500);
  clickForClassTrigger( ".story5s2", "story5s2Toggle",2500);
  clickForAttrTrigger(".blackout", "z-index", 50)
  clickForAttrTrigger(".blackout", "z-index", 20, 3000)
  // Apple out. // No in!
}
const thirdClick = () => {
  disabledScrollOnClick = true;

  // console.log("Resulting in poor buyer experience... ");
  clickForClassTrigger( ".noClient", "noClientToggle", 0);
  clickForClassTrigger( ".banana", "bananaToggle", 0);
  clickForClassTrigger( ".balloonHank", "balloonHankToggle",0);
  clickForClassTrigger( ".balloonClientConversation", "balloonClientToggle",0);
  clickForClassTrigger( ".story5s2", "story5s2Toggle", 1500);
  clickForClassTrigger(".story6s2", "story6s2Toggle",1500);
  clickForAttrTrigger( ".star", "left", "70%",0);
  clickForAttrTrigger( ".filler>rect", "width", 4100,0);
  clickForAttrTrigger( ".meter", "opacity", 1,1000);
  clickForAttrTrigger( ".filler>rect", "width", 900,2000);
  clickForAttrTrigger( ".star", "left", "15%",2000);
  clickForAttrTrigger(".blackout", "z-index", 50)
  clickForAttrTrigger(".blackout", "z-index", 20, 2500)
  // Be meter goes down & disappears again.
}
const fourthClick = () => {
  disabledScrollOnClick = true;

  // console.log("The client gets annoyed and Hank does not close his sale...");
  clickForAttrTrigger( ".meter", "opacity", 0,0);
  clickForClassTrigger( ".balloonClientSwearing", "balloonClientToggle",750);
  clickForClassTrigger( ".swearingClient", "swearingClientToggle", 750);
  clickForClassTrigger( ".annoyOMeter", "annoyOMeterToggle",500);
  clickForClassTrigger( ".annoyOGauge", "annoyOGaugeToggle",500);
  clickForClassTrigger( ".annoyOGauge", "AnnoyOGaugeToCrank",1000);
  clickForClassTrigger( ".story6s2", "story6s2Toggle",2000);
  clickForClassTrigger( ".story7s2", "story7s2Toggle",2000);
  clickForAttrTrigger(".blackout", "z-index", 50)
  clickForAttrTrigger(".blackout", "z-index", 20, 2500)
  //Client starts swearing // Annoy-O-Meter goes full..
}
const fifthClick = () => {
  disabledScrollOnClick = true;

  // console.log("Better luck next time")
  clickForClassTrigger( ".story7s2", "story7s2Toggle",0);
  clickForClassTrigger( ".story8s2", "story8s2Toggle",0);
  clickForClassTrigger(".annoyOMeter", "annoyOMeterToggle",2000);
  clickForClassTrigger( ".annoyOGauge", "annoyOGaugeToggle",2000);
  clickForClassTrigger( ".clientOne", "clientOut", 2000);
  clickForClassTrigger( ".clientOne", "clientWalks",2000);
  clickForClassTrigger( ".balloonClientSwearing", "balloonClientOut",2000);
  clickForClassTrigger( ".swearingClient", "swearingClientOut",2000);
  clickForClassTrigger( ".clientOne", "clientVisible", 5000);
  clickForClassTrigger( ".balloonClientSwearing", "balloonClientToggle",5000);
  clickForClassTrigger( ".swearingClient", "swearingClientToggle", 5000);
  clickForClassTrigger( ".nextBtnS2", "nextBtnS2Visible");
  // Client walks of // Client & balloon become invisible.

  setTimeout(function () {
    disabledScrollOnClick = false;
    disableScroll.off();
  }, 3000)
}

let array = [
  firstClick, secondClick, thirdClick, fourthClick, fifthClick,
];

export const handleClickScene2 = () => {
  if(currentStory == array.length){

    currentStory = 0
    return
  }
  else{
    currentStory++;
  }
  array[currentStory-1]();
}





