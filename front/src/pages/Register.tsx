import { Box, Typography, Card, TextField, Button, Grid } from "@mui/material";

export default function Register() {
	return (
		<>
			<Box>
				<Typography>Subir contrato</Typography>
				<Typography>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmodtempor incididunt ut labore et dolore magna aliqua.
				</Typography>
				<TextField placeholder="Contrato.pdf"></TextField>
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
									<TextField placeholder="Nombre y apellido"></TextField>
								</Grid>
								<Grid item xs={6}>
									<TextField placeholder="DNI"></TextField>
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
							<Grid marginTop={8} container spacing={2}>
								<Grid item xs={6}>
									<Button variant="contained">Cancelar</Button>
								</Grid>
								<Grid item xs={6}>
									<Button variant="contained">Siguiente</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</>
	);
}
