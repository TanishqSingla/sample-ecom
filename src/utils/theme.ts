import { createTheme } from "@mui/material";

export const theme = createTheme({
	status: {
		default: "#151515",
	},
	palette: {
		primary: {
			main: "#46760A",
			dark: "#151515",
			light: "#fff",
		},
    secondary: {
      main: "#E6704B"
    }
	},
	typography: {
		fontFamily: ["Poppins", "sans-serif"].join(","),
	},
});
