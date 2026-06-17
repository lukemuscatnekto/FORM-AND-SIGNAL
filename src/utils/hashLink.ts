export function parseHashLink(href: string) {
  const hashIndex = href.indexOf('#')
  const beforeHash = hashIndex === -1 ? href : href.slice(0, hashIndex)
  const hash = hashIndex === -1 ? '' : href.slice(hashIndex)
  const questionIndex = beforeHash.indexOf('?')
  const path = (questionIndex === -1 ? beforeHash : beforeHash.slice(0, questionIndex)) || '/'
  const search = questionIndex === -1 ? '' : beforeHash.slice(questionIndex)

  return { path, search, hash }
}

export function buildHashHref(path: string, search: string, hash: string): string {
  return `${path}${search}${hash}`
}
