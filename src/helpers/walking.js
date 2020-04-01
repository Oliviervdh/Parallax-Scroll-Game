const spriteWidth = 205

// s = huidige scrollPos
//el = elemnt die geannimeerd

export const changeSprite = (prevS, currS) => {
  let scrollPos = currS
  let prevScroll = prevS
  let element = document.querySelector('.sprites');
  
  //richting bepalen
  getDirection(scrollPos, prevScroll, element);
  //frame bepalen afhankelijk van scrollpositie
  const x = 1800;
  let segments = scrollPos % x;
  let steps = x / 8;
  let frame = Math.floor(segments / steps);
  //in spritesheet naar juiste frame gaan
  let newPos = frame * spriteWidth;
  if (newPos !== 0) newPos *= -1;
  element.style.left = newPos + "px";
}

const getDirection = (scrollPos, prevScroll, element) => {
  //scrollrichting bepalen
  let delta = scrollPos - prevScroll;

  if(scrollPos > prevScroll){
    delta >= 0 ? element.style.top = "-310px" : element.style.top = "-620px"
  }
  if(scrollPos < prevScroll){
    delta = 0 ? element.style.top = "-310px" : element.style.top = "-620px"
  }
}
