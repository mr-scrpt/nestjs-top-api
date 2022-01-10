export class ProductModel {
	_id: string;
	img: string;
	name: string;
	price: number;
	priceOld: number;
	credit: number;
	ratingCalc: number;
	description: string;
	advantages: string;
	disAdvantages: string;
	categories: string[];
	tags: string;
	charcteristics: {
		[key: string]: string;
	};
}
