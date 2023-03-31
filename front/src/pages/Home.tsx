import { Box, Typography } from "@mui/material";
import ButtonWallet from "../components/ButtonWallet";

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
					<ButtonWallet />
				</Box>
			</Box>
		</>
	);
}
