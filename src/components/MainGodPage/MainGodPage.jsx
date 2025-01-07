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
	const [tabActive, setTabActive] = useState(0);
	const [subTabActive, setSubTabActive] = useState(0);
	const currentInfo = mythology.tabs[tabActive].subTabs[subTabActive];
	console.log(currentInfo);

	return (
		<>
			<picture>
				<source media='(min-width: 1024px)' srcSet={mythology.bannerDesk} />
				<source media='(min-width: 768px)' srcSet={mythology.bannerTab} />
				<source media='(min-width: 360px)' srcSet={mythology.bannerMob} />
				<img src='' />
			</picture>
			<StyledMainGods>
				<StyledTitle>{mythology.name}</StyledTitle>
				<StyledTabsBox>
					{mythology.tabs.map((tab, index) => (
						<StyledTab
							key={tab.id}
							$isActive={tabActive === index}
							$color={mythology.color}
							onClick={() => setTabActive(index)}
						>
							{tab.tabTitle}
						</StyledTab>
					))}
				</StyledTabsBox>
				<StyledContainer>
					<StyledName>{currentInfo.title}</StyledName>
					<picture>
						<source media='(min-width: 1024px)' srcSet={currentInfo.imgDesk} />
						<source media='(min-width: 768px)' srcSet={currentInfo.imgTab} />
						<source media='(min-width: 360px)' srcSet={currentInfo.imgMob} />
						<StyledImage src={currentInfo.imgMob} />
					</picture>
					<StyledDivider />
					<StyledText>{currentInfo.text}</StyledText>
					<StyledTabsBox>
						{mythology.tabs[tabActive].subTabs.map((subtab, index) => (
							<StyledTab
								key={subtab.id}
								$isActive={subTabActive === index}
								$color={mythology.color}
								onClick={() => setSubTabActive(index)}
							>
								{subtab.name.toUpperCase()}
							</StyledTab>
						))}
					</StyledTabsBox>
				</StyledContainer>
			</StyledMainGods>
		</>
	);
};

export default MainGodPage;
