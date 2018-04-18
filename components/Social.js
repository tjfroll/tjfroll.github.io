const social = new Nav('.social', {
  content: socialItems.map( ({ title, href, icon }) => {
    return new A({
      title,
      href,
      target: '_blank'
    }, [
      I(`.fa.fa-fw.fa-2x.${icon}`)
    ])
  })
})