import { useRef } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App () {
	const scrollRef = useRef();
	const handleTop = () => {
		console.log('clicked', scrollRef);
		scrollRef.current.scrollTop = 0;
	};
	return (
		<div className="App">
			<Navbar />
			<Home scrollRef={scrollRef} />
			{/* <button onClick={handleTop}>On Top</button> */}
		</div>
	);
}

export default App;
