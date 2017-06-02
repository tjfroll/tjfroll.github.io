const {
  A,
  P,
  I,
  Div,
  Span,
  H1,
  Img,
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