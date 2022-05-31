import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

// TiThMenu
import {
	ButtonsContainer,
	HeaderContainer,
	MyLink,
	Logo,
	MenuHambIcon,
	MenuItem,
	MenuList,
	MenuMobile,
	MenuMobileList,
	MyButton
} from './StyledHeader';

export const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const path = useLocation();
	const [active, setActive] = useState('');
	const handleMenu = () => {
		setMenuOpen(!menuOpen);
	};
	const navLinks = [
		{
			text: 'Inicio',
			route: '/'
		},
		{
			text: 'Nosotros',
			route: '/staff'
		},
		{
			text: 'Novedades',
			route: '/news'
		},
		{
			text: 'Testimonios',
			route: '/reviews'
		},
		{
			text: 'Contacto',
			route: ''
		},
		{
			text: 'Contribuye',
			route: '/donate'
		}
	];
	useEffect(() => {
		setActive(`${path.pathname}`);
	}, [path]);
	const scrollBottom = () => {
		window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
	};
	return (
		<HeaderContainer>
			<Logo
				style={{ backgroundImage: 'url(/images/assets/logo_somos_mas.png)' }}
			/>

			<MenuList>
				{navLinks.map((link, i) => (
					<MenuItem key={i} active={link.route === active ? 'true' : ''}>
						{link.text === 'Contacto'
							? (
								<MyLink to={`${path.pathname}`} onClick={scrollBottom}>{link.text}</MyLink>
							)
							: (<MyLink to={link.route} >
								{link.text}
							</MyLink>)}

					</MenuItem>
				))}
				<ButtonsContainer>
					<MyLink to='/login'><MyButton red={false}>Log in</MyButton></MyLink>
					<MyLink to='/register'><MyButton red>Registrate</MyButton></MyLink>
				</ButtonsContainer>

			</MenuList>
			<MenuHambIcon>
				{menuOpen
					? (
						<GrClose fontSize={25} onClick={handleMenu} />
					)
					: (
						<GiHamburgerMenu fontSize={25} onClick={handleMenu} />
					)}
			</MenuHambIcon>
			{menuOpen && (
				<MenuMobile>
					<MenuMobileList>
						{navLinks.map((link, i) => (
							<MenuItem key={i} active={link.route === path ? 'true' : ''}>
								{link.text === 'Contacto'
									? (
										<MyLink to={`${path.pathname}`} onClick={scrollBottom()}>{link.text}</MyLink>
									)
									: (<MyLink to={link.route} >
										{link.text}
									</MyLink>)}

							</MenuItem>
						))}
					</MenuMobileList>
					<ButtonsContainer>
						<MyLink to='/login'><MyButton red={false}>Log in</MyButton></MyLink>
						<MyLink to='/register'><MyButton red>Registrate</MyButton></MyLink>
					</ButtonsContainer>
				</MenuMobile>
			)}
		</HeaderContainer>
	);
};
