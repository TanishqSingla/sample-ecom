import {
	AccountCircleOutlined,
	Search,
	ShoppingBagOutlined,
} from "@mui/icons-material";
import {
	Badge,
	Box,
	Divider,
	IconButton,
	InputBase,
	Paper,
	Stack,
	Typography,
} from "@mui/material";
import NavItem from "../UI/NavItem/NavItem";

export default function () {
	return (
		<>
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="flex-end"
				sx={{ p: 4 }}
			>
				<Typography style={{ fontSize: 26, fontWeight: 600 }}>
					Sample Ecom
				</Typography>
				<Box
					sx={{
						p: 1,
						background: "#F9F9F9",
						minWidth: 500,
						border: "solid 1px #D1D1D1",
						borderRadius: "12px",
					}}
				>
					<Stack direction="row" alignItems="center" gap="8px">
						<NavItem items={["Electronics", "Books"]}>All Categories</NavItem>
						<Divider orientation="vertical" flexItem />
						<Paper
							component="form"
							sx={{
								display: "flex",
								alignItems: "center",
								flex: 1,
								background: "transparent",
								boxShadow: "none",
							}}
						>
							<InputBase
								placeholder="Search Product, categories..."
								sx={{ flex: 1 }}
							/>
							<Search />
						</Paper>
					</Stack>
				</Box>
				<Stack direction="row">
					<IconButton sx={{ h: 4, w: 4 }}>
						<AccountCircleOutlined sx={{ color: "primary.dark" }} />
					</IconButton>
					<IconButton sx={{ h: 4, w: 4 }}>
						<Badge
							badgeContent={2}
							color="secondary"
							anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
						>
							<ShoppingBagOutlined sx={{ color: "primary.dark" }} />
						</Badge>
					</IconButton>
				</Stack>
			</Stack>
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
		</>
	);
}
