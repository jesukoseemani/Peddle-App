import GlobalStyles from './components/GlobalStyles';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GitHub from './pages/GitHub';

function App() {
	return (
		<>
			<GlobalStyles />

			<Switch>
				<Route path={['/', '/homepage']} exact>
					<HomePage />
				</Route>

				<Route path='/github' exact>
					<GitHub />
				</Route>
			</Switch>
		</>
	);
}

export default App;
