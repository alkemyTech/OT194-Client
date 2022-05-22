import styled, { css } from 'styled-components';

const sharedProps = css`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const HeaderContainer = styled.div`
	/* background-color: red; */
	height: 80px;
	${sharedProps};
	padding: 10px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled.div`
	width: 80px;
	height: 80px;
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
`;

export const MenuList = styled.ul`
	list-style: none;
	${sharedProps};
	@media screen and (max-width: 450px) {
		display: none;
	}
`;

export const MenuItem = styled.li`
	padding: 10px 20px;
`;

export const Link = styled.a`
	text-decoration: none;
	color: black;
	font-style: 16px;
	font-weight: bold;
`;

export const MenuHambIcon = styled.div`
	width: 60px;
	height: 60px;
	${sharedProps};
	justify-content: center;
	@media screen and (min-width: 450px) {
		display: none;
	}
`;

export const MenuMobile = styled.div`
	position: absolute;
	top: 100px;
	left: 0;
	bottom: 0;
	right: 0;
	@media screen and (min-width: 450px) {
		display: none;
	}
`;

export const MenuMobileList = styled.ul`
	list-style: none;
	${sharedProps};
	flex-direction: column;
	padding: 0;
`;

export const MyButton = styled.button`
	background-color: ${(props) => (props.red ? '#FF0000' : 'white')};
	border: ${(props) => (props.red ? 'none' : '1px black solid')};
	border-radius: 20px;
	color: ${(props) => (props.red ? 'white' : 'black')};
	padding: 10px 20px;
	cursor: pointer;
	margin-bottom: 10px;
	@media screen and (min-width: 450px) {
		margin-right: 10px;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;

	@media screen and (min-width: 450px) {
		flex-direction: row;
	}
`;
