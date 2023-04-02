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

	// Convert in base 64 our file
	const convertBase64 = (files: any) => {
		new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			console.log(files[0], "hhh");
			fileReader.readAsDataURL(files![0]);
			fileReader.onload = () => {
				const base64 = (fileReader.result as string).substring(
					(fileReader.result as string).indexOf(",") + 1
				);
				console.log(base64);
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
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2} sx={{ flexGrow: 1 }}>
						<Grid
							item
							display="flex"
							flexDirection={"column"}
							justifyContent={"center"}
						>
							<Typography>Datos del Usuario</Typography>
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<TextField
										id="fullName"
										name="fullName"
										placeholder="fullName"
										value={formik.values.fullName}
										onChange={formik.handleChange}
										error={
											formik.touched.fullName && Boolean(formik.errors.fullName)
										}
										helperText={
											formik.touched.fullName && formik.errors.fullName
										}
									></TextField>
								</Grid>
								<Grid item xs={6}>
									<TextField
										placeholder="dni"
										id="dni"
										name="dni"
										type="number"
										value={formik.values.dni}
										onChange={formik.handleChange}
										error={formik.touched.dni && Boolean(formik.errors.dni)}
										helperText={formik.touched.dni && formik.errors.dni}
									></TextField>
								</Grid>
							</Grid>
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<TextField placeholder="Número de Telefono"></TextField>
								</Grid>
								<Grid item xs={6}>
									<TextField placeholder="Email"></TextField>
								</Grid>
							</Grid>
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<TextField placeholder="Propietario o Inquilino"></TextField>
								</Grid>
								<Grid item xs={6}>
									<TextField placeholder="Account"></TextField>
								</Grid>
							</Grid>
							<Typography>Dirección</Typography>
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<TextField placeholder="Calle"></TextField>
								</Grid>
								<Grid item xs={6}>
									<TextField placeholder="Número de la casa"></TextField>
								</Grid>
							</Grid>
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<TextField placeholder="Localidad"></TextField>
								</Grid>
								<Grid item xs={6}>
									<TextField placeholder="Provincia"></TextField>
								</Grid>
							</Grid>
							<Grid item>
								<TextField placeholder="Codigo Postal"></TextField>
							</Grid>
							<Typography>Contrato</Typography>
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<TextField placeholder="Nombre de las partes"></TextField>
								</Grid>
								<Grid item xs={6}>
									<TextField placeholder="Monto de contrato"></TextField>
								</Grid>
							</Grid>
							<Grid container>
								<Grid item xs={8}>
									<label htmlFor="files">Subi tu contrato de alquiler</label>
									<input
										placeholder="Contrato.pdf"
										type="file"
										id="files"
										style={{ visibility: "hidden" }}
										onChange={(e) => convertBase64(e.target.files)}
									/>
								</Grid>
							</Grid>
							<Grid marginTop={8} container spacing={2}>
								<Grid item xs={6}>
									<Button variant="contained">Cancelar</Button>
								</Grid>
								<Grid item xs={6}>
									<Button variant="contained" type="submit">
										Siguiente
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</form>
		</>
	);
}
