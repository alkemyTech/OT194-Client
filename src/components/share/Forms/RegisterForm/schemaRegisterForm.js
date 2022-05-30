import * as Yup from 'yup';
<<<<<<< HEAD
const required = 'This field is required';
const passwordLength =
  'Password should be at least 6 characters long. Please try again';

export const registerFormSchema = Yup.object().shape({
	firstName: Yup.string().required(required),
	lastName: Yup.string().required(required),
	email: Yup.string().email().required(required),
	password: Yup.string().min(6, passwordLength)
=======
const invalidEmail = 'El correo electrónico no es válido';
const emailRequired = 'Por favor ingrese su correo electrónico';
const passwordRequired = 'Por favor ingrese una contraseña';
const password2Required = 'Por favor confirme su contraseña';
const passwordLength = 'La contraseña debe tener al menos 6 caracteres';
const passwordsMustMatch = 'Las contraseñas no coinciden';

export const registerFormSchema = Yup.object().shape({
	firstName: Yup.string().required('Por favor ingrese su nombre'),
	lastName: Yup.string().required('Por favor ingrese su apellido'),
	email: Yup.string().email(invalidEmail).required(emailRequired),
	password: Yup.string().min(6, passwordLength).required(passwordRequired),
	password2: Yup
		.string()
		.min(6, passwordLength)
		.required(password2Required)
		.oneOf([Yup.ref('password'), null], passwordsMustMatch)
>>>>>>> 5cfcf5591ca5b2448b2d1dbd94433ac836b4ee72
});
