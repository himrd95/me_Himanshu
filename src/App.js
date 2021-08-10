import React,{ useRef } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { ThemeContext } from './ContextProvider/ThemeContext';

function App () {
	const {newTheme, open, handleMenu} = React.useContext(ThemeContext);
	const scrollRef = useRef();
	const handleTop = () => {
		console.log('clicked', scrollRef);
		scrollRef.current.scrollTop = 0;
	};
	return (
		<div className="App">
			<div
					style={{background: `${newTheme.menuBackground}`, color: `${newTheme.title}`, left:`${open?"-100vw":'0'}` }}
					className='links'
				>
					<a onClick={handleMenu} href="#home">Home</a>
					<a onClick={handleMenu} href="#about">About</a>
					<a onClick={handleMenu} href="#techStacks">Profeciencies</a>
					<a onClick={handleMenu} href="#projects">Projects</a>
					<a onClick={handleMenu} href="#contact">Contact</a>
				</div>
			<Navbar />
			<Home scrollRef={scrollRef} />
			{/* <button onClick={handleTop}>On Top</button> */}
		</div>
	);
}

export default App;
