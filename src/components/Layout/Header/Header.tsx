import {
	AccountCircleOutlined,
	Close,
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
	Popover,
	Stack,
	Typography,
} from "@mui/material";
import { useState } from "react";
import NavItem from "../UI/NavItem/NavItem";

export default function () {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

	const open = Boolean(anchorEl);

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
					<IconButton
						sx={{ h: 4, w: 4 }}
						onClick={(event) => setAnchorEl(event.currentTarget)}
					>
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
			<Popover
				open={open}
				anchorEl={anchorEl}
				anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
				transformOrigin={{ vertical: "top", horizontal: "right" }}
				onClose={() => setAnchorEl(null)}
			>
				<Stack sx={{ width: 400, p: 2, minHeight: 600 }}>
					<Stack direction="row" justifyContent="space-between">
						<Typography sx={{ fontSize: "26px", fontWeight: 600 }}>
							Shopping Cart
						</Typography>
						<IconButton onClick={() => setAnchorEl(null)}>
							<Close />
						</IconButton>
					</Stack>
					<Stack sx={{flex: 1}} justifyContent="center" alignItems="center">
						<Typography>Cart Empty</Typography>
					</Stack>
				</Stack>
			</Popover>
		</>
	);
}
