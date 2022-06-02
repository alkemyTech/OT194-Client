import * as Yup from 'yup';
const required = 'This field is required';

export const editUserFormSchema = Yup.object().shape({
	firstName: Yup.string().required(required),
	lastName: Yup.string().required(required),
	roleId: Yup.number().required()
});
