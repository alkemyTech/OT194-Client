import { Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { ContactForm } from '../components/share/Forms/ContactForm';
import { contactFormSchema } from '../components/share/Forms/ContactForm/schemaContactForm';
import { createContact } from '../features/contacts/contactsSlice';
import Swal from 'sweetalert2';

export const ContactUs = () => {
	const startValues = {
		name: '',
		email: '',
		message: ''
	};
	const dispatch = useDispatch();
	const handleSubmit = async (values) => {
		const data = await dispatch(createContact(values));
		if (data.meta.requestStatus === 'fulfilled') {
			Swal.fire(
				'Enviado!',
				'El contacto se ha establecido',
				'success'
			);
		};
	};

	return (
		<div className="flex flex-col mx-auto my-14 overflow-hidden gap-8" style={{ width: '85vw', maxWidth: '600px' }}>
			<div className="flex flex-col">
				<h1 className="m-0">Nuestra mision</h1>
				<p className="m-0">
          Mejorar la calidad de vida de niños y familias en situación de
          vulnerabilidad en el barrio La Cava, otorgando un cambio de rumbo en
          cada individuo a través de la educación, salud, trabajo, deporte,
          responsabilidad y compromiso.
				</p>
			</div>
			<div className="flex flex-col mx-auto w-full">
				<h2 className="mx-auto m-0 mb-2">¡Contactate con nosotros!</h2>
				<Formik
					data-testid="test-id-formik"
					enableReinitialize
					initialValues={startValues}
					validationSchema={contactFormSchema}
					onSubmit={(values, { resetForm }) => {
						handleSubmit(values);
						resetForm();
					}}
					component={ContactForm}
				/>
			</div>
		</div>
	);
};
