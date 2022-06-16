import * as Yup from 'yup';
const required = 'es un campo requerido';
const messageLength = 'de tener un maximo de 150 caracteres';
const valid = 'no es válido';

export const contactFormSchema = Yup.object().shape({
	name: Yup.string().required(`El nombre ${required}`),
	email: Yup.string().email(`El correo ${valid}`).required(`El correo ${required}`),
	message: Yup.string().max(150, `El mensaje ${messageLength}`)
});
