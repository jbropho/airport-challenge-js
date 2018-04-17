describe('Airport', function() {
  var heathrow = new Airport();
  var gatwick = new Airport();

  describe('hangar', function() {
    it('should have an empty hangar by default', function(){
      expect(heathrow.hangar.length).toEqual(0);
    });
  });

  describe('add_plane', function() {
    it('should add a plane to the hangar', function() {
       gatwick.add_plane('plane');
       expect(gatwick.hangar.length).toEqual(1);
    });
  });
});