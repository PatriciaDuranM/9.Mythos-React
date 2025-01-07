import { Link } from 'react-router-dom';
import {
	StyledBox,
	StyledContainer,
	StyledDivider,
	StyledEndText,
	StyledImgBox,
	StyledMain,
	StyledText,
	StyledTextBox,
	StyledTitle
} from './mainHome.styles';

const MainHome = () => {
	return (
		<>
			<picture>
				<source
					media='(min-width: 1024px)'
					srcSet='/assets/images/home/banner-desktop.jpg'
				/>
				<source
					media='(min-width: 768px)'
					srcSet='/assets/images/home/banner-tablet.jpg'
				/>
				<source
					media='(min-width: 360px)'
					srcSet='/assets/images/home/banner-mobile.jpg'
				/>
				<img src='/assets/images/home/banner-mobile.jpg' />
			</picture>
			<StyledMain>
				<StyledTitle>DISCOVER MYTHOLOGIES</StyledTitle>
				<StyledText>
					Tempor porta porta placerat lobortis, ex. gravida placerat convallis.
					sodales. diam Cras gravida Lorem maximus luctus maximus placerat est.
					faucibus maximus elit. elit. ipsum risus nec quam nisi nisi maximus Ut
					risus cursus sollicitudin. placerat quam Lorem tincidunt eu lacus ex
					fringilla lobortis, Donec quis quis
				</StyledText>
				<StyledDivider src='/assets/images/common/separator-h.png' />
				<StyledContainer>
					<Link to='/roman'>
						<StyledBox>
							<img src='/assets/images/home/roman-logo.png' alt='Roman' />
							<StyledTextBox>ROMAN</StyledTextBox>
						</StyledBox>
					</Link>
					<Link to='/greek'>
						<StyledBox>
							<img src='/assets/images/home/greek-logo.png' alt='Greek' />
							<StyledTextBox>GREEK</StyledTextBox>
						</StyledBox>
					</Link>
					<Link to='/egyptian'>
						<StyledBox>
							<img src='/assets/images/home/egyptian-logo.png' alt='Egyptian' />
							<StyledTextBox>EGYPTIAN</StyledTextBox>
						</StyledBox>
					</Link>
					<Link to='/nordic'>
						<StyledBox>
							<StyledImgBox>
								<img src='/assets/images/home/nordic-logo.png' alt='Nordic' />
							</StyledImgBox>
							<StyledTextBox>NORDIC</StyledTextBox>
						</StyledBox>
					</Link>
				</StyledContainer>
				<StyledEndText>
					"Incluso el Olimpo tembló ante el poder del trueno de Zeus."
				</StyledEndText>
				<StyledDivider src='/assets/images/common/separator-h.png' />
			</StyledMain>
		</>
	);
};

export default MainHome;
