import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Spinner() {
	return (
		<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
			<CircularProgress />
		</Box>
	);
}