describe('Airport', function() {
  var gatwick = new Airport();
  var heathrow = new Airport();

  beforeEach(function(){
    gatwick.hangar = [];
    spyOn(gatwick, "getWeather").and.returnValue('sunny');
  });

  describe('addPlane', function() {
    it('should add a plane to the hangar', function() {
       gatwick.addPlane('plane');
       expect(gatwick.hangar.length).toEqual(1);
    });
  });

    it('should raise an error when adding to full hangar', function(){
      gatwick.addPlane('plane');
      expect(function() {
        gatwick.addPlane('plane2');
      }).toThrowError('airport is full');
    }); 

    it('should raise an error when attempting to add when weather is stormy', function(){
      spyOn(heathrow, "getWeather").and.returnValue('stormy');
      expect(function() {
        heathrow.addPlane('plane');
      }).toThrowError('weather unsuitable for landing');
    })

  describe('removePlane', function() {
    it('should remove a plane from the hangar', function() {
      gatwick.addPlane('plane');
      gatwick.removePlane();
      expect(gatwick.hangar.length).toEqual(0);
    });
  });
});
