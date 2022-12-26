import { ThemeProvider } from "@emotion/react";
import Layout from "./components/Layout/Layout";
import ProductCard from "./components/ProductCard/ProductCard";
import { theme } from "./utils/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<main>
					<ProductCard title="test" subtitle="lorem ipsum dolor" rating={3} price={21.1} imageSource="" discount={36}/>
				</main>
			</Layout>
		</ThemeProvider>
	);
}

export default App;
