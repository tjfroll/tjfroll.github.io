const container = append(document.body, new Div('.container'))
const title = append(container, new H1({
  textContent: 'tim froehlich'
}))
for (const prj of projects) {
  append(container, new Project(prj))
}

let tick = 0
const slowFactor = 9
const max = 360 * slowFactor
const draw = () => {
  tick = (tick < max) ? (tick + 1) : 0
  title.style.filter = `hue-rotate(${parseInt(tick / slowFactor)}deg)`
  window.requestAnimationFrame(draw)
}
window.requestAnimationFrame(draw)