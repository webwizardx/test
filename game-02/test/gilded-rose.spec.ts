import { Item, GildedRose } from '../app/gilded-rose-refactored';
import { expect } from 'chai';

describe('Gilded Rose updateQuality method', () => {
	it('Test deacrease quality of "normal" items', () => {
		const items = [
			new Item('Blue eyes white dragon', 10, 20),
			new Item('Raikegi', 10, 50),
			new Item('Kuriboh', 3, 8),
			new Item('Dark Wizard', -7, 8)
		];

		const gildedRose = new GildedRose(items);

		for (let i = 0; i < 10; ++i) {
			gildedRose.updateQuality();
		}

		expect(gildedRose.items).deep.equal([
			new Item('Blue eyes white dragon', 0, 10),
			new Item('Raikegi', 0, 40),
			new Item('Kuriboh', -7, 0),
			new Item('Dark Wizard', -17, 0)
		]);
	});

	it('Test increase quality of two special items', () => {
		const items = [
			new Item('Aged Brie', 30, 30),
			new Item('Aged Brie', 12, 45),
			new Item('Aged Brie', -6, 50),
			new Item('Backstage passes to a TAFKAL80ETC concert', 30, 30),
			new Item('Backstage passes to a TAFKAL80ETC concert', 19, 30),
			new Item('Backstage passes to a TAFKAL80ETC concert', 12, 30),
			new Item('Backstage passes to a TAFKAL80ETC concert', 2, 50),
			new Item('Backstage passes to a TAFKAL80ETC concert', -6, 50)
		];

		const gildedRose = new GildedRose(items);

		for (let i = 0; i < 10; ++i) {
			gildedRose.updateQuality();
		}

		expect(gildedRose.items).deep.equal([
			new Item('Aged Brie', 20, 40),
			new Item('Aged Brie', 2, 50),
			new Item('Aged Brie', -16, 50),
			new Item('Backstage passes to a TAFKAL80ETC concert', 20, 40),
			new Item('Backstage passes to a TAFKAL80ETC concert', 9, 42),
			new Item('Backstage passes to a TAFKAL80ETC concert', 2, 50),
			new Item('Backstage passes to a TAFKAL80ETC concert', -8, 0),
			new Item('Backstage passes to a TAFKAL80ETC concert', -16, 0)
		]);
	});

	it('Test the legendary item "Sulfuras, Hand of Ragnaros"', () => {
		const items = [
			new Item('Sulfuras, Hand of Ragnaros', 0, 80),
			new Item('Sulfuras, Hand of Ragnaros', -100, 80),
			new Item('Sulfuras, Hand of Ragnaros', 10, 80)
		];

		const gildedRose = new GildedRose(items);

		for (let i = 0; i < 10; ++i) {
			gildedRose.updateQuality();
		}

		expect(gildedRose.items).deep.equal([
			new Item('Sulfuras, Hand of Ragnaros', 0, 80),
			new Item('Sulfuras, Hand of Ragnaros', -100, 80),
			new Item('Sulfuras, Hand of Ragnaros', 10, 80)
		]);
	});

	it('Test "Conjured" items', () => {
		const items = [
			new Item('Conjured Blue eyes white dragon', 10, 20),
			new Item('Conjured Raikegi', 10, 50),
			new Item('Conjured Kuriboh', 3, 8),
			new Item('Conjured Dark Wizard', -7, 8)
		];

		const gildedRose = new GildedRose(items);

		for (let i = 0; i < 10; ++i) {
			gildedRose.updateQuality();
		}

		expect(gildedRose.items).deep.equal([
			new Item('Conjured Blue eyes white dragon', 0, 0),
			new Item('Conjured Raikegi', 0, 30),
			new Item('Conjured Kuriboh', -7, 0),
			new Item('Conjured Dark Wizard', -17, 0)
		]);
	});
});
