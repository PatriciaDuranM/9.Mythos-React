import styled from 'styled-components';
import { FONTS } from '../../styles/FontsStyles';
import { COLORS } from '../../styles/Colors';

const StyledFooter = styled.footer`
	height: 114px;
	padding-inline: 36px;
	padding-top: 34px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	background-color: ${COLORS.darkGrey};

	@media screen and (width>768px) {
		flex-direction: row;
		padding-block: 12px;
		justify-content: space-between;
		height: 55px;
		align-items: center;
	}

	@media screen and (width>1024px) {
		flex-direction: row;
		padding-block: 26px;
		justify-content: space-between;
		height: 55px;
		align-items: center;
	}
`;

const StyledImgContainer = styled.div`
	width: 297px;
	height: 30px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	@media screen and (width>768px) {
		align-self: flex-end;
		width: 226px;
		gap: 24px;
	}
`;

const StyledText = styled.h4`
	font-style: italic;
	font-size: 14px;
	font-family: ${FONTS.playfair};
	color: ${COLORS.gold};
	margin: 0px;
`;

export { StyledFooter, StyledText, StyledImgContainer };
