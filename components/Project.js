class Project extends Section('.project') {
  created({ name, description, href, image, tags }) {
    append(this, [
      new A({
        target: '_blank',
        href,
      }, [
        new H2('.name', {
          textContent: name,
        }),
        new Div('.image', {
          style: {
            background: `url(${image})`
          }
        })
      ]),
      new Div('.description', [
        P(description)
      ]),
      new Span('.tags', 
        tags.map( tag => new H3('.tag', {
          textContent: `${tag}${notLast(tags, tag) ? ',' : ''}`
        }))
      ),
    ])
  }
}

const notLast = (tags, tag) => tags.indexOf(tag) < tags.length - 1