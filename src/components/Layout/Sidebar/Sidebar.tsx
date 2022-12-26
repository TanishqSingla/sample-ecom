import {
	Checkbox,
	FormControlLabel,
	Rating,
	Slider,
	TextField,
	Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { brands } from "../../../utils/mocks/brands";
import { getCategories } from "../../../utils/mocks/categories";

export default function () {
	const [categories, setCategories] = useState<Categories | null>(null);

	useEffect(() => {
		const data = getCategories();
		setCategories(data);
	}, []);

	const handleApply = () => {};

	return (
		<Stack sx={{ ml: 2 }} gap={4}>
			<div>
				<Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
					Categories
				</Typography>
				{categories &&
					categories.map((category) => {
						return <CategoryAccordion key={category.id} category={category} />;
					})}
			</div>
			<div>
				<Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
					Brands
				</Typography>
				{brands.map((brand) => {
					return (
						<FormControlLabel
							control={<Checkbox />}
							label={<Typography>{brand.brand}</Typography>}
						/>
					);
				})}
			</div>
			<div>
				<Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
					Rating
				</Typography>
				{[...Array(5).keys()].reverse().map((val) => {
					return (
						<FormControlLabel
							control={<Checkbox />}
							label={<Rating value={val + 1} readOnly size="small" />}
						/>
					);
				})}
			</div>
			<div>
				<Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
					Price Range
				</Typography>
				<PriceRange />
			</div>
		</Stack>
	);
}

function PriceRange() {
	const [value, setValue] = useState([100, 1000]);

	const clamp = (num: number, min: number, max: number) =>
		Math.min(Math.max(num, min), max);

	const handleChange = (event: Event, newValue: number | number[]) => {
		if (!Array.isArray(newValue)) return;

		newValue[0] = clamp(newValue[0], 0, 900);
		newValue[1] = clamp(newValue[1], 100, 1000);

		setValue(newValue);
	};

	return (
		<>
			<Slider
				min={0}
				max={1000}
				step={10}
				value={value}
				onChange={handleChange}
			/>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					marginTop: "1rem",
				}}
			>
				<TextField
					value={value[0]}
          onChange={e => setValue([+e.target.value, value[1]])}
					onBlur={(e) => setValue([clamp(+(e.target.value), 0, 900), value[1]])}
					sx={{ width: "108px", height: "42px", borderRadius: "12px" }}
				/>{" "}
				-
				<TextField
					value={value[1]}
					type="number"
          onChange={e => setValue([value[0], +e.target.value])}
					onBlur={(e) => setValue([value[0], clamp(+(e.target.value), 100, 1000)])}
					sx={{ width: "108px", height: "42px", borderRadius: "12px" }}
				/>
			</div>
		</>
	);
}

function CategoryAccordion(props: { category: Category }) {
	const { category } = props;

	const [checked, setChecked] = useState(false);

	return (
		<div>
			<FormControlLabel
				control={
					<Checkbox
						checked={checked}
						onChange={(e) => setChecked(e.target.checked)}
					/>
				}
				label={category.categoryName}
			/>
			{checked &&
				category.subCategories &&
				category.subCategories.map((subCategory) => {
					return (
						<FormControlLabel
							sx={{ ml: 2 }}
							control={<Checkbox size="small" />}
							label={subCategory.categoryName}
							key={subCategory.id}
						/>
					);
				})}
		</div>
	);
}
