describe('Airport', function() {
  var heathrow = new Airport();

  describe('plane', function() {
    it('should have an empty hangar by default', function(){
      expect(heathrow.hangar.length).toEqual(0);
    });
  });
});