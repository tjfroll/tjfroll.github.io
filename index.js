const container = append(document.body, new Div('.container'))
append(container, new H1({
  textContent: 'tim froehlich'
}))
for (const prj of projects) {
  append(container, new Project(prj))
}