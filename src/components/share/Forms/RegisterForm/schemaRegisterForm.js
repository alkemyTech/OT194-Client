import * as Yup from 'yup';
const required = 'This field is required';
const passwordLength =
  'Password should be at least 6 characters long. Please try again';

export const registerFormSchema = Yup.object().shape({
	firstName: Yup.string().required(required),
	lastName: Yup.string().required(required),
	email: Yup.string().email().required(required),
	password: Yup.string().min(6, passwordLength)
});
