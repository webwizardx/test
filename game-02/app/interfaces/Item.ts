export interface ItemInterface {
	name: string;
	sellIn: number;
	quality: number;
	qualityRate: number;

	updateQuality(): void;
}

export type ItemTypes =
	| 'COMMON'
	| 'CONJURED'
	| 'LEGENDARY'
	| 'SPECIAL'
	| 'PASS';
