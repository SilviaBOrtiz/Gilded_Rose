describe("Gilded Rose", function() {

  it("should degrade normal items by 1 before sell_in", function() {
    items = [ new Item("+5 Dexterity Vest", 10, 20) ];
    update_quality();
    expect(items[0].sell_in).toBe(9);
    expect(items[0].quality).toBe(19);
  });
});

