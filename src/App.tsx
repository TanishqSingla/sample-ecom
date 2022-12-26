import { ThemeProvider } from "@emotion/react";
import { useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import ProductCard from "./components/ProductCard/ProductCard";
import { getProducts } from "./utils/api";
import { theme } from "./utils/theme";

function App() {
	const [products, setProducts] = useState<Products>();

	useEffect(() => {
		const data = getProducts();
		setProducts(data);
	}, [])

	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<main>
					{products && products.map(product => <ProductCard productData={product} key={product.id} />)}
				</main>
			</Layout>
		</ThemeProvider>
	);
}

export default App;
