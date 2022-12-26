import { Card, CardMedia, Chip, Paper, Typography } from "@mui/material";

interface CardProps {
	id?: string;
	title: string;
	subtitle: string;
	imageSource: string;
	rating: string | number;
	price: number;
	discount?: number;
}

export default function (props: CardProps) {
	return (
		<Card
			sx={{
				p: 2,
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
		</Card>
	);
}
