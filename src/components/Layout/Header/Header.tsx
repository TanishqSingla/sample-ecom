import {
	AccountCircleOutlined,
	Close,
	DataSaverOff,
	FavoriteBorderOutlined,
	Search,
	ShoppingBagOutlined,
} from "@mui/icons-material";
import {
	Badge,
	Box,
	Button,
	Chip,
	Divider,
	IconButton,
	InputBase,
	Paper,
	Popover,
	Rating,
	Stack,
	Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../../../utils/contexts/cartContext";
import NavItem from "../UI/NavItem/NavItem";

export default function () {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

	const [cartState, dispatch] = useContext(CartContext);

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
							badgeContent={cartState.length || 0}
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
					{!cartState.length ? (
						<Stack sx={{ flex: 1 }} justifyContent="center" alignItems="center">
							<Typography>Cart Empty</Typography>
						</Stack>
					) : (
						cartState.map((cart) => {
							return (
								<Stack sx={{ p: 2 }} key={cart.product.id}>
									<div style={{ display: "flex", gap: "8px" }}>
										<div>
											<div
												style={{
													height: 68,
													width: 100,
													overflow: "hidden",
													borderRadius: 12,
												}}
											>
												<img
													style={{ objectFit: "contain" }}
													src={cart.product.imageSource}
													width="100%"
													height="100%"
												/>
											</div>
											<Stack>
												<Button
													sx={{ color: "#151515" }}
													startIcon={
														<FavoriteBorderOutlined fontSize="small" />
													}
												>
													<Typography
														component="span"
														sx={{ fontSize: "12px" }}
													>
														Wishlist
													</Typography>
												</Button>
												<Button
													sx={{ color: "#151515" }}
													startIcon={<DataSaverOff fontSize="small" />}
												>
													<Typography
														component="span"
														sx={{ fontSize: "12px" }}
													>
														Compare
													</Typography>
												</Button>
												<Button
													sx={{ color: "#151515" }}
													onClick={() =>
														dispatch({ type: "REMOVE", payload: cart.product })
													}
													startIcon={<Close fontSize="small" />}
												>
													<Typography
														component="span"
														sx={{ fontSize: "12px" }}
													>
														Remove
													</Typography>
												</Button>
											</Stack>
										</div>
										<Stack>
											<Typography sx={{ fontWeight: 500, fontSize: 15 }}>
												{cart.product.title}
											</Typography>
											<Rating
												readOnly
												value={cart.product.rating}
												size="small"
												sx={{ mt: 2 }}
											/>
											<Stack direction="row" justifyContent={"space-between"}>
												<Stack sx={{ mt: 2 }}>
													<Typography
														color={"primary"}
														sx={{ fontWeight: 600, fontSize: "18px" }}
													>
														{cart.product.discount
															? (
																	(cart.product.price *
																		(100 - cart.product.discount)) /
																	100
															  ).toFixed(2)
															: cart.product.price.toFixed(2)}{" "}
														USD
													</Typography>
													{cart.product.discount && (
														<Typography
															sx={{
																textDecoration: "line-through",
																fontWeight: 600,
																color: "#A9A9A9",
																fontSize: "12px",
															}}
														>
															{cart.product.price.toFixed(2)}
														</Typography>
													)}
												</Stack>
												<Chip label={`${cart.count} Pcs`} />
											</Stack>
										</Stack>
									</div>
									<Divider />
								</Stack>
							);
						})
					)}
					<div style={{ flex: 1 }} />
					<Stack>
						<Typography sx={{ fontSize: 12, fontWeight: 600 }}>
							Subtotal
						</Typography>
						<Typography sx={{ fontWeight: 600, fontSize: 26 }}>
							{cartState
								.reduce((accumulator, currentCart) => {
									let discount = currentCart.product.discount || 0;
									let finalPrice =
										currentCart.product.price * ((100 - discount) / 100);
									return accumulator + finalPrice;
								}, 0)
								.toFixed(2)}{" "}
							USD
						</Typography>
					</Stack>
				</Stack>
				<Stack
					direction="row"
					justifyContent="space-between"
					sx={{ p: 2, borderTop: "solid 1px #d1d1d1" }}
				>
					<Button onClick={() => setAnchorEl(null)}>Continue Shopping</Button>
					<Button variant="contained">Proceed to Checkout</Button>
				</Stack>
			</Popover>
		</>
	);
}
