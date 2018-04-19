const tabs = {}
const navTabs = {}

let current = window.location.hash.slice(1) || 'experiments'

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

for (const tabText of ['experiments', 'work', 'about']) {
  const currentTab = tabs[tabText] || (tabs[tabText] = document.getElementById(`${tabText}-tab`))
  const currentNavTab = navTabs[tabText] || (navTabs[tabText] = document.getElementById(`${tabText}-nav`))
  currentNavTab.onclick = (e) => setActive(currentTab, currentNavTab)
}

setActive(tabs[current], navTabs[current])