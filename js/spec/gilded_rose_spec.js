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

  it("should not increase quality above 50", function() {
    items = [ new Item("Aged Brie", 1, 50) ];
    update_quality();
    expect(items[0].quality).toEqual(50);
  });

  it("should not change Sulfuras", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ];
    update_quality();
    expect(items[0].sell_in).toEqual(0);
    expect(items[0].quality).toEqual(80);
  });

  it("should increase quality of Backstage pass", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 11, 0) ];
    update_quality();
    expect(items[0].quality).toEqual(1);
  });

  it("should increase by 2 when there are 10 days or less", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 6, 10) ];
    update_quality();
    expect(items[0].quality).toEqual(12);
  });

  it("should increase quality of Backstage pass by 3 when there are 5 days or less", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 1, 12) ];
    update_quality();
    expect(items[0].quality).toEqual(15);
  });

  it("should drop quality of Backstage pass to 0 after the concert", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 15) ];
    update_quality();
    expect(items[0].quality).toEqual(0);
  });

  it("should degrade Conjured items twice as fast", function() {
    items = [ new Item("Conjured Mana Cake", 3, 6) ];
    update_quality();
    expect(items[0].quality).toEqual(4);
  });

  it("should degrade Conjured items four times as fast after sellin", function() {
    items = [ new Item("Conjured Mana Cake", 0, 6) ];
    update_quality();
    expect(items[0].quality).toEqual(2);
  });


});
