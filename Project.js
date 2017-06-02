class Project extends Div('.project') {
  created({ name, description, url, image, tags }) {
    append(this, [
      new A({
        target: '_blank',
        href: url
      }, [
        new Div('.name', {
          textContent: name
        }),
        new Div('.image', [
          // new Img('.static', {
          //   src: image || `./img/${name.split(' ').join('-')}.png`
          // }),
          new Img('.animated', {
            src: image || `./img/${name.split(' ').join('-')}.png`
          })
        ]),
      ]),
      new Div('.description', [
        P(description)
      ]),
      new Span('.tags', 
        tags.map( tag => new Span('.tag', {
          textContent: `${tag}${notLast(tags, tag) ? ',' : ''}`
        }))
      ),
    ])
  }
}

const notLast = (tags, tag) => tags.indexOf(tag) < tags.length - 1