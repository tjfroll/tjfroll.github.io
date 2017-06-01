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
  append(container, new Div('.project', [
    new Span('.name', {
      textContent: project.name
    }),
    new A('.image', {
      target: '_blank',
      href: project.url
    }, [
      new Img({
        src: project.image || `./img/${project.name.split(' ').join('-')}.png`
      })
    ]),
    new Span('.tags', 
      project.tags.map( tag => new Span('.tag', {
        textContent: tag
      }))
    ),
  ]))
}