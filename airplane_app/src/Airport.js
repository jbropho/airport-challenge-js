function Airport() {
   this.hangar = [],
   this.max_capacity = 1
}

Airport.prototype.getWeather = function() {
  var weatherArray = ['sunny', 'stormy', 'sunny', 'sunny']
  var number = Math.floor(Math.random() * weatherArray.length)
  return weatherArray[number]
};

Airport.prototype.addPlane = function(plane) {
  if(this.isFull()) throw new Error('airport is full');
  if(this.getWeather() === 'stormy') throw new Error('weather unsuitable for landing')
  this.hangar.push(plane);
};

Airport.prototype.isFull = function() {
  return this.hangar.length >= this.max_capacity;
};

Airport.prototype.removePlane = function() {
  this.hangar.pop();
};
