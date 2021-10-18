import GlobalStyles from './components/GlobalStyles';
import { Switch, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GitHub from './pages/GitHub';
import { AnimatePresence } from 'framer-motion';

function App() {
	const location = useLocation();

	return (
		<>
			<GlobalStyles />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route path={['/', '/homepage']} exact>
						<HomePage />
					</Route>

					<Route path='/github' exact>
						<GitHub />
					</Route>
				</Switch>
			</AnimatePresence>
		</>
	);
}

export default App;
