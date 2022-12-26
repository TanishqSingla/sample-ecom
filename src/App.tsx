import { ThemeProvider } from "@emotion/react";
import Layout from "./components/Layout/Layout";
import ProductCard from "./components/ProductCard/ProductCard";
import { theme } from "./utils/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<main>
					<ProductCard
						productData={{
							title: "test",
							subtitle: "lorem ipsum dolor",
							rating: 3,
							imageSource: "",
							discount: 36,
							price: 48.0,
							category: { categoryName: "Electronics", id: "electronics" },
						}}
					/>
				</main>
			</Layout>
		</ThemeProvider>
	);
}

export default App;
