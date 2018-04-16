describe('AirPlane', function(){
  var plane = new AirPlane();

  describe('plane.isInFlight', function() {
    it('should be false', function(){
      expect(plane.isInFlight()).toBeFalsey;
    });
  });
});