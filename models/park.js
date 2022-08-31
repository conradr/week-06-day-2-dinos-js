const Park = function (name, ticketPrice) {
  this.name = name
  this.ticketPrice = ticketPrice
  this.dinoList = []
}
Park.prototype.addDino = function (dino) {
  this.dinoList.push(dino)
  return this.dinoList.length
}

Park.prototype.removeDino = function (dinoRemoved) {
  for (const dino of this.dinoList) {
    if (dino.name === dinoRemoved.name) {
      let index = this.dinoList.indexOf(dino)
      this.dinoList.splice(index, 1)
      return this.dinoList.length
    }
  }
}

Park.prototype.popularDino = function () {
  // for (const dino of this.dinolist) {

  // }
  //console.log(this.dinoList)
  let highest = Math.max.apply(
    this.dinoList['Dinosaur']['guestsAttractedPerDay']
  )
  console.log(highest)
}

module.exports = Park
