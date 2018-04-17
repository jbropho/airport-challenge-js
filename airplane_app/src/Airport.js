function Airport() {
   this.hangar = [],
   this.max_capacity = 100,
   this.weather = 'sunny';
}

Airport.prototype.setWeather = function(condition){
  this.weather = condition;
};

Airport.prototype.add_plane = function(plane) {
  this.hangar.push(plane);
}
