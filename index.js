const tabs = {}
const navTabs = {}

const setActive = (currentTab, currentNavTab) => {
  for (const text in tabs) {
    const tab = tabs[text]
    const isCurrent = tab === currentTab
    tab.classList.toggle('active', isCurrent)
    if (isCurrent)
      window.location.hash = text
  }
  for (const text in navTabs) {
    const tab = navTabs[text]
    const isCurrent = tab === currentNavTab
    tab.classList.toggle('active', isCurrent)
  }
}

for (const tabText of ['portfolio', 'resume', 'history', 'about']) {
  const currentTab = tabs[tabText] || (tabs[tabText] = document.getElementById(tabText + '-tab'))
  const currentNavTab = navTabs[tabText] || (navTabs[tabText] = document.getElementById(tabText + '-nav'))
  currentNavTab.onclick = (e) => setActive(currentTab, currentNavTab)
}

let current = window.location.hash.slice(1)
if (!current || !tabs[current]) {
  window.location.hash = 'portfolio'
  current = 'portfolio'
}

setActive(tabs[current], navTabs[current])