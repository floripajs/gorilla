class Gorilla {

  constructor (el, options) {
    this.log(el)
  }

  log (el) {
    let div = document.querySelector(el)
    div.innerHTML = 'Hello module =]'
  }

}

module.exports = Gorilla
