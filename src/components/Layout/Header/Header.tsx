import { AccountCircleOutlined } from "@mui/icons-material";
import { Grid, IconButton, Stack, Typography } from "@mui/material";
import NavItem from "../UI/NavItem/NavItem";

export default function () {
	return (
		<>
			<Grid
				direction="row"
				container
				justifyContent="space-between"
				sx={{ p: 4 }}
			>
				<Typography variant="h5">Sample Ecom</Typography>
				<div>hellow</div>
				<Stack direction="row">
					<IconButton>
						<AccountCircleOutlined />
					</IconButton>
					<IconButton>

					</IconButton>
				</Stack>
			</Grid>
			<nav style={{ background: "#F9F9F9", padding: "12px 24px", }}>
				<Stack direction="row">
					<NavItem items={["Bread", "Cakes"]}>Bakery</NavItem>
					<NavItem items={["Seasonal", "Exotic"]}>Fruits and Vegetables</NavItem>
					<NavItem>Meat and Fish</NavItem>
					<NavItem>Drinks</NavItem>
					<NavItem>Kitchen</NavItem>
					<NavItem>Special Nutrition</NavItem>
					<NavItem>Baby</NavItem>
					<NavItem>Pharmacy</NavItem>
				</Stack>
			</nav>
		</>
	);
}
