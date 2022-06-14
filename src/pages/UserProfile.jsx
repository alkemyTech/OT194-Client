import React from 'react';
import { Formik, Field, Form } from 'formik';

function UserProfile () {
	const [editing, setEditing] = React.useState(false);
	const [formValues, setFormValues] = React.useState({
		email: 'prueba@gmail.com',
		name: 'Pepito',
		lastname: 'Perez'
	});

	console.log('formValues', formValues);

	const submit = (values) => {
		setEditing(false);
	};

	return (
		<>
			<div className="flex flex-col items-center mt-6 m-8 shadow-lg">
				<h1 className="text-center">Hola User</h1>
				<img className="w-48 rounded-lg" src="./images/user.png" alt=""/>
				<div className="text-left">
					<h3 className="text-center">Información de Usuario</h3>
					{!editing && (
						<div className="flex flex-col m-4">
							<strong className="text-slate-500">Nombre</strong>
							<strong className="ml-6">{ formValues.name }</strong>
							<strong className="text-slate-500">Apellido</strong>
							<strong className="ml-6">{ formValues.lastname }</strong>
							<strong className="text-slate-500">Email</strong>
							<strong className="ml-6">{ formValues.email }</strong>
							<h4 className="text-center">Acciones</h4>
							<button
								className="bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-4"
								onClick={() => setEditing(true)}
							>
								Editar
							</button>
							<button className="bg-red-500 text-white font-bold py-2 px-4 border border-red-700 rounded">Eliminar cuenta</button>
						</div>
					)}
					{editing && (
						<Formik
							initialValues={{ name: '', lastname: '', email: '' }}
							onSubmit={submit}
						>
							<Form className="flex h-full flex-col rounded-lg m-2 space-y-4">
								<Field className="form-login p-3"
									name="name"
									placeholder="Nombre"
									value={formValues.name}
									onChange={(event) => setFormValues({ ...formValues, name: event.target.value })}
								/>
								<Field className="form-login p-3"
									name="lastname"
									placeholder="Apellido"
									value={formValues.lastname}
									onChange={(event) => setFormValues({ ...formValues, lastname: event.target.value })}
								/>
								<Field className="form-login p-3"
									type="email"
									name="email"
									placeholder="Email"
									value={formValues.email}
									onChange={(event) => setFormValues({ ...formValues, email: event.target.value })}
								/>
								<button className="bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-4" type="submit">Guardar</button>
							</Form>
						</Formik>
					)}
				</div>
			</div>
		</>
	);
}

export {
	UserProfile
};
