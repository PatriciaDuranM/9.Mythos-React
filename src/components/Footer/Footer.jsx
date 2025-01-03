import { StyledFooter, StyledImgContainer, StyledText } from './footer.styles';

const Footer = () => {
	return (
		<StyledFooter>
			<StyledImgContainer>
				<img
					src='public/assets/images/common/play-store.png'
					alt='Get the App on Playstore for Android'
				/>
				<img
					src='public/assets/images/common/app-store.png'
					alt='Get the App on App Store for Apple'
				/>
			</StyledImgContainer>
			<StyledText>© 2024 Mythos. Todos los derechos reservados.</StyledText>
		</StyledFooter>
	);
};

export default Footer;
