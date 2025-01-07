import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import { MENU } from '../constants/common';
import Gods from '../pages/gods/Gods';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />}></Route>
			{MENU.map(item => (
				<Route
					key={item.id}
					element={<Gods mythology={item.mythologyContent} />}
					path={item.link}
				></Route>
			))}
		</Routes>
	);
};
export default Router;
