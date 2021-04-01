export default function({ currentTab, tab, src }) {
  const className = currentTab === tab ? 'selected' : ''
  return <div className={className} data-tab={tab} data-src={src}>{tab}</div>
}
