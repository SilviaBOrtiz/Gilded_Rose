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

  it("should degrade twice as fast after sellin", function() {
    items = [ new Item("foo", 0, 6) ];
    update_quality();
    expect(items[0].quality).toEqual(4);
  });

  it("should not degrade below zero", function() {
    items = [ new Item("foo", 0, 0) ];
    update_quality();
    expect(items[0].quality).toEqual(0);
  });

  it("should increase quality of Aged Brie", function() {
    items = [ new Item("Aged Brie", 5, 0) ];
    update_quality();
    expect(items[0].quality).toEqual(1);
  });

  it("should increase quality of Aged Brie twice as fast after sellin", function() {
    items = [ new Item("Aged Brie", 0, 0) ];
    update_quality();
    expect(items[0].quality).toEqual(2);
  });


});
