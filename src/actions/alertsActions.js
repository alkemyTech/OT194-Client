export function showAlert (show, title, text) {
	const payload = {
		show,
		title,
		text
	};

	return {
		type: 'SHOW_ALERT',
		payload
	};
}

export function hideAlert () {
	const payload = {
		show: false,
		title: undefined,
		text: undefined
	};

	return {
		type: 'HIDE_ALERT',
		payload
	};
}
