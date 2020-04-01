export const getEndpoints = (sel) => {
  const lastElementS1 = document.querySelector(`${sel}`)
  let vw = window.innerWidth
  let widthValue = parseInt(window.getComputedStyle(lastElementS1).width)
  let endLeft = vw - widthValue 
  let leftValue = parseInt(window.getComputedStyle(lastElementS1).left)
  let points = {
    endLeft: endLeft,
    leftValue: leftValue
  }
  return points
}