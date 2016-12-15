class Gorilla {

  constructor (el, options) {
    this.log(el)
  }

  sum (n1, n2) {
    return n1 + n2
  }

  log (el) {
    let div = document.querySelector(el)
    div.innerHTML = 'Hello module =]'
  }

}

module.exports = Gorilla
