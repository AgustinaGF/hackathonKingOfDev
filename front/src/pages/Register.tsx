import { Box, Typography, Card, TextField, Button, Grid } from "@mui/material";
import { useFormik ,useField} from 'formik';
import {object , number , string ,ObjectSchema}from 'yup';
import { User } from "../typings/index";


const validationSchema :ObjectSchema<User> = object( {
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
} );

//REEMPLAZAR TODA LA INFO QUE VIENE DE WALLET DE HASH Y DE CONTRATO POR LOS DATOS DE ESTADO PARA MANDAR EL FORM 
export default function Register() {
	const formik = useFormik( {
		initialValues: {
			fullName: 'fullName',
			email: 'email@example.com',
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
		onSubmit: ( values ) => {
			alert( JSON.stringify( values, null, 2 ) );
		},
	} );
	return (
		<>
			<form onSubmit={formik.handleSubmit}>
				<Typography>Subir contrato</Typography>
				<Typography>
					Lorem ipsum ddolor sit amet, consectetur adipiscing elit, sed do
					eiusmodtempor incididunt ut labore et dolore magna aliqua.
				</Typography>
				{/* <TextField placeholder="Contrato.pdf"></TextField> */}
				<Button variant="contained">Subir</Button>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2} sx={{ flexGrow: 1 }}>
						<Grid
							item
							display="flex"
							flexDirection={"column"}
							justifyContent={"center"}
						>
							<Typography>Datos del Contrato</Typography>
							<Typography>Datos del Usuario</Typography>
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<TextField  
										id="fullName"
										name="fullName"
										placeholder="fullName"
										
										value={formik.values.fullName}
										onChange={formik.handleChange}
										error={formik.touched.fullName && Boolean( formik.errors.fullName )}
										helperText={formik.touched.fullName && formik.errors.fullName}></TextField>
								</Grid>
								<Grid item xs={6}>
									<TextField 
										placeholder="DNI"
										id="dni"
										name="dni"
										type='number'
										value={formik.values.dni}
										onChange={formik.handleChange}
										error={formik.touched.dni && Boolean(formik.errors.dni )}
										helperText={formik.touched.dni && formik.errors.dni}
										></TextField>
								</Grid>
							</Grid>
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<TextField 
									placeholder="Phone"
										id="phone"
										name="phone"
										type='number'
										value={formik.values.phone}
										onChange={formik.handleChange}
										error={formik.touched.phone && Boolean( formik.errors.phone )}
										helperText={formik.touched.phone && formik.errors.phone}
									></TextField>
								</Grid>
								<Grid item xs={6}>
									<TextField placeholder="Email"
										id="email"
										name="email"
										type='email'
										value={formik.values.email}
										onChange={formik.handleChange}
										error={formik.touched.email && Boolean( formik.errors.email )}
										helperText={formik.touched.email && formik.errors.email}
									
									></TextField>
								</Grid>
							</Grid>
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<TextField placeholder="Propietario o Inquilino"
										id="status"
										name="status"
										
										value={formik.values.status}
										onChange={formik.handleChange}
										error={formik.touched.status && Boolean( formik.errors.status )}
										helperText={formik.touched.status && formik.errors.status}
									
									
									></TextField>
								</Grid>
								<Grid item xs={6}>
									<TextField placeholder="wallet"
										id="account"
										name="account"
										
										value={formik.values.account}
										onChange={formik.handleChange}
										error={formik.touched.account && Boolean( formik.errors.account )}
										helperText={formik.touched.account && formik.errors.account}
									
									
									></TextField>
								</Grid>
							</Grid>
							<Typography>Dirección</Typography>
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<TextField 
										placeholder="Street Name"
										id="streetName"
										name="streetName"
										
										value={formik.values.streetName}
										onChange={formik.handleChange}
										error={formik.touched.streetName && Boolean( formik.errors.streetName )}
										helperText={formik.touched.streetName && formik.errors.streetName}
									
									></TextField>
								</Grid>
								<Grid item xs={6}>
									<TextField placeholder="Street Number"
										id="streetNumber"
										name="streetNumber"
										type="number"
										value={formik.values.streetNumber}
										onChange={formik.handleChange}
										error={formik.touched.streetNumber && Boolean( formik.errors.streetNumber )}
										helperText={formik.touched.streetNumber && formik.errors.streetNumber}
									></TextField>
								</Grid>
							</Grid>
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<TextField placeholder="City"
										id="city"
										name="city"

										value={formik.values.city}
										onChange={formik.handleChange}
										error={formik.touched.city && Boolean( formik.errors.city )}
										helperText={formik.touched.city && formik.errors.city}
									
									></TextField>
								</Grid>
								<Grid item xs={6}>
									<TextField placeholder="State"
										id="state"
										name="state"

										value={formik.values.state}
										onChange={formik.handleChange}
										error={formik.touched.state && Boolean( formik.errors.state )}
										helperText={formik.touched.state && formik.errors.state}
									></TextField>
								</Grid>
							</Grid>
							<Grid item>
								<TextField placeholder="ZIP code"
									id="zipCode"
									name="zipCode"
									type="number"
									value={formik.values.zipCode}
									onChange={formik.handleChange}
									error={formik.touched.zipCode && Boolean( formik.errors.zipCode )}
									helperText={formik.touched.zipCode && formik.errors.zipCode}
								
								></TextField>
							</Grid>
							<Typography>Contrato</Typography>
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<TextField placeholder="Contract type"
										id="contractName"
										name="contractName"

										value={formik.values.contractName}
										onChange={formik.handleChange}
										error={formik.touched.contractName && Boolean( formik.errors.contractName )}
										helperText={formik.touched.contractName && formik.errors.contractName}

									
									></TextField>
								</Grid>
								<Grid item xs={6}>
									<TextField placeholder="Deposit"
										id="deposit"
										name="deposit"
									    type="number"
										value={formik.values.deposit}
										onChange={formik.handleChange}
										error={formik.touched.deposit && Boolean( formik.errors.deposit )}
										helperText={formik.touched.deposit && formik.errors.deposit}
									></TextField>
								</Grid>
								<Grid item xs={6}>
									<TextField placeholder="Rent"
										id="rent"
										name="rent"
										type="number"
										value={formik.values.rent}
										onChange={formik.handleChange}
										error={formik.touched.rent && Boolean( formik.errors.rent )}
										helperText={formik.touched.rent && formik.errors.rent}
									
									></TextField>
								</Grid>
								
							</Grid>
							<Grid marginTop={8} container spacing={2}>
								<Grid item xs={6}>
									<Button variant="contained">Cancelar</Button>
								</Grid>
								<Grid item xs={6}>
									<Button variant="contained" type="submit">Siguiente</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</form>
		</>
	);
}
