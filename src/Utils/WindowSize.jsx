import { useLayoutEffect, useState } from 'react';

function WindowSize () {
	const [
		size,
		setSize
	] = useState([
		0,
		0
	]);
	useLayoutEffect(() => {
		function updateSize () {
			setSize([
				window.screen.width,
				window.screen.height
			]);
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);
	return size;
}
export default WindowSize;
