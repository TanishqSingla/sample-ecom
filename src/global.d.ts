export {};

declare global {
	interface Category {
		categoryName: string;
		id: string;
		subCategories?: Category[];
	}

	type Categories = Category[];
}
