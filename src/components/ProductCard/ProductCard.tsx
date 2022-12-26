import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Paper,
	Rating,
	Typography,
} from "@mui/material";
import { Stack } from "@mui/system";

interface CardProps {
	productData: Product;
}

export default function (props: CardProps) {
	const { productData } = props;

	return (
		<Card
			sx={{
				p: 1.5,
				maxWidth: "268px",
				height: "360px",
				margin: "0 auto",
				boxShadow: "none",
				border: "solid 1px #d1d1d1",
				borderRadius: "12px",
				display: "flex",
				flexFlow: "column",
			}}
		>
			<div
				style={{
					borderRadius: "12px",
					overflow: "hidden",
					position: "relative",
				}}
			>
				<CardMedia
					height="180px"
					component="img"
					src={productData.imageSource}
					style={{
						objectFit: "contain",
					}}
					alt={`${productData.title} image`}
				/>
				{productData.discount && (
					<Paper
						sx={{
							height: 18,
							fontSize: 12,
							textAlign: "center",
							borderRadius: 12,
              boxShadow: "none",
							fontWeight: 600,
							fontFamily: "Poppins",
							width: 54,
							color: "#6A983C",
							background: "#F4F8EC",
							position: "absolute",
							top: 8,
							left: 8,
						}}
					>
						- {productData.discount} %
					</Paper>
				)}
			</div>
			<CardContent sx={{ p: 0, mt: 2, flex: 1 }}>
				<Typography variant="body1" sx={{ fontWeight: 500 }}>
					{productData.title}
				</Typography>
				<Typography
					variant="caption"
					sx={{
						color: "#575757",
						mt: 0.25,
						lineHeight: "16px",
						overflow: "hidden",
						textOverflow: "ellipsis",
						whiteSpace: "nowrap",
					}}
					component="p"
				>
					{productData.subtitle}
				</Typography>
				<Rating
					readOnly
					value={productData.rating}
					size="small"
					sx={{ my: 1 }}
				/>
			</CardContent>
			<CardActions sx={{ px: 0 }}>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					width="100%"
				>
					<Stack>
						<Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
							{productData.discount
								? (
										(productData.price * (100 - productData.discount)) /
										100
								  ).toFixed(2)
								: productData.price.toFixed(2)}{" "}
							USD
						</Typography>
						{productData.discount && (
							<Typography
								sx={{ fontWeight: 600, color: "#A9A9A9", fontSize: "12px" }}
							>
								{productData.price.toFixed(2)}
							</Typography>
						)}
					</Stack>
					<Button
						variant="contained"
						sx={{
							border: "solid 2px #46760A",
							background: "#6A983C",
							borderRadius: "12px",
							"&:hover": {
								background: "#46760A",
							},
						}}
					>
						Add to cart
					</Button>
				</Stack>
			</CardActions>
		</Card>
	);
}
