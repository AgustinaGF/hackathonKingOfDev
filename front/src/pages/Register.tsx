import { Box, Typography, Card, TextField, Button, Grid } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { useFormik, useField } from "formik";
import { object, number, string, ObjectSchema } from "yup";
import { User } from "../typings/index";
import abiContract from "../abiContract.json";
import { useProvider, useAccount, useSigner, useContract } from "wagmi";
import { ethers } from "ethers";


const validationSchema: ObjectSchema<User> = object({
	fullName: string(),
	email: string(),
	phone: number(),
	dni: number(),
	status: string(),
	account: string(),
	contractName: string(),
	deposit: number(),
	rent: number(),
	transactionHash: string(),
	file: string(),
	streetName: string(),
	streetNumber: number(),
	city: string(),
	state: string(),
	zipCode: number(),
});

//REEMPLAZAR TODA LA INFO QUE VIENE DE WALLET DE HASH Y DE CONTRATO POR LOS DATOS DE ESTADO PARA MANDAR EL FORM
export default function Register() {
	const formik = useFormik({
		initialValues: {
			fullName: "fullName",
			email: "email@example.com",
			phone: 2215774990,
			dni: 3902344,
			status: "Propietario",
			account: "0x98217389398700124",
			contractName: "Alquiler comercial",
			deposit: 9872198,
			rent: 92012,
			transactionHash: "jgsaueier",
			file: "lsdkpeafpew",
			streetName: "Av Siempre Viva",
			streetNumber: 121312,
			city: "CABA",
			state: "Buenos Aires",
			zipCode: 1022,
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
			// console.log(values.fullName, values.dni)
			contract2(values) //instancia la async function contract
		},
	});

	// Convert in base 44 our file
	const convertBase44 = (files: any) => {
		new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			console.log(files[0], "hhh");
			fileReader.readAsDataURL(files![0]);
			fileReader.onload = () => {
				const base44 = (fileReader.result as string).substring(
					(fileReader.result as string).indexOf(",") + 1
				);
				console.log(base44);
			};
		});
	};

	const { data: signer, isError, isLoading } = useSigner();


	async function contract2(values: { fullName: any; email: any; phone?: number; dni: any; status?: string; account?: string; contractName?: string; deposit?: number; rent?: number; transactionHash?: string; file?: string; streetName?: string; streetNumber?: number; city?: string; state?: string; zipCode?: number; address?: any; }) {
		const factory = new ethers.Contract(
			"0xB1D11a2b59bB6B0c5D61A2eE765ceb8779941b57",
			abiContract,
			signer!
		);

		////Esta Funcion es la que se va a ejecutar cuando hacemos el submit con la data del form
		const add = await factory.addStringData(
			values.fullName,
			values.fullName,
			values.fullName,
			values.fullName,
			values.fullName

			// values.fullName,
			// values.email,
			// values.fullName,
			// values.address,
			// values.fullName,
			
		);
		const tx = add.wait();
		const hash = add.hash
		console.log(hash);
		//   console.log(provider)
		//   console.log(signer)
		//   console.log(useSigner)
		console.log(factory);
	}

	return (
		<>
			<form onSubmit={formik.handleSubmit}>
				<Box
					sx={{
						width: "80%",
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
						marginLeft: "8em",
					}}
				>
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
							fontWeight: 500,
							textAlign: "left",
							marginBottom: 4,
							marginTop: 4,
							fontFamily: "'lato'",
						}}
					>
						Subir contrato
					</Typography>
					<Typography
						sx={{
							fontSize: {
								lg: 24,
								md: 22,
								sm: 18,
								xs: 16,
							},
							fontWeight: 400,
							textAlign: "left",
							marginBottom: 4,
							fontFamily: "'lato'",
						}}
					>
						Lorem ipsum ddolor sit amet, consectetur adipiscing elit, sed do
						eiusmodtempor incididunt ut labore et dolore magna aliqua.
					</Typography>
					<Typography>Datos del Usuario</Typography>
				</Box>
				<Box
					sx={{
						flexGrow: 1,
						display: "flex",
						justifyContent: "center",
						width: "100%",
					}}
				>
					<Grid
						container
						spacing={2}
						display="flex"
						justifyContent="center"
						alignItems="center"
					>
						<Grid item xs={5}>
							<TextField
								id="fullName"
								name="fullName"
								placeholder="fullName"
								type="text"
								value={formik.values.fullName}
								onChange={formik.handleChange}
								error={
									formik.touched.fullName && Boolean(formik.errors.fullName)
								}
								helperText={formik.touched.fullName && formik.errors.fullName}
								fullWidth
								sx={{
									"& .MuiOutlinedInput-root": {
										borderRadius: "40px",
										backgroundColor: "#ECFAE2",
										"& fieldset": {
											borderColor: "transparent",
										},
										"&:hover fieldset": {
											borderColor: "#265700",
										},
										"&.Mui-focused fieldset": {
											borderColor: "#265700",
										},
									},
								}}
							/>
						</Grid>
						<Grid item xs={5}>
							<TextField
								placeholder="DNI"
								id="dni"
								name="dni"
								type="number"
								value={formik.values.dni}
								onChange={formik.handleChange}
								error={formik.touched.dni && Boolean(formik.errors.dni)}
								helperText={formik.touched.dni && formik.errors.dni}
								sx={{
									"& .MuiOutlinedInput-root": {
										borderRadius: "40px",
										backgroundColor: "#ECFAE2",
										"& fieldset": {
											borderColor: "transparent",
										},
										"&:hover fieldset": {
											borderColor: "#265700",
										},
										"&.Mui-focused fieldset": {
											borderColor: "#265700",
										},
									},
								}}
							/>
						</Grid>
						<Grid item xs={5}>
							<TextField
								placeholder="Phone"
								id="phone"
								name="phone"
								type="number"
								value={formik.values.phone}
								onChange={formik.handleChange}
								error={formik.touched.phone && Boolean(formik.errors.phone)}
								helperText={formik.touched.phone && formik.errors.phone}
								fullWidth
								sx={{
									"& .MuiOutlinedInput-root": {
										borderRadius: "40px",
										backgroundColor: "#ECFAE2",
										"& fieldset": {
											borderColor: "transparent",
										},
										"&:hover fieldset": {
											borderColor: "#265700",
										},
										"&.Mui-focused fieldset": {
											borderColor: "#265700",
										},
									},
								}}
							/>
						</Grid>
						<Grid item xs={5}>
							<TextField
								placeholder="Email"
								id="email"
								name="email"
								type="email"
								value={formik.values.email}
								onChange={formik.handleChange}
								error={formik.touched.email && Boolean(formik.errors.email)}
								helperText={formik.touched.email && formik.errors.email}
								fullWidth
								sx={{
									"& .MuiOutlinedInput-root": {
										borderRadius: "40px",
										backgroundColor: "#ECFAE2",
										"& fieldset": {
											borderColor: "transparent",
										},
										"&:hover fieldset": {
											borderColor: "#265700",
										},
										"&.Mui-focused fieldset": {
											borderColor: "#265700",
										},
									},
								}}
							/>
						</Grid>
						<Grid item xs={5}>
							<TextField
								placeholder="Propietario o Inquilino"
								id="status"
								name="status"
								value={formik.values.status}
								onChange={formik.handleChange}
								error={formik.touched.status && Boolean(formik.errors.status)}
								helperText={formik.touched.status && formik.errors.status}
								fullWidth
								sx={{
									"& .MuiOutlinedInput-root": {
										borderRadius: "40px",
										backgroundColor: "#ECFAE2",
										"& fieldset": {
											borderColor: "transparent",
										},
										"&:hover fieldset": {
											borderColor: "#265700",
										},
										"&.Mui-focused fieldset": {
											borderColor: "#265700",
										},
									},
								}}
							/>
						</Grid>
						<Grid item xs={5}>
							<TextField
								placeholder="wallet"
								id="account"
								name="account"
								value={formik.values.account}
								onChange={formik.handleChange}
								error={formik.touched.account && Boolean(formik.errors.account)}
								helperText={formik.touched.account && formik.errors.account}
								fullWidth
								sx={{
									"& .MuiOutlinedInput-root": {
										borderRadius: "40px",
										backgroundColor: "#ECFAE2",
										"& fieldset": {
											borderColor: "transparent",
										},
										"&:hover fieldset": {
											borderColor: "#265700",
										},
										"&.Mui-focused fieldset": {
											borderColor: "#265700",
										},
									},
								}}
							/>
						</Grid>
						<Grid item xs={10}>
							<Typography>Dirección</Typography>
						</Grid>
						<Grid item xs={5}>
							<TextField
								placeholder="Street Name"
								id="streetName"
								name="streetName"
								value={formik.values.streetName}
								onChange={formik.handleChange}
								error={
									formik.touched.streetName && Boolean(formik.errors.streetName)
								}
								helperText={
									formik.touched.streetName && formik.errors.streetName
								}
								fullWidth
								sx={{
									"& .MuiOutlinedInput-root": {
										borderRadius: "40px",
										backgroundColor: "#ECFAE2",
										"& fieldset": {
											borderColor: "transparent",
										},
										"&:hover fieldset": {
											borderColor: "#265700",
										},
										"&.Mui-focused fieldset": {
											borderColor: "#265700",
										},
									},
								}}
							/>
						</Grid>
						<Grid item xs={5}>
							<TextField
								placeholder="Street Number"
								id="streetNumber"
								name="streetNumber"
								type="number"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">#</InputAdornment>
									),
								}}
								value={formik.values.streetNumber}
								onChange={formik.handleChange}
								error={
									formik.touched.streetNumber &&
									Boolean(formik.errors.streetNumber)
								}
								helperText={
									formik.touched.streetNumber && formik.errors.streetNumber
								}
								fullWidth
								sx={{
									"& .MuiOutlinedInput-root": {
										borderRadius: "40px",
										backgroundColor: "#ECFAE2",
										"& fieldset": {
											borderColor: "transparent",
										},
										"&:hover fieldset": {
											borderColor: "#265700",
										},
										"&.Mui-focused fieldset": {
											borderColor: "#265700",
										},
									},
								}}
							/>
						</Grid>
						<Grid item xs={5}>
							<TextField
								placeholder="City"
								id="city"
								name="city"
								value={formik.values.city}
								onChange={formik.handleChange}
								error={formik.touched.city && Boolean(formik.errors.city)}
								helperText={formik.touched.city && formik.errors.city}
								fullWidth
								sx={{
									"& .MuiOutlinedInput-root": {
										borderRadius: "40px",
										backgroundColor: "#ECFAE2",
										"& fieldset": {
											borderColor: "transparent",
										},
										"&:hover fieldset": {
											borderColor: "#265700",
										},
										"&.Mui-focused fieldset": {
											borderColor: "#265700",
										},
									},
								}}
							/>
						</Grid>
						<Grid item xs={5}>
							<TextField
								placeholder="State"
								id="state"
								name="state"
								value={formik.values.state}
								onChange={formik.handleChange}
								error={formik.touched.state && Boolean(formik.errors.state)}
								helperText={formik.touched.state && formik.errors.state}
								fullWidth
								sx={{
									"& .MuiOutlinedInput-root": {
										borderRadius: "40px",
										backgroundColor: "#ECFAE2",
										"& fieldset": {
											borderColor: "transparent",
										},
										"&:hover fieldset": {
											borderColor: "#265700",
										},
										"&.Mui-focused fieldset": {
											borderColor: "#265700",
										},
									},
								}}
							/>
						</Grid>
						<Grid item xs={5}>
							<TextField
								placeholder="ZIP code"
								id="zipCode"
								name="zipCode"
								type="number"
								value={formik.values.zipCode}
								onChange={formik.handleChange}
								error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
								helperText={formik.touched.zipCode && formik.errors.zipCode}
								fullWidth
								sx={{
									"& .MuiOutlinedInput-root": {
										borderRadius: "40px",
										backgroundColor: "#ECFAE2",
										"& fieldset": {
											borderColor: "transparent",
										},
										"&:hover fieldset": {
											borderColor: "#265700",
										},
										"&.Mui-focused fieldset": {
											borderColor: "#265700",
										},
									},
								}}
							/>
						</Grid>
						<Grid item xs={5}></Grid>

						<Grid item xs={10}>
							<Typography>Contrato</Typography>
						</Grid>
						<Grid item xs={5}>
							<TextField
								placeholder="Contract type"
								id="contractName"
								name="contractName"
								value={formik.values.contractName}
								onChange={formik.handleChange}
								error={
									formik.touched.contractName &&
									Boolean(formik.errors.contractName)
								}
								helperText={
									formik.touched.contractName && formik.errors.contractName
								}
								fullWidth
								sx={{
									"& .MuiOutlinedInput-root": {
										borderRadius: "40px",
										backgroundColor: "#ECFAE2",
										"& fieldset": {
											borderColor: "transparent",
										},
										"&:hover fieldset": {
											borderColor: "#265700",
										},
										"&.Mui-focused fieldset": {
											borderColor: "#265700",
										},
									},
								}}
							/>
						</Grid>
						<Grid item xs={5}>
							<TextField
								placeholder="Deposit"
								id="deposit"
								name="deposit"
								type="number"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">$</InputAdornment>
									),
								}}
								value={formik.values.deposit}
								onChange={formik.handleChange}
								error={formik.touched.deposit && Boolean(formik.errors.deposit)}
								helperText={formik.touched.deposit && formik.errors.deposit}
								fullWidth
								sx={{
									"& .MuiOutlinedInput-root": {
										borderRadius: "40px",
										backgroundColor: "#ECFAE2",
										"& fieldset": {
											borderColor: "transparent",
										},
										"&:hover fieldset": {
											borderColor: "#265700",
										},
										"&.Mui-focused fieldset": {
											borderColor: "#265700",
										},
									},
								}}
							/>
						</Grid>
						<Grid item xs={5}>
							<TextField
								placeholder="Rent"
								id="rent"
								name="rent"
								type="number"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">$</InputAdornment>
									),
								}}
								value={formik.values.rent}
								onChange={formik.handleChange}
								error={formik.touched.rent && Boolean(formik.errors.rent)}
								helperText={formik.touched.rent && formik.errors.rent}
								fullWidth
								sx={{
									"& .MuiOutlinedInput-root": {
										borderRadius: "40px",
										backgroundColor: "#ECFAE2",
										"& fieldset": {
											borderColor: "transparent",
										},
										"&:hover fieldset": {
											borderColor: "#265700",
										},
										"&.Mui-focused fieldset": {
											borderColor: "#265700",
										},
									},
								}}
							/>
						</Grid>
						<Grid item xs={5}></Grid>
						<Grid item xs={10}>
							<Button
								sx={{
									marginTop: "16px",
								}}
							>
								<label htmlFor="files">Subi tu contrato de alquiler</label>
								<input
									placeholder="Contrato.pdf"
									type="file"
									id="files"
									style={{ visibility: "hidden" }}
									onChange={(e) => convertBase44(e.target.files)}
								/>
							</Button>
						</Grid>
						<Grid item xs={10}>
							<Button
								variant="contained"
								sx={{
									backgroundColor: "#265700",
									marginRight: "6em",
								}}
							>
								Cancelar
							</Button>
							<Button
								variant="contained"
								type="submit"
								sx={{
									backgroundColor: "#265700",
								}}
							>
								Siguiente
							</Button>
						</Grid>
					</Grid>
				</Box>
			</form>
		</>
	);
}
