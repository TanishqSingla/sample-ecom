import { Card, CardMedia, Chip } from "@mui/material";

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
			<div style={{ borderRadius: "12px", overflow: "hidden" }}>
				<CardMedia
					height="180px"
					component="img"
					src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
					alt={`${props.title} image`}
				/>
				{props.discount && <div></div>}
			</div>
		</Card>
	);
}
