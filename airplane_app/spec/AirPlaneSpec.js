describe('AirPlane', function(){
  var plane = new AirPlane();
  it('should fail', function(){
    expect(plane.isInFlight()).toBeFalsey;
  });
});