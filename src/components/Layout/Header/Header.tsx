import { AccountCircleOutlined, ShoppingBagOutlined } from "@mui/icons-material";
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
				<Typography>Sample Ecom</Typography>
				<Stack direction="row">
					
				</Stack>
				<Stack direction="row">
					<IconButton>
						<AccountCircleOutlined sx={{color: "primary.dark"}} />
					</IconButton>
					<IconButton>
						<ShoppingBagOutlined sx={{color: "primary.dark"}} />
					</IconButton>
				</Stack>
			</Grid>
			<nav style={{ background: "#F9F9F9", padding: "12px 24px", }}>
				<Stack direction="row" gap="16px">
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
