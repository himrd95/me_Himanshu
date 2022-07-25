import { ASSETS } from '../constants/links';
import { projects } from '../constants/Projects';

export const assetsPromise = () => {
	const allPromise = [];
	const assets = [...projects, { img: ASSETS.PROFILE }];
	assets?.forEach(async (asset) => {
		allPromise.push(
			new Promise((resolve, reject) => {
				fetch(asset.img)
					.then((response) => response)
					.then((data) => resolve(data))
					.catch((err) => reject(err));
			}),
		);
	});

	return allPromise;
};
