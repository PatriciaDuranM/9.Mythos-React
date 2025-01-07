import styled from 'styled-components';
import { FONT_WEIGHT, FONTS } from '../../styles/FontsStyles';
import { COLORS } from '../../styles/Colors';

const StyledMainGods = styled.main`
	padding-top: 28px;
	display: flex;
	flex-direction: column;
	gap: 28px;
	padding-inline: 20px;
	align-items: center;
`;

const StyledTitle = styled.h2`
	font-size: 32px;
	font-family: ${FONTS.cinzel};
	font-weight: ${FONT_WEIGHT.black};
	color: ${COLORS.gold};
	margin: 0px;
	text-align: center;
`;

const StyledTabsBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 335px;
`;
const StyledTab = styled.button`
	width: 100px;
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid
		${({ $color, $isActive }) => ($isActive ? $color : COLORS.lightGold)};
	font-size: 14px;
	font-family: ${FONTS.playfair};
	font-weight: ${FONT_WEIGHT.bold};
	color: ${({ $color, $isActive }) => ($isActive ? $color : COLORS.lightGold)};
	background-color: transparent;

	@media screen and (width>768px) {
		width: 125px;
	}

	@media screen and (width>1024px) {
		width: 150px;
	}
`;

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-block: 24px;
	gap: 24px;
`;
const StyledName = styled.h3`
	font-size: 24px;
	font-family: ${FONTS.cinzel};
	font-weight: ${FONT_WEIGHT.bold};
	color: ${COLORS.gold};
	margin: 0px;
`;
const StyledImage = styled.img`
	width: 227px;
	height: 227px;

	@media screen and (width>768px) {
		width: 300px;
		height: 300px;
	}

	@media screen and (width>1024px) {
		width: 1190px;
	}
`;

const StyledDivider = styled.div`
	width: 84px;
	height: 24px;
	background-image: url('/assets/images/common/separator-h.png');
	background-repeat: no-repeat;

	@media screen and (width>768px) {
		background-image: url('/assets/images/common/separator-v.png');
	}

	@media screen and (width>1024px) {
		width: 184px;
		background-image: url('/assets/images/common/separator-h.png');
	}
`;

const StyledText = styled.p`
	color: #fff;
	text-align: center;
	font-size: 14px;
	font-weight: ${FONT_WEIGHT.regular};
	line-height: 28px;
	letter-spacing: 0.56px;
	margin: 0px;

	@media screen and (width>768px) {
		text-align: left;
	}

	@media screen and (width>1024px) {
		font-size: 16px;
		line-height: 40px;
		letter-spacing: 4%;
	}
`;

export {
	StyledTitle,
	StyledTabsBox,
	StyledTab,
	StyledContainer,
	StyledName,
	StyledImage,
	StyledDivider,
	StyledText,
	StyledMainGods
};
