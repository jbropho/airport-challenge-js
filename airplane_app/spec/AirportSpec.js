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

  describe('add_plane', function() {
    it('should raise an error when adding to full hangar', function(){
      gatwick.add_plane('plane');
      expect(function() {
        gatwick.add_plane('plane2');
      }).toThrowError('airport is full');
    }); 
 });

  describe('remove_plane', function() {
    it('should remove a plane from the hangar', function() {
      gatwick.add_plane('plane');
      gatwick.remove_plane();
      expect(gatwick.hangar.length).toEqual(0);
    });
  });
});
