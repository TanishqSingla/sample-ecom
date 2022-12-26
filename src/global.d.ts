export {};

declare global {
	interface Category {
		categoryName: string;
		id: string;
		subCategories?: Category[];
	}

	type Categories = Category[];
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
