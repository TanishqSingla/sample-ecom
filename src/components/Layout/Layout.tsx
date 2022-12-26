import { Container } from "@mui/material";
import Header from "./Header/Header";

type Props = {
	children: React.ReactNode;
};

export default function (props: Props) {
	return (
		<Container
			style={{
				maxWidth: "1260px",
				background: "#fdfdfd",
				padding: 0,
				display: "flex",
				flexFlow: "column",
				maxHeight: "100vh",
				height: "100vh",
			}}
		>
			<Header />
			{props.children}
		</Container>
	);
}
