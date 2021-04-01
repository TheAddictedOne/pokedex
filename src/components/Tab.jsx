export default function({ currentTab, tab }) {
  const className = currentTab === tab ? 'selected' : ''
  return <div className={className} data-tab={tab}>{tab}</div>
}
