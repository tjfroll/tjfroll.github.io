class Project extends Div('.project') {
  created({ name, description, url, image, tags }) {
    append(this, [
      new A({
        target: '_blank',
        href: url
      }, [
        new Span('.name', {
          textContent: name
        }),
        new Div('.image', [
          new Img({
            src: image || `./img/${name.split(' ').join('-')}.png`
          })
        ]),
      ]),
      new Span('.tags', 
        tags.map( tag => new Span('.tag', {
          textContent: tag
        }))
      ),
      new Div('.description', [
        P(description)
      ]),
    ])
  }
}