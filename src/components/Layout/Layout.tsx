import { Container, Stack } from "@mui/material";
import Header from "./Header/Header";
import NavItem from "./UI/NavItem/NavItem";

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
			<nav style={{ background: "#F9F9F9", padding: "12px 24px" }}>
				<Stack direction="row" gap="16px">
					<NavItem items={["Bread", "Cakes"]}>Bakery</NavItem>
					<NavItem items={["Seasonal", "Exotic"]}>
						Fruits and Vegetables
					</NavItem>
					<NavItem>Meat and Fish</NavItem>
					<NavItem>Drinks</NavItem>
					<NavItem>Kitchen</NavItem>
					<NavItem>Special Nutrition</NavItem>
					<NavItem>Baby</NavItem>
					<NavItem>Pharmacy</NavItem>
				</Stack>
			</nav>
			{props.children}
		</Container>
	);
}
