// dir: richting van beweging
// x = Factor/snelheid waarmee delta verkleind wordt "vrij te kiezen" Hoe hoger, hoe trager.
// D = delta van scroll positie.


export const moveElement = (dir, x, d, selector) => {
  let delta = d / x
  let layer = document.querySelector(`${selector}`)

  //huidige positie van layer opvragen (is een string)
  //waarde er uit halen en aanpassen

  let left = parseFloat(window.getComputedStyle(layer).left)
  let newValue
  dir === 'left' ? newValue = left - delta : newValue = left + delta

  let newLeft = newValue + 'px'
  layer.style.left = `${newLeft}`
};


