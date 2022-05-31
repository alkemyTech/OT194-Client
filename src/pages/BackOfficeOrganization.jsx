import React, { useState } from 'react';
// import { CustomInput } from '../components/share/CustomInput';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';

export const BackOfficeOrganization = () => {
	const [image, setImage] = useState(undefined);

	const required = 'Este campo es requerido';
	const nameLength = 'El nombre debe tener 3 caracteres como minimo';
	const supportedFormats = ['image/jpg', 'image/jpeg', 'image/png'];

	const formSchema = Yup.object().shape({
		name: Yup.string().min(3, nameLength).required(required)
	});

	const startValues = {
		name: ''
	};

	const handleSubmit = (values) => {
		// Enviar solo el nombre
		if (!image) {
			return console.log(values);
		}

		// Enviar el nombre y el logo
		if (image && image.size < 50936250 && supportedFormats.includes(image.type)) {
			console.log(JSON.stringify(values), image);
		} else {
			console.log('No soportado');
		}
	};

	return (
		<div className="w-full flex">
			<div className="lg:w-96 mx-auto my-5">
				<h2 className="form-title">Información de la organización</h2>
				<Formik
					validationSchema={formSchema}
					initialValues={startValues}
					onSubmit={async (values, { setSubmitting }) => {
						setSubmitting(true);
						handleSubmit(values);
						setSubmitting(false);
						console.log('listo');
					}}
				>
					{({ errors, isSubmitting }) => (
						<Form className="flex flex-col">
							<h3 className="form-title">Nombre</h3>
							<Field className="form-login p-3"
								type="text"
								name="name"
								placeholder="Nombre de organizacion"
							/>
							{errors.name ? <div className="text-redOng my-1">{errors.name}</div> : null}
							<h3 className="form-title">Logo</h3>
							<input
								className="form-login p-3"
								type="file"
								name='logo'
								onChange={(e) => setImage(e.target.files[0])}
								placeholder='Logo'
							/>
							{errors.logo ? <div className="text-redOng my-1">{errors.logo}</div> : null}
							<button disabled={isSubmitting} className="form-login-button mt-5 p-3 bg-redOng text-white" type="submit">Guardar</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};
