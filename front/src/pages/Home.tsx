import { Box, Typography, Card } from "@mui/material";
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
					marginTop: 16,
				}}
			>
				<Typography
					variant="h1"
					sx={{
						fontSize: {
							lg: 140,
							md: 90,
							sm: 70,
							xs: 50,
						},
						fontWeight: 700,
						marginBottom: 4,
					}}
				>
					Keywise
				</Typography>
				<Typography
					sx={{
						fontSize: {
							lg: 30,
							md: 28,
							sm: 24,
							xs: 20,
						},
						maxWidth: {
							lg: 600,
							md: 500,
							sm: 400,
							xs: 300,
						},
						fontWeight: 400,
						textAlign: "center",
						marginBottom: 4,
					}}
				>
					Transformamos los contratos tradicionales de alquiler en contratos
					inteligentes.
				</Typography>
				<Card
					sx={{
						minWidth: {
							lg: 600,
							md: 400,
							sm: 350,
							xs: 300,
						},
						minHeight: {
							lg: 300,
							md: 300,
							sm: 250,
							xs: 200,
						},
						backgroundColor: "#9FE870",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Web3Button />
				</Card>
			</Box>
		</>
	);
}
