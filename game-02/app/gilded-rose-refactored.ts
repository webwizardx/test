export class Item {
	name: string;
	sellIn: number;
	quality: number;

	constructor(name: string, sellIn: number, quality: number) {
		this.name = name;
		this.sellIn = sellIn;
		this.quality = quality;
	}
}

export class GildedRose {
	items: Array<Item>;
	private _specialItemsNames: RegExp[] = [
		/Sulfuras/i,
		/Backstage passes/i,
		/Aged Brie/i,
		/Conjured/i
	];

	constructor(items = [] as Array<Item>) {
		this.items = items;
	}

	updateQuality() {
		this.items.forEach(item => {
			// Check if is the legendary item Sulfuras
			if (this._specialItemsNames[0].test(item.name)) return;

			let qualityRate = 1;
			--item.sellIn;

			// Check if is one of the item that increase their quality
			if (
				this._specialItemsNames[1].test(item.name) ||
				this._specialItemsNames[2].test(item.name)
			) {
				// Check if is the item Backstage passes
				if (this._specialItemsNames[1].test(item.name)) {
					item.quality += item.sellIn < 11 ? qualityRate : 0;
					item.quality += item.sellIn < 6 ? qualityRate : 0;

					if (item.sellIn < 0) return (item.quality = 0);
				}

				if ((item.quality += qualityRate) > 50) item.quality = 50;
			} else {
				// Check if is the sell by date has passed or if is a 'Conjured' item
				if (
					item.sellIn < 0 ||
					this._specialItemsNames[3].test(item.name)
				)
					qualityRate = 2;

				if ((item.quality -= qualityRate) < 0) item.quality = 0;
			}
		});

		return this.items;
	}
}
