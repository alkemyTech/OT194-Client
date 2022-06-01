import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronRight,
	faChevronLeft
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CarouselImg = styled.img`
  height: 246px;
  opacity: 0;
  transition: 1s;
  width: 100%;
  &.loaded {
    opacity: 1;
  }
`;

const CarouselDivTxt = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px auto 5px;
  opacity: 0;
  transition: 1s;
  width: 77%;
  &.loaded {
    opacity: 1;
  }
  @media (min-width: 1024px) {
    width: 45%;
  }
`;

function Slider (props) {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [selectedImage, setSelectedImage] = useState(props.arr[0].imageUrl);
	const [selectedText, setSelectedText] = useState(props.arr[0].text);
	const [selectedCampo, setSelectedCampo] = useState(props.arr[0].campo);
	const [loaded, setLoaded] = useState(false);

	const prev = () => {
		setLoaded(false);
		setTimeout(() => {
			const prevIndex =
        selectedIndex > 0 ? selectedIndex - 1 : props.arr.length - 1;
			setSelectedIndex(prevIndex);
			setSelectedImage(props.arr[prevIndex].imageUrl);
			setSelectedText(props.arr[prevIndex].text);
			setSelectedCampo(props.arr[prevIndex].campo);
		}, 700);
	};
	const next = () => {
		setLoaded(false);
		setTimeout(() => {
			const nextIndex =
        selectedIndex < props.arr.length - 1 ? selectedIndex + 1 : 0;
			setSelectedIndex(nextIndex);
			setSelectedImage(props.arr[nextIndex].imageUrl);
			setSelectedText(props.arr[nextIndex].text);
			setSelectedCampo(props.arr[nextIndex].campo);
		}, 700);
	};
	return (
		<>
			<div className=" relative my-5">
				<CarouselImg
					src={selectedImage}
					className={loaded ? 'loaded' : ''}
					onLoad={() => setLoaded(true)}
					alt="novedades"
				/>

				<button
					type="button"
					onClick={prev}
					className="flex items-center p-2 border-0 text-base rounded-full text-gray-600 bg-white hover:bg-gray-100 absolute left-5 top-1/2"
				>
					<FontAwesomeIcon icon={faChevronLeft} className=" h-3.5 w-3.5" />
				</button>
				<button
					type="button"
					onClick={next}
					className="flex items-center p-2 border-0 text-base rounded-full text-gray-600 bg-white hover:bg-gray-100 absolute right-5  top-1/2"
				>
					<FontAwesomeIcon icon={faChevronRight} className=" h-3.5 w-3.5" />
				</button>
			</div>
			<CarouselDivTxt className={loaded ? 'loaded' : ''}>
				<h1 className="font-semibold">{selectedCampo}</h1>
				<p className="w-full text-left  mt-0">{selectedText}</p>
			</CarouselDivTxt>
		</>
	);
}

Slider.propTypes = {
	arr: PropTypes.array
};

export default Slider;
