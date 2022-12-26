import { Button, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { KeyboardArrowDown } from "@mui/icons-material";

interface Props {
	children: React.ReactNode;
	items?: string[];
}

export default function (props: Props) {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	return (
		<div>
			<Button
				sx={{ color: "primary.dark", fontSize: "15px" }}
				onClick={handleClick}
			>
				{props.children}
				{props.items && <KeyboardArrowDown color="primary" />}
			</Button>
			{props.items && (
				<Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
					{props.items.map((item, index) => (
						<MenuItem key={index}>{item}</MenuItem>
					))}
				</Menu>
			)}
		</div>
	);
}
