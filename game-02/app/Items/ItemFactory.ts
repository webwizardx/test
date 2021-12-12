import {
	CommonItem,
	ConjuredItem,
	LegendaryItem,
	PassItem,
	SpecialItem
} from '.';
import { ItemInterface, ItemTypes } from '../interfaces/Item';

class ItemFactory {
	getItem(
		itemType: ItemTypes,
		name: string,
		sellIn: number,
		quality: number
	): ItemInterface {
		switch (itemType) {
			case 'COMMON':
				return new CommonItem(name, sellIn, quality);
			case 'CONJURED':
				return new ConjuredItem(name, sellIn, quality);
			case 'LEGENDARY':
				return new LegendaryItem(name, sellIn, quality);
			case 'SPECIAL':
				return new SpecialItem(name, sellIn, quality);
			case 'PASS':
				return new PassItem(name, sellIn, quality);
		}
	}
}

export default ItemFactory;
