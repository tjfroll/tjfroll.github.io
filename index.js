

append(document.body, new Div('.header', [
  social,
  new H1({
    textContent: 'tim froehlich'
  })
]))
const container = append(document.body, new Div('.container'))

// In order for the project names to appear on top of projects lower on the list,
// we reverse the order of the array and use reverse flex-direction to maintain desired order
for (const prj of projects.reverse()) {
  append(container, new Project(prj))
}

// let tick = 0
// const slowFactor = 9
// const max = 360 * slowFactor
// const draw = () => {
//   tick = (tick < max) ? (tick + 1) : 0
//   title.style.filter = `hue-rotate(${parseInt(tick / slowFactor)}deg)`
//   window.requestAnimationFrame(draw)
// }
// window.requestAnimationFrame(draw)