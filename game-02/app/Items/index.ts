import { ItemInterface } from '../interfaces/Item';

export abstract class Item implements ItemInterface {
	readonly name: string;
	sellIn: number;
	quality: number;
	qualityRate: number = 1;

	constructor(name: string, sellIn: number, quality: number) {
		this.name = name;
		this.sellIn = sellIn;
		this.quality = quality;
	}

	updateQuality() {}
}

export class CommonItem extends Item {
	qualityRate = -1;

	updateQuality() {
		if (--this.sellIn < 0) this.qualityRate = -2;

		if ((this.quality += this.qualityRate) < 0) this.quality = 0;
	}
}

export class ConjuredItem extends Item {
	qualityRate = -2;

	updateQuality() {
		--this.sellIn;

		if ((this.quality += this.qualityRate) < 0) this.quality = 0;
	}
}

export class LegendaryItem extends Item {}

export class SpecialItem extends Item {
	qualityRate = 1;

	updateQuality() {
		--this.sellIn;

		if ((this.quality += this.qualityRate) > 50) this.quality = 50;
	}
}

export class PassItem extends Item {
	qualityRate = 1;

	updateQuality() {
		if (--this.sellIn < 0) {
			this.quality = 0;
			return;
		}

		this.quality += this.sellIn < 11 ? this.qualityRate : 0;
		this.quality += this.sellIn < 6 ? this.qualityRate : 0;

		if ((this.quality += this.qualityRate) > 50) this.quality = 50;
	}
}
