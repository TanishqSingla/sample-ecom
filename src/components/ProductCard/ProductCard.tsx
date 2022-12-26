import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Chip,
	Paper,
	Rating,
	Typography,
} from "@mui/material";
import { Stack } from "@mui/system";

interface CardProps {
	id?: string;
	title: string;
	subtitle: string;
	imageSource: string;
	rating: number;
	price: number;
	discount?: number;
}

export default function (props: CardProps) {
	return (
		<Card
			sx={{
				p: 1.5,
				maxWidth: "16rem",
				height: "360px",
				boxShadow: "none",
				border: "solid 1px #d1d1d1",
				borderRadius: "12px",
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
					src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
					alt={`${props.title} image`}
				/>
				{props.discount && (
					<Paper
						sx={{
							height: 18,
							fontSize: 12,
							textAlign: "center",
							borderRadius: 12,
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
						- {props.discount} %
					</Paper>
				)}
			</div>
			<CardContent sx={{ p: 0, mt: 2 }}>
				<Typography variant="body1" sx={{ fontWeight: 500 }}>
					{props.title}
				</Typography>
				<Typography
					variant="caption"
					sx={{ color: "#575757", mt: 0.25 }}
					component="p"
				>
					{props.subtitle}
				</Typography>
				<Rating readOnly value={props.rating} size="small" sx={{ my: 1 }} />
			</CardContent>
			<CardActions sx={{ px: 0, mt: 2 }}>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					width="100%"
				>
					<Stack>
						<Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
							{props.discount
								? ((props.price * (100 - props.discount))/100).toFixed(
										2
								  )
								: props.price}{" "}
							USD
						</Typography>
            {props.discount && <Typography sx={{fontWeight: 600, color: "#A9A9A9", fontSize: "12px"}}>
              {props.price}
            </Typography>}
					</Stack>
					<Button
						variant="contained"
						sx={{
							border: "solid 2px #46760A",
							background: "#6A983C",
							borderRadius: "12px",
              "&:hover": {
                background: "#46760A"
              }
						}}
					>
						Add to cart
					</Button>
				</Stack>
			</CardActions>
		</Card>
	);
}
