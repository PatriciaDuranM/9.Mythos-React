import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MainGodPage from '../../components/MainGodPage/MainGodPage';

const Gods = ({ mythology }) => {
	return (
		<>
			<Header />
			<MainGodPage mythology={mythology} />
			<Footer />
		</>
	);
};

export default Gods;
