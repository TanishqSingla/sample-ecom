export {};

declare global {
	interface Category {
		categoryName: string;
		id: string;
		subCategories?: Category[];
	}
	type Categories = Category[];
  
  interface Product {
    id?: string,
    title: string,
    subtitle: string,
    imageSource: string,
    rating:  number,
    price: number,
    discount: number,
    category: Category,
  }
  type Products = Product[]
}

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
			default?: string
    };
  }
}
