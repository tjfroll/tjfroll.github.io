

append(document.body, new Header('.header', [
  social,
  new H1({
    textContent: 'tim froehlich'
  })
]))

const selectedTab = reactive('experiments')
append(document.body, new Nav('.tabs', [
  A('.active', {
    textContent: 'experiments',
    title: 'experiments',
    classes: {
      active: selectedTab.to(tab => tab === 'experiments')
    },
    onclick: (e) => selectedTab.put('experiments')
  }),
  A('', {
    textContent: 'work',
    title: 'work',
    classes: {
      active: selectedTab.to(tab => tab === 'work')
    },
    onclick: (e) => selectedTab.put('work')
  }),
  A('', {
    textContent: 'about',
    title: 'about',
    classes: {
      active: selectedTab.to(tab => tab === 'about')
    },
    onclick: (e) => selectedTab.put('about')
  }),
  Span('.spacer'),
]))
const container = append(document.body, new Div('.container', [
  new Article('.tab', {
    display: selectedTab.to(tab => tab === 'experiments'),
    // In order for the project names to appear on top of experiments lower on the list,
    // we reverse the order of the array and use reverse flex-direction to maintain desired order
    content: experiments.reverse().map(prj => new Project(prj))
  }),
  new Article('.tab', {
    display: selectedTab.to(tab => tab === 'work')
  }),
  new Article('.tab', {
    display: selectedTab.to(tab => tab === 'about'),
    content: [
      Div([
        Img('.bio-img', {
          src: './img/bio.jpg',
          width: '180px',
        })
      ])
    ]
  })
]))