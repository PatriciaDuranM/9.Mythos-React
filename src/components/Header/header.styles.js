import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';
import { FONT_WEIGHT, FONTS } from '../../styles/FontsStyles';
import { NavLink } from 'react-router-dom';

const StyledBar = styled.div`
	color: ${COLORS.gold};
	padding-inline: 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	position: relative;
	border-bottom: 2px solid ${COLORS.gold};

	@media screen and (width>1024px) {
		padding-inline: 72px;
	}
`;

const StyledTitle = styled.h1`
	font-family: ${FONTS.cinzel};
	font-size: 24px;
	font-weight: ${FONT_WEIGHT.bold};
`;

const StyledBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	align-items: center;

	@media screen and (width>768px) {
		margin-inline: auto;
	}
`;

const StyledBurger = styled.img`
	width: 24px;
	height: 17px;

	@media screen and (width>768px) {
		display: none;
	}
`;

const StyledMenu = styled.ul`
	z-index: 1;
	display: ${({ $menuOpen }) => ($menuOpen ? 'flex' : 'none')};
	flex-direction: column;
	width: 100%;
	position: absolute;
	left: 0px;
	top: 60px;
	background-color: ${COLORS.darkGrey};

	@media screen and (width>768px) {
		position: static;
		display: flex;
		flex-direction: row;
		gap: 16px;
		background-color: transparent;
	}
`;

const StyledItem = styled.li`
	width: 100%;
	height: 80px;
	display: flex;
	flex-direction: row;
	padding-left: 20px;
	align-items: center;
	justify-content: flex-start;
	border-bottom: 2px solid ${COLORS.gold};
	color: ${COLORS.gold};

	@media screen and (width>768px) {
		border-bottom: none;
	}
`;

const StyledNavLink = styled(NavLink)`
	font-size: 18px;
	font-family: ${FONTS.cinzel};
	font-weight: ${FONT_WEIGHT.bold};
	&.active {
		color: ${({ $color }) => $color};
	}
`;

export {
	StyledBar,
	StyledTitle,
	StyledBurger,
	StyledMenu,
	StyledItem,
	StyledNavLink,
	StyledBox
};
