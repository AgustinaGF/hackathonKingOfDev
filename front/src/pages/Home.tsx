import { Box, Typography, Card } from "@mui/material";
import { Web3Button } from "@web3modal/react";
import city from "./../assets/city.png";
import Web3Modal from "@web3modal/react";
import { providers, Contract } from "ethers";
import { useEffect, useRef, useState } from "react";
import { useProvider, useAccount, useSigner, useContract } from "wagmi";

export default function Home() {
	// walletConnected keep track of whether the user's wallet is connected or not
	const [walletConnected, setWalletConnected] = useState(false);
	const [contractSent, setContractSent] = useState(false);
	const provider = useProvider();
	const { data: signer, isError, isLoading } = useSigner();

	const contract = useContract({
		address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
		signerOrProvider: signer,
	});

	// Create a reference to the Web3 Modal (used for connecting to Metamask) which persists as long as the page is open
	const { address, isConnecting, isDisconnected } = useAccount();
	console.log("adress", address, provider, signer);

	return (
		<>
			<img src={city} style={{ position: "absolute", bottom: "0" }}></img>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<Box
					sx={{
						alignItems: "center",
						marginTop: 16,
						position: "fixed",
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
						bottom: 0,
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
							fontFamily: "'Spectral'",
							color: "#265700",
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
							fontFamily: "'lato'",
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
			</div>
		</>
	);
}
