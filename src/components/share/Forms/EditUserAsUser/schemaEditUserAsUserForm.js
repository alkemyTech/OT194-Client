import * as Yup from 'yup';

export const editUserFormAsUserSchema = Yup.object().shape({
	firstName: Yup.string().required('Por favor ingrese un nombre'),
	lastName: Yup.string().required('Por favor ingrese un apellido')
});
