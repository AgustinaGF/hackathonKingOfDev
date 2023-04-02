import { Box, Typography, Card, TextField, Button, Grid } from "@mui/material";
import { useFormik, useField } from "formik";
import { object, number, string, ObjectSchema } from "yup";
import { User } from "../typings/index";
import { Formik, Form, FormikProps } from "formik";
import { ChangeEvent } from "react";

const validationSchema: ObjectSchema<User> = object({
	fullName: string(),
	email: string(),
	address: object({
		streetName: string(),
		streetNumber: string(),
		city: string(),
		state: string(),
		zipCode: number(),
	}),
	number: number(),
	dni: number(),
	status: string(),
	account: string(),
	contracts: object({
		name: string(),
		price: number(),
		transactionHash: string(),
		file: string(),
	}),
});

export default function Register() {
	const formik = useFormik({
		initialValues: {
			fullName: "Nombre y Apellido",
			email: "email@example.com",
			address: {
				streetName: "Av Siempre Viva",
				streetNumber: 121312,
				city: "CABA",
				state: "Buenos Aires",
				zipCode: 1022,
			},
			number: 2215774990,
			dni: 3902344,
			status: "Propietario",
			account: "0x98217389398700124",
			contracts: {
				name: "ALFREDO",
				price: "209802",
				transactionHash: "jgsaueier",
				file: "lsdkpeafpew",
			},
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
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

	return (
		<>
			<form onSubmit={formik.handleSubmit}>
				<Typography>Subir contrato</Typography>
				<Typography>
					Lorem ipsum ddolor sit amet, consectetur adipiscing elit, sed do
					eiusmodtempor incididunt ut labore et dolore magna aliqua.
				</Typography>

				<Typography>Datos del Usuario</Typography>
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
								value={formik.values.fullName}
								onChange={formik.handleChange}
								error={
									formik.touched.fullName && Boolean(formik.errors.fullName)
								}
								helperText={formik.touched.fullName && formik.errors.fullName}
								fullWidth
							/>
						</Grid>
						<Grid item xs={5}>
							<TextField
								placeholder="dni"
								id="dni"
								name="dni"
								type="number"
								fullWidth
								value={formik.values.dni}
								onChange={formik.handleChange}
								error={formik.touched.dni && Boolean(formik.errors.dni)}
								helperText={formik.touched.dni && formik.errors.dni}
							/>
						</Grid>
						<Grid item xs={5}>
							<TextField placeholder="Número de Telefono" fullWidth />
						</Grid>
						<Grid item xs={5}>
							<TextField placeholder="Email" fullWidth />
						</Grid>
						<Grid item xs={5}>
							<TextField placeholder="Propietario o Inquilino" fullWidth />
						</Grid>
						<Grid item xs={5}>
							<TextField placeholder="Account" fullWidth />
						</Grid>
						<Grid item xs={10}>
							<Typography>Dirección</Typography>
						</Grid>
						<Grid item xs={5}>
							<TextField placeholder="Calle" fullWidth />
						</Grid>
						<Grid item xs={5}>
							<TextField placeholder="Número de la casa" fullWidth />
						</Grid>
						<Grid item xs={5}>
							<TextField placeholder="Localidad" fullWidth />
						</Grid>
						<Grid item xs={5}>
							<TextField placeholder="Provincia" fullWidth />
						</Grid>
						<Grid item xs={5}>
							<TextField placeholder="Codigo Postal" fullWidth />
						</Grid>
						<Grid item xs={5}></Grid>

						<Grid item xs={10}>
							<Typography>Contrato</Typography>
						</Grid>
						<Grid item xs={5}>
							<TextField placeholder="Nombre de las partes" fullWidth />
						</Grid>
						<Grid item xs={5}>
							<TextField placeholder="Monto de contrato" fullWidth />
						</Grid>
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
							<Button variant="contained">Cancelar</Button>
							<Button variant="contained" type="submit">
								Siguiente
							</Button>
						</Grid>
					</Grid>
				</Box>
			</form>
		</>
	);
}
