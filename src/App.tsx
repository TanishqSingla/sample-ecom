import { ThemeProvider } from "@emotion/react";
import Layout from "./components/Layout/Layout";
import { theme } from "./utils/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<main></main>
			</Layout>
		</ThemeProvider>
	);
}

export default App;
