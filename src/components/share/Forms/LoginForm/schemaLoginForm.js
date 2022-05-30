import * as Yup from 'yup';
const invalidEmail = 'El correo electrónico no es válido';
const passwordRequired = 'Por favor ingrese una contraseña';
const passwordLength = 'La contraseña debe tener al menos 6 caracteres';

export const loginFormSchema = Yup.object().shape({
	email: Yup.string().email(invalidEmail).required('Por favor ingrese su correo electrónico'),
	password: Yup.string().min(6, passwordLength).required(passwordRequired)
});
