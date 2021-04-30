import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
function App() {
	return (
		<div className='App'>
			<HashRouter basename="/">
				
				<Route  path='/' exact component={About}/>
				<Route  path='/about' exact component={About}/>
				<Route  path='/portfolio'exact component={Portfolio}/>
                <Route  path='/contact'exact component={Contact} />
			
				</HashRouter>
		</div>
	);
}

export default App;
