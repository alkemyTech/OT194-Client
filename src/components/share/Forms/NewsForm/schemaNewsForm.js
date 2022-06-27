import * as Yup from 'yup';
const required = 'es un campo requerido';
const maxLength = 'debe tener menos caracteres';
const minLength = 'debe tener más caracteres';

export const newsFormSchema = Yup.object().shape({
	name: Yup.string().min(6, `El nombre ${minLength}`).max(2500, `El nombre ${maxLength}`).required(`El nombre ${required}`),
	content: Yup.string().max(2500, `El contenido  ${maxLength}`).required(`El contenido ${required}`)
});
