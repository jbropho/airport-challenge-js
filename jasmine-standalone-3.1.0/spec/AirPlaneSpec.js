describe('AirPlane', function(){
  var plane = new AirPlane;
  it('should fail', function(){
    expect(AirPlane.in_flight()).toBeFalsey
  })
})