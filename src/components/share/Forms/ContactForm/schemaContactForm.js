import * as Yup from 'yup';
const required = 'This field is required';
const messageLength =
  'Message should be maximum 150 characters long';

export const contactFormSchema = Yup.object().shape({
	name: Yup.string().required(required),
	email: Yup.string().email().required(required),
	message: Yup.string().max(150, messageLength)
});
