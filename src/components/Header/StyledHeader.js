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
`;
