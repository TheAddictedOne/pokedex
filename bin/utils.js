function clean(str) {
  return str.replace(/^\s+|\s+$/g, '') // Remove whitespaces
}

function getTypes(node) {
  const types = []
  const imgs = node.querySelectorAll('img')

  imgs.forEach((img) => {
    types.push(img.alt)
  })

  return types
}

module.exports =  { clean, getTypes }
