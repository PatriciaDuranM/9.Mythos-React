import styled from 'styled-components';
import { FONT_WEIGHT, FONTS } from '../../styles/FontsStyles';
import { COLORS } from '../../styles/Colors';

const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-inline: 20px;
	padding-block: 24px;
	gap: 24px;
`;
const StyledTitle = styled.h2`
	font-size: 32px;
	font-family: ${FONTS.cinzel};
	text-align: center;
	color: ${COLORS.gold};
	margin: 0px;

	@media screen and (width>1024px) {
		font-size: 46px;
	}
`;

const StyledText = styled.p`
	margin: 0px;
	font-size: 14px;
	text-align: center;
	color: ${COLORS.lightGold};
	line-height: 28px;
	letter-spacing: 4%;
	@media screen and (width>1024px) {
		font-size: 16px;
	}
`;

const StyledDivider = styled.img`
	width: 84px;
	height: 24px;

	@media screen and (width>1024px) {
		height: 53px;
		width: 184px;
	}
`;

const StyledContainer = styled.div`
	display: flex;
	width: 335px;
	flex-direction: row;
	flex-wrap: wrap;
	row-gap: 16px;
	column-gap: 27px;

	@media screen and (width>768px) {
		width: 768px;
		flex-direction: row;
		gap: 16px;
		padding-inline: 20px;
		flex-wrap: nowrap;
	}
	@media screen and (width>1024pxpx) {
		width: 860px;
		flex-direction: row;
		justify-content: space-between;
		padding-inline: 0px;
		gap: 20px;
	}
`;

const StyledBox = styled.div`
	width: 154px;
	height: 179px;
	padding-block: 12px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 24px;
	background-color: ${COLORS.grey};
	border: 1px solid ${COLORS.gold};

	@media screen and (width>768px) {
		width: 175px;
	}
`;

const StyledImgBox = styled.div`
	width: 84px;
	height: 94px;
	margin-inline: auto;
`;

const StyledTextBox = styled.div`
	margin: 0px;
	width: 100px;
	height: 31px;
	border-radius: 8px;
	border: 0.5px solid ${COLORS.gold};
	text-align: center;
	font-size: 18px;
	font-family: ${FONTS.playfair};
	padding-top: 4px;
	letter-spacing: 4%;
	color: ${COLORS.gold};
`;

const StyledEndText = styled.h3`
	font-family: ${FONTS.playfair};
	font-weight: ${FONT_WEIGHT.light};
	font-size: 24px;
	text-align: left;
	font-style: italic;
`;

export {
	StyledMain,
	StyledTitle,
	StyledText,
	StyledDivider,
	StyledContainer,
	StyledBox,
	StyledTextBox,
	StyledImgBox,
	StyledEndText
};
