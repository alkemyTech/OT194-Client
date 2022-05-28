import React from 'react';
import { Formik, Field, Form } from 'formik';
export const Login = () => {
	const startValues = {
		email: '',
		password: ''
	};

	const validateEmail = (value) => {
		let errorMessageEmail;

		if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
			errorMessageEmail = 'Email invalido';
		}

		return errorMessageEmail;
	};

	const validatePassword = (value) => {
		let errorMessagePassword;

		if (value.length < 6) {
			errorMessagePassword = 'Constraseña invalida';
		}
		return errorMessagePassword;
	};

	return (
		<div className="h-full">
			<div className="flex justify-center items-center md:grid md:grid-cols-2">
				<div className="m-auto ">
					<p className="form-login">Bienvenido</p>
					<h2 className="form-title">Inicia sesón en tu cuenta!</h2>
					<Formik
						initialValues={startValues}
						onSubmit={(values, { setSubmitting }) => {
							alert(JSON.stringify(values));
							setSubmitting(false);
						}}
					>
						{({ errors }) => (
							<Form className=" flex h-full flex-col rounded-lg m-2 space-y-4">
								<Field className="form-login p-3"
									validate={validateEmail}
									type="email"
									name="email"
									placeholder="Email"
								/>
								{errors.email ? <div>{errors.email}</div> : null}
								<Field
									className="form-login p-3 "
									validate={validatePassword}
									id="password"
									type="password"
									name="password"
									placeholder="Contraseña"
								/>
								{errors.password ? <div>{errors.password}</div> : null}
								<button className="form-login-button p-3 bg-redPure text-white text-base" type="submit">Inicia sesión</button>
							</Form>
						)}
					</Formik>
					<p className="form-footer mt-17">
            No tienes cuenta?{' '}
						<a className="text-redPure no-underline cursor-pointer" onClick={ null /* navigate /register */}>
              Registrate
						</a>
					</p>
				</div>

				<div className="hidden sm:hidden md:flex md:place-items-end md:h-full md:w-full">
					<img
						className=" md:h-screen md:w-full "
						src="images/login-hands.png"
						alt="manos unidas"
					/>
				</div>
			</div>
		</div>
	);
};
