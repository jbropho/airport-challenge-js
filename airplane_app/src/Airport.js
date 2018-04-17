function Airport() {
   this.hangar = [],
   this.max_capacity = 1,
   this.weather = 'sunny';
}

Airport.prototype.getWeather = function(){
  return this.weather;
};

Airport.prototype.add_plane = function(plane) {
  if(this.isFull()) throw new Error('airport is full');
  if(this.getWeather() === 'stormy') throw new Error('weather unsuitable for landing')
  this.hangar.push(plane);
};

Airport.prototype.isFull = function() {
  return this.hangar.length >= this.max_capacity;
};

Airport.prototype.remove_plane = function() {
  this.hangar.pop();
};
