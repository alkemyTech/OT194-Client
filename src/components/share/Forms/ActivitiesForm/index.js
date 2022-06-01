import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PropTypes } from 'prop-types';

const initialForm = {
	name: '',
	content: ''
};

export const ActivitiesForm = ({ activity }) => {
	const [form, setForm] = useState(activity || initialForm);

	const handleNameChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	console.log(form);
	return (
		<div className='mx-auto container w-100'>
			<form>
				<label>Name</label>
				<input type="text" onChange={handleNameChange} name='name' value={form.name}/>

				<label>Content</label>
				<CKEditor
					editor={ ClassicEditor }
					data={form.content}
					onReady={ editor => {
					// You can store the "editor" and use when it is needed.
						console.log('Editor is ready to use!', editor);
					} }
					onChange={ (event, editor) => {
						const data = editor.getData();

						setForm({ ...form, content: data });
					} }
				/>

			</form>
		</div>

	);
};

ActivitiesForm.propTypes = {
	activity: PropTypes.shape({
		name: PropTypes.string,
		content: PropTypes.string
	})
};
