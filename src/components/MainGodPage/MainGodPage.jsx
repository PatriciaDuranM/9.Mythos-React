import { useState } from 'react';
import {
	StyledContainer,
	StyledDivider,
	StyledImage,
	StyledMainGods,
	StyledName,
	StyledTab,
	StyledTabsBox,
	StyledText,
	StyledTitle
} from './MainGodPage.styles';

const MainGodPage = ({ mythology }) => {
	const [selectedTab, setSelectedTab] = useState('gods');
	const [selectedInfo, setSelectedInfo] = useState(mythology.gods[1]);

	const tabChange = tab => {
		setSelectedTab(tab);
		setSelectedInfo(mythology[tab][1]);
	};

	return (
		<>
			<picture>
				<source media='(min-width: 1024px)' srcSet={mythology.bannerDesk} />
				<source media='(min-width: 768px)' srcSet={mythology.bannerTab} />
				<source media='(min-width: 360px)' srcSet={mythology.bannerMob} />
				<img src={mythology.bannerMob} />
			</picture>
			<StyledMainGods>
				<StyledTitle>{mythology.name}</StyledTitle>
				<StyledTabsBox>
					<StyledTab onClick={() => tabChange('gods')}>GODS</StyledTab>
					<StyledTab onClick={() => tabChange('creatures')}>CREATURE</StyledTab>
					<StyledTab onClick={() => tabChange('myths')}>MYTHS</StyledTab>
				</StyledTabsBox>
				<StyledContainer>
					<StyledName>{selectedInfo.title.toUpperCase()}</StyledName>
					<StyledImage src={selectedInfo.imgMob} />
					<StyledDivider />
					<StyledText>{selectedInfo.text}</StyledText>
					<StyledTabsBox>
						<StyledTab>JUPITER</StyledTab>
						<StyledTab>MARS</StyledTab>
						<StyledTab>VENUS</StyledTab>
					</StyledTabsBox>
				</StyledContainer>
			</StyledMainGods>
		</>
	);
};

export default MainGodPage;
