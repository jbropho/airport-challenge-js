describe('Airport', function() {
  var gatwick = new Airport();

  beforeEach(function(){
    gatwick.hangar = [];
  });

  describe('add_plane', function() {
    it('should add a plane to the hangar', function() {
       gatwick.add_plane('plane');
       expect(gatwick.hangar.length).toEqual(1);
    });
  });

    it('should raise an error when adding to full hangar', function(){
      gatwick.add_plane('plane');
      expect(function() {
        gatwick.add_plane('plane2');
      }).toThrowError('airport is full');
    }); 

    it('should raise an error when attempting to add when weather is stormy', function(){
      spyOn(gatwick, "getWeather").and.returnValue('stormy');
      expect(function() {
        gatwick.add_plane('plane');
      }).toThrowError('weather unsuitable for landing');
    })

  describe('remove_plane', function() {
    it('should remove a plane from the hangar', function() {
      gatwick.add_plane('plane');
      gatwick.remove_plane();
      expect(gatwick.hangar.length).toEqual(0);
    });
  });
});
