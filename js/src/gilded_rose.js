function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function update_quality() {
  for (let item of items) {
    update_item(item);
  }
}

function update_item(item) {
  // "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
  if (item.name == 'Sulfuras, Hand of Ragnaros') {
    return;
  }

  // At the end of each day our system lowers both values for every item
  item.sell_in = item.sell_in - 1;
  item.quality += get_degrade(item);

  // The Quality of an item is never more than 50
  if (item.quality > 50) {
    item.quality = 50;
  }

  // The Quality of an item is never negative
  if (item.quality < 0) {
    item.quality = 0;
  }
}

function get_degrade(item) {
  if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
    if (item.sell_in >= 10) {
      return 1; // "Backstage passes", like aged brie, increases in Quality as it's SellIn value approaches
    } else if (item.sell_in >= 5) {
      return 2; // Quality increases by 2 when there are 10 days or less
    } else if (item.sell_in >= 0){
      return 3; // and by 3 when there are 5 days or less
    } else { // but Quality drops to 0 after the concert
      return -item.quality;
    }
  }

  // At the end of each day our system lowers both values for every item
  var degrade = -1;

  // "Aged Brie" actually increases in Quality the older it gets
  if (item.name == 'Aged Brie') {
    degrade *= -1;
  }

  // "Conjured" items degrade in Quality twice as fast as normal items
  if (item.name == 'Conjured Mana Cake') {
    degrade *= 2;
  }

  // Once the sell by date has passed, Quality degrades twice as fast
  if (item.sell_in < 0) {
    degrade *= 2;
  }

  return degrade;
}

