const social = new Div('.social', [
  new A({
    title: 'Github',
    href: 'https://github.com/tjfroll',
    target: '_blank'
  }, [
    I('.fa.fa-fw.fa-2x.fa-github')
  ]),
  new A({
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/tjfroll',
    target: '_blank'
  }, [
    I('.fa.fa-fw.fa-2x.fa-linkedin-square')
  ]),
  new A({
    title: 'Resume',
    href: '',
    target: '_blank'
  }, [
    I('.fa.fa-fw.fa-2x.fa-file-pdf-o')
  ]),
  new A({
    title: 'Twitter',
    href: 'https://twitter.com/thunderfunking',
    target: '_blank'
  }, [
    I('.fa.fa-fw.fa-2x.fa-twitter-square')
  ]),
  new A({
    title: 'Instagram',
    href: 'https://instagram.com/thunderfunking',
    target: '_blank'
  }, [
    I('.fa.fa-fw.fa-2x.fa-instagram')
  ]),
])