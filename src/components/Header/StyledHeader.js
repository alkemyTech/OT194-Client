import styled, { css } from 'styled-components';

const sharedProps = css`
	align-items: center;
	display: flex;
	justify-content: space-between;
`;

export const HeaderContainer = styled.div`
	/* background-color: red; */
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	${sharedProps};
	height: 80px;
	padding: 10px;
`;

export const Logo = styled.div`
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	height: 80px;
	width: 80px;
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
	color: black;
	font-style: 16px;
	font-weight: bold;
	text-decoration: none;
`;

export const MenuHambIcon = styled.div`
	height: 60px;
	justify-content: center;
	${sharedProps};
	width: 60px;
	@media screen and (min-width: 450px) {
		display: none;
	}
`;

export const MenuMobile = styled.div`
	bottom: 0;
	left: 0;
	position: absolute;
	right: 0;
	top: 100px;
	@media screen and (min-width: 450px) {
		display: none;
	}
`;

export const MenuMobileList = styled.ul`
	flex-direction: column;
	${sharedProps};
	list-style: none;
	padding: 0;
`;

export const MyButton = styled.button`
background-color: ${(props) => (props.red ? '#FF0000' : 'white')};
border: ${(props) => (props.red ? 'none' : '1px black solid')};
border-radius: 20px;
color: ${(props) => (props.red ? 'white' : 'black')};
cursor: pointer;
margin-bottom: 10px;
padding: 10px 20px;
@media screen and (min-width: 450px) {
margin-right: 10px;
}
`;

export const ButtonsContainer = styled.div`
align-items: center;
display: flex;
flex-direction: column;
justify-content: space-between;

@media screen and (min-width: 450px) {
flex-direction: row;
}
`;
