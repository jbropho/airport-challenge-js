function Airport() {
   this.hangar = [],
   this.max_capacity = 1,
   this.weather = 'sunny';
}

Airport.prototype.setWeather = function(condition){
  this.weather = condition;
};

Airport.prototype.add_plane = function(plane) {
  if(this.isFull()) throw new Error('airport is full');
  this.hangar.push(plane);
};

Airport.prototype.isFull = function() {
  return this.hangar.length >= this.max_capacity;
};

Airport.prototype.remove_plane = function() {
  this.hangar.pop();
};
