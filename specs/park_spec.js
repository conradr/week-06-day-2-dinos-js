const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dino;

  beforeEach(function () {
    park = new Park('Dino World', 59)
  })

  it('should have a name', function () {
    const actual = park.name
    assert.strictEqual(actual, 'Dino World')
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice
    assert.strictEqual(actual, 59)
  });

  it('should have a collection of dinosaurs', function (){
    const actual = park.dinoList
    assert.deepStrictEqual(actual, [])
  });


  it('should be able to add a dinosaur to its collection', function () {
    let dino1 = new Dinosaur('Tera','Grass', 40)
    let result = park.addDino(dino1)
    const actual = result
    assert.deepStrictEqual(actual,1)
  });

  it('should be able to remove a dinosaur from its collection', function () {
    let dino1 = new Dinosaur('Tera', 'Grass', 40)
    let dino2 = new Dinosaur('Fera', 'Grass', 40)
    park.addDino(dino1)
    park.addDino(dino2)
    let result = park.removeDino(dino1)
    const actual = result
    assert.deepStrictEqual(actual,1)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    let dino1 = new Dinosaur('Tera', 'Grass', 40)
    let dino2 = new Dinosaur('Fera', 'Grass', 50)
    let dino3 = new Dinosaur('Kera', 'Grass', 60)
    park.addDino(dino1)
    park.addDino(dino2)
    park.addDino(dino3)
    let result = park.popularDino()
    const actual = result
    assert.deepStrictEqual(result,'Kera')

  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
