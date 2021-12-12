import { GildedRose } from '../app/gilded-rose-refactored';
import ItemFactory from '../app/Items/ItemFactory';
import { expect } from 'chai';

describe('Gilded Rose updateQuality method', () => {
	const itemFactory = new ItemFactory();

	it('Test deacrease quality of "normal" items', () => {
		const items = [
			itemFactory.getItem('COMMON', 'Blue eyes white dragon', 10, 20),
			itemFactory.getItem('COMMON', 'Raikegi', 10, 50),
			itemFactory.getItem('COMMON', 'Kuriboh', 3, 8),
			itemFactory.getItem('COMMON', 'Dark Wizard', -7, 8)
		];

		const gildedRose = new GildedRose(items);

		for (let i = 0; i < 10; ++i) {
			gildedRose.updateQuality();
		}

		const itemsValues: [number, number][] = [
			[0, 10],
			[0, 40],
			[-7, 0],
			[-17, 0]
		];

		itemsValues.forEach((itemValue, index) => {
			expect(items[index].sellIn).to.equal(
				itemValue[0],
				`${items[index].name} no match sellIn`
			);
			expect(items[index].quality).to.equal(
				itemValue[1],
				`${items[index].name} no match quality`
			);
		});
	});

	it('Test increase quality of two special items', () => {
		const items = [
			itemFactory.getItem('SPECIAL', 'Aged Brie', 30, 30),
			itemFactory.getItem('SPECIAL', 'Aged Brie', 12, 45),
			itemFactory.getItem('SPECIAL', 'Aged Brie', -6, 50),
			itemFactory.getItem(
				'PASS',
				'Backstage passes to a TAFKAL80ETC concert',
				30,
				30
			),
			itemFactory.getItem(
				'PASS',
				'Backstage passes to a TAFKAL80ETC concert',
				19,
				30
			),
			itemFactory.getItem(
				'PASS',
				'Backstage passes to a TAFKAL80ETC concert',
				12,
				30
			),
			itemFactory.getItem(
				'PASS',
				'Backstage passes to a TAFKAL80ETC concert',
				2,
				50
			),
			itemFactory.getItem(
				'PASS',
				'Backstage passes to a TAFKAL80ETC concert',
				-6,
				50
			)
		];

		const gildedRose = new GildedRose(items);

		for (let i = 0; i < 10; ++i) {
			gildedRose.updateQuality();
		}

		const itemsValues: [number, number][] = [
			[20, 40],
			[2, 50],
			[-16, 50],
			[20, 40],
			[9, 42],
			[2, 50],
			[-8, 0],
			[-16, 0]
		];

		itemsValues.forEach((itemValue, index) => {
			expect(items[index].sellIn).to.equal(itemValue[0]);
			expect(items[index].quality).to.equal(itemValue[1]);
		});
	});

	it('Test the legendary item "Sulfuras, Hand of Ragnaros"', () => {
		const items = [
			itemFactory.getItem(
				'LEGENDARY',
				'Sulfuras, Hand of Ragnaros',
				0,
				80
			),
			itemFactory.getItem(
				'LEGENDARY',
				'Sulfuras, Hand of Ragnaros',
				-100,
				80
			),
			itemFactory.getItem(
				'LEGENDARY',
				'Sulfuras, Hand of Ragnaros',
				10,
				80
			)
		];

		const gildedRose = new GildedRose(items);

		for (let i = 0; i < 10; ++i) {
			gildedRose.updateQuality();
		}

		const itemsValues: [number, number][] = [
			[0, 80],
			[-100, 80],
			[10, 80]
		];

		itemsValues.forEach((itemValue, index) => {
			expect(items[index].sellIn).to.equal(
				itemValue[0],
				`${items[index].name} no match sellIn`
			);
			expect(items[index].quality).to.equal(
				itemValue[1],
				`${items[index].name} no match quality`
			);
		});
	});

	it('Test "Conjured" items', () => {
		const items = [
			itemFactory.getItem(
				'CONJURED',
				'Conjured Blue eyes white dragon',
				10,
				20
			),
			itemFactory.getItem('CONJURED', 'Conjured Raikegi', 10, 50),
			itemFactory.getItem('CONJURED', 'Conjured Kuriboh', 3, 8),
			itemFactory.getItem('CONJURED', 'Conjured Dark Wizard', -7, 8)
		];

		const gildedRose = new GildedRose(items);

		for (let i = 0; i < 10; ++i) {
			gildedRose.updateQuality();
		}

		const itemsValues: [number, number][] = [
			[0, 0],
			[0, 30],
			[-7, 0],
			[-17, 0]
		];

		itemsValues.forEach((itemValue, index) => {
			expect(items[index].sellIn).to.equal(
				itemValue[0],
				`${items[index].name} no match sellIn`
			);
			expect(items[index].quality).to.equal(
				itemValue[1],
				`${items[index].name} no match quality`
			);
		});
	});
});
