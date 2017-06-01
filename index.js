const {
  A,
  P,
  Div,
  Span,
  H1,
  Img
} = alkali

const append = (target, elems) => {
  if (_.isArray(elems)) {
    for (const elem of elems) {
      target.append(elem)
    }
    return elems
  }
  target.append(elems)
  return elems
}

const container = append(document.body, new Div('.container'))

append(container, new H1({
  textContent: 'tim froehlich'
}))
for (const project of projects) {
  append(container, new A('.project', {
    target: '_blank',
    href: project.url
  }, [
    Span('.name', {
      textContent: project.name
    }),
    Img({
      src: project.image || `./img/${project.name.split(' ').join('-')}.png`
    })
  ]))
}