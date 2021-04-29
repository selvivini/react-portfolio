import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Route exact path='/' component={About}  />
				<Route exact path='/about' component={About} />
				<Route exact path='/portfolio' component={Portfolio} />
                <Route exact path='/contact' component={Contact} />
			</BrowserRouter>
		</div>
	);
}

export default App;
