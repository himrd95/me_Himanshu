import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
	return (
		<React.Fragment>
			<div className='components'>
				<Navbar />
				<Home />
			</div>
		</React.Fragment>
	);
}

export default App;
