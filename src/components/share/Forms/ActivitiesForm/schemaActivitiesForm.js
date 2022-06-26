import * as Yup from 'yup';
const required = 'es un campo requerido';
const length = 'debe tener al menos 6 caracteres';

export const activitiesFormSchema = Yup.object().shape({
	name: Yup.string().min(6, `El nombre ${length}`).required(`El nombre ${required}`),
	content: Yup.string().required(`El contenido ${required}`)
});
