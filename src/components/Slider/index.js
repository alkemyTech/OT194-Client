/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronRight,
	faChevronLeft
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CarouselImg = styled.img`
	opacity: 0;
	transition: 1s;
	width: 100%;
	&.loaded {
		opacity: 1;
	}
`;

function Slider (props) {
	const { arr } = props;
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [selectedImage, setSelectedImage] = useState('');
	const [selectedText, setSelectedText] = useState('');
	const [loaded, setLoaded] = useState(true);
	useEffect(() => {
		setSelectedImage(arr[0]?.imageUrl);
		setSelectedText(arr[0]?.text);
		if (arr > 0) {
			arr.sort((a, b) => {
				return a.order - b.order;
			});
		}
	}, [arr]);

	const prev = () => {
		setLoaded(false);
		setTimeout(() => {
			const prevIndex = selectedIndex > 0 ? selectedIndex - 1 : arr.length - 1;
			setSelectedIndex(prevIndex);
			setSelectedImage(arr[prevIndex].imageUrl);
			setSelectedText(arr[prevIndex].text);
			setLoaded(true);
		}, 700);
	};
	const next = () => {
		setLoaded(false);
		setTimeout(() => {
			const nextIndex = selectedIndex < arr.length - 1 ? selectedIndex + 1 : 0;
			setSelectedIndex(nextIndex);
			setSelectedImage(arr[nextIndex].imageUrl);
			setSelectedText(arr[nextIndex].text);
			setLoaded(true);
		}, 700);
	};

	return (
		<>

			<div className=' bg-neutral-100 relative my-5 w-full items-center justify-center flex' style={{ height: '500px' }}>
				{arr.length === 0
					? (<div className="flex  font-sans text-black w-full items-center justify-center" style={{ height: '500px' }}>
						<p>Imagen no encontrada</p>
					</div>)
					: (<CarouselImg
						src={selectedImage}
						className={` h-max ${loaded ? 'loaded' : ''}`}
						alt={selectedText}
					/>)}

				{arr.length <= 1
					? (
						<></>
					)
					: (<>
						<button
							type='button'
							onClick={prev}
							className='flex items-center p-2 border-0 text-base rounded-full text-gray-600 bg-white hover:bg-gray-100 cursor-pointer absolute left-5 top-1/2'
						>
							<FontAwesomeIcon icon={faChevronLeft} className=' h-3.5 w-3.5' />
						</button>
						<button
							type='button'
							onClick={next}
							className='flex items-center p-2 border-0 text-base rounded-full text-gray-600 bg-white hover:bg-gray-100  cursor-pointer absolute right-5  top-1/2'
						>
							<FontAwesomeIcon icon={faChevronRight} className=' h-3.5 w-3.5' />
						</button></>)}

			</div>
		</>
	);
}

Slider.propTypes = {
	arr: PropTypes.array,
	'arr[].imageUrl': PropTypes.string,
	'arr[].text': PropTypes.string,
	'arr[].order': PropTypes.number
};

export default Slider;
