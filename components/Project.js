class Project extends Div('.project') {
  created({ name, description, href, image, tags }) {
    append(this, [
      new A({
        target: '_blank',
        href,
      }, [
        new Div('.name', {
          textContent: name
        }),
        new Div('.image', {
          style: {
            background: 'url(' + (image || `./img/${name.split(' ').join('-')}.png`) + ')'
          }
        })
        //   new Img('.animated', {
        //     src: image || `./img/${name.split(' ').join('-')}.png`
        //   })
        // ]),
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