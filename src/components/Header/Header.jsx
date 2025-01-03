import { Link } from 'react-router-dom';
import {
	StyledBar,
	StyledBox,
	StyledBurger,
	StyledItem,
	StyledMenu,
	StyledNavLink,
	StyledTitle
} from './header.styles';
import { MENU } from '../../constants/common';
import { useState } from 'react';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<StyledBar>
			<StyledBox>
				<Link to='/'>
					<StyledTitle>MYTHOS</StyledTitle>
				</Link>
				<StyledBurger
					onClick={() => setMenuOpen(!menuOpen)}
					src='public/assets/images/common/hamburger.png'
					alt='menu'
				/>
			</StyledBox>
			<nav>
				<StyledMenu $menuOpen={menuOpen}>
					{MENU.map(item => (
						<StyledItem key={item.id}>
							<StyledNavLink to={item.link}>{item.title}</StyledNavLink>
						</StyledItem>
					))}
				</StyledMenu>
			</nav>
		</StyledBar>
	);
};

export default Header;
