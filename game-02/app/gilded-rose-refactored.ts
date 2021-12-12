import { ItemInterface } from './interfaces/Item';
export class GildedRose {
	items: Array<ItemInterface>;

	constructor(items = [] as Array<ItemInterface>) {
		this.items = items;
	}

	updateQuality() {
		this.items.forEach(item => item.updateQuality());
	}
}
