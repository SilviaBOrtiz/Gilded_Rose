describe("Gilded Rose", function() {

  it("should lower sellin", function() {
    items = [ new Item("foo", 5, 0) ];
    update_quality();
    expect(items[0].sell_in).toEqual(4);
  });

  it("should lower quality", function() {
    items = [ new Item("foo", 1, 6) ];
    update_quality();
    expect(items[0].quality).toEqual(5);
  });

});
