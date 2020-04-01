export const changeDay = () => {
  const background = document.querySelector('.sky')
  background.style.backgroundColor = '#20303B'

  const skyline = document.querySelectorAll('.skylinelayer > svg')
  for (let i = 0; i < skyline.length; i++) {
    skyline[i].style.fill = '#273A47'
  }

  setTimeout(() => {
    background.removeAttribute('style')
    for (let i = 0; i < skyline.length; i++) {
      skyline[i].removeAttribute('style')
    }
  }, 3000)
  
  setTimeout(() => {
    const house = document.querySelector('.house-container')
    house.classList.remove('entered')
  }, 5000)
}