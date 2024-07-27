// Computing RGB VALUE = (0,0,0) -> (255,255,255)
// Hex Value = (1,2,3,4,5,6,7,8,9,A,B,C,D,E,F)

import { useState } from 'react';

/**
 
   6 random numbers
   -> hex (2f5f7f)
   -> 2f - 5f - 7f
   -> 32+15(47) - 80+15(95) - 122+15(127)
   -> rgb (47 95 127)


 */
export default function RandomColor() {
	const [randomHex, setRandomHex] = useState(new Array(0));
	const backgroundColor = `#${randomHex.join('')}`;
	const [rgb, setRGB] = useState(new Array(0));

	type HexValue = {
		id: number | string;
		value: number;
	};

	const hexValue: HexValue[] = [
		{ id: '1', value: 1 },
		{ id: '2', value: 2 },
		{ id: '3', value: 3 },
		{ id: '4', value: 4 },
		{ id: '5', value: 5 },
		{ id: '6', value: 6 },
		{ id: '7', value: 7 },
		{ id: '8', value: 8 },
		{ id: '9', value: 9 },
		{ id: 'a', value: 10 },
		{ id: 'b', value: 11 },
		{ id: 'c', value: 12 },
		{ id: 'd', value: 13 },
		{ id: 'e', value: 14 },
		{ id: 'f', value: 15 },
	];

	function handleRandomHex() {
		const cpyRandomHex = [];

		let val = '';
		for (let i = 0; i <= 6; i++) {
			const r = Math.floor(Math.random() * hexValue.length);
			val += hexValue[r].id;

			if (val.length === 2) {
				cpyRandomHex.push(val);
				val = '';
			}
		}

		setRandomHex(cpyRandomHex);
		const rgbValue: number[] = [];

		cpyRandomHex.forEach((val) => {
			let rgbVal = 0;
			val.split('').forEach((c, i) => {
				const curr = hexValue.filter((hex) => hex.id === c);

				if (i === 0) {
					rgbVal += curr[0].value * 16;
				} else {
					rgbVal += curr[0].value * 1;
					rgbValue.push(rgbVal);
				}
			});
			setRGB(rgbValue);
		});
	}
	// console.log(Math.floor(Math.random() * 16777215).toString(16));
	return (
		<>
			<div
				className="bg-changer"
				style={{
					backgroundColor,
				}}
			></div>
			<div className="container">
				<div>
					<h1>Random Color Generator</h1>
					<button onClick={handleRandomHex}>Get Random Hex</button>
					<p>{randomHex.length !== 0 ? `#${randomHex.join('')}` : ''}</p>
					<p>
						{rgb.length !== 0 ? `rgb (${rgb[0]}, ${rgb[1]}, ${rgb[2]})` : ''}
					</p>
				</div>
			</div>
		</>
	);
}
