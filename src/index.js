function isInView(element) {
  var viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    rect = element.getBoundingClientRect()
  return !(rect.top > viewportHeight || rect.bottom < 0)
}
export default isInView
