import { ThemeProvider } from "@emotion/react";
import { Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import Sidebar from "./components/Layout/Sidebar/Sidebar";
import ProductCard from "./components/ProductCard/ProductCard";
import { getProducts } from "./utils/api";
import { theme } from "./utils/theme";

function App() {
	const [products, setProducts] = useState<Products>();

	useEffect(() => {
		const data = getProducts();
		setProducts(data);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<main style={{marginTop: "4rem", height: "100%"}}>
					<Stack direction="row" sx={{flex: 1, height: "100%", overflowY: "scroll"}}>
						<div style={{width: 280}}>
							<Sidebar />
						</div>
						<Grid container rowSpacing={"32px"} sx={{flex: 1}}>
							{products &&
								products.map((product) => (
									<Grid item sx={{maxWidth: "360px"}} sm={6} md={4} key={product.id}>
										<ProductCard productData={product} />
									</Grid>
								))}
						</Grid>
					</Stack>
				</main>
			</Layout>
		</ThemeProvider>
	);
}

export default App;
