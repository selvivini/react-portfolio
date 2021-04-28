import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
function App() {
	return (
		<div className='App'>
			<HashRouter>
				<Route exact path='/' component={About}  />
				<Route exact path='/about' component={About} />
				<Route exact path='/portfolio' component={Portfolio} />
                <Route exact path='/contact' component={Contact} />
			</HashRouter>
		</div>
	);
}

export default App;
