import { Box, Typography } from "@mui/material";
import { Web3Button } from "@web3modal/react";

export default function Home() {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Typography>Keywise</Typography>
				<Typography>Sarasa</Typography>
				<Box>
					<Web3Button />
				</Box>
			</Box>
		</>
	);
}
