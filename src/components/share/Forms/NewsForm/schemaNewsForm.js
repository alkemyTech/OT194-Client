import * as Yup from 'yup';
const required = 'es un campo requerido';
const length = 'debe tener al menos 6 caracteres';

export const newsFormSchema = Yup.object().shape({
	name: Yup.string().min(6, `El titulo ${length}`).required(`El titulo ${required}`),
	content: Yup.string().required(`El contenido ${required}`)
});
