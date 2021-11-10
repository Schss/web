import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('common good', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(0);
    });

    it('good sellIn<=0', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 5) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(3);
    });

    it('Sulfuras', function() {
        const gildedRose = new GildedRose([ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Sulfuras, Hand of Ragnaros');
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.equal(80);
    });

    it('Aged Brie', function() {
        const gildedRose = new GildedRose([ new Item("Aged Brie", 2, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(1);
        expect(items[0].quality).to.equal(1);
    });

    it('common Backstage passes', function() {
        const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.equal(14);
        expect(items[0].quality).to.equal(21);
    });

    it('Backstage passes sellin <= 10', function() {
        const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(22);
    });

    it('Backstage passes sellin <= 5', function() {
        const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(23);
    });

    it('max Quality == 50', function() {
        const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(50);
    });

    it('common Conjured', function() {
        const gildedRose = new GildedRose([ new Item("Conjured", 5, 49) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Conjured');
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(47);
    });

    it('Conjured sellIn <= 0', function() {
        const gildedRose = new GildedRose([ new Item("Conjured", 0, 49) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Conjured');
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(45);
    });

});
