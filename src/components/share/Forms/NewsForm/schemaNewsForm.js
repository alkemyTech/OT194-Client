import * as Yup from 'yup';
const required = 'es un campo requerido';
const length = 'debe tener al menos 6 caracteres';

export const newsFormSchema = Yup.object().shape({
	title: Yup.string().min(6, `El titulo ${length}`).required(`El titulo ${required}`),
	category: Yup.string().required(`La categoria ${required}`),
	content: Yup.string().required(`El contenido ${required}`)
});
