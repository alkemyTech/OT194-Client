import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PropTypes } from 'prop-types';

import '../../../../custom.css';
import { useDispatch } from 'react-redux';
import {
	createActivity,
	updateActivity
} from '../../../../features/activities/activitiesSlice';

const initialForm = {
	name: '',
	content: ''
};

export const ActivitiesForm = ({ activity }) => {
	const [form, setForm] = useState(activity || initialForm);

	const dispatch = useDispatch();

	const handleNameChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (activity) {
			dispatch(updateActivity(form));
		} else {
			dispatch(createActivity(form));
		}
		setForm(initialForm);
	};
	return (
		<div className='mx-auto container w-2/3 max-w-md'>
			<form onSubmit={handleSubmit}>
				<label>Name</label>
				<br />
				<input
					type='text'
					onChange={handleNameChange}
					name='name'
					value={form.name}
				/>
				<br />
				<label>Content</label>
				<CKEditor
					editor={ClassicEditor}
					config={{
						toolbar: {
							items: [
								'heading',
								'|',
								'alignment',
								'|',
								'bold',
								'italic',
								'strikethrough',
								'underline',
								'subscript',
								'superscript',
								'|',
								'link',
								'|',
								'bulletedList',
								'numberedList',
								'todoList',
								'-', // break point
								'fontfamily',
								'fontsize',
								'fontColor',
								'fontBackgroundColor',
								'|',
								'code',
								'codeBlock',
								'|',
								'insertTable',
								'|',
								'outdent',
								'indent',
								'blockQuote',
								'|',
								'undo',
								'redo'
							],
							shouldNotGroupWhenFull: true
						}
					}}
					data={form.content}
					onReady={(editor) => {
						// You can store the "editor" and use when it is needed.
						console.log('Editor is ready to use!', editor);
					}}
					onChange={(event, editor) => {
						const data = editor.getData();

						setForm({ ...form, content: data });
					}}
				/>
				<button
					type='submit'
					className='mx-2 text-white bg-redOng hover:bg-redOng focus:ring rounded border-0 py-3 px-6 cursor-pointer hover:opacity-50'
				>
					Submit
				</button>
			</form>
		</div>
	);
};

ActivitiesForm.propTypes = {
	activity: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
		content: PropTypes.string
	})
};
