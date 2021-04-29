import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
function App() {
	return (
		<div className='App'>
			<HashRouter basename="/">
				<Switch>
				<Route exact path='/' component={About}/>
				<Route  path='/about' component={About}/>
				<Route  path='/portfolio' component={Portfolio}/>
                <Route  path='/contact' component={Contact} />
				</Switch>
				</HashRouter>
		</div>
	);
}

export default App;
