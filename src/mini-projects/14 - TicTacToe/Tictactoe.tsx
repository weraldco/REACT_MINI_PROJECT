import { useEffect, useState } from 'react';

export default function Tictactoe() {
	const buttonList = [
		{
			id: 0,
			value: '',
		},
		{
			id: 1,
			value: '',
		},
		{
			id: 2,
			value: '',
		},
		{
			id: 3,
			value: '',
		},
		{
			id: 4,
			value: '',
		},
		{
			id: 5,
			value: '',
		},
		{
			id: 6,
			value: '',
		},
		{
			id: 7,
			value: '',
		},
		{
			id: 8,
			value: '',
		},
	];

	const [buttons, setButtons] = useState(buttonList);
	const [winner, setWinner] = useState<string | null>(null);
	const [turn, setTurn] = useState('x');
	const [gameStatus, setGameStatus] = useState('');
	const [restart, setRestart] = useState(false);
	const [gameStart, setGameStart] = useState(false);
	function checkWinner(): string | null {
		const combinationList = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i <= combinationList.length; i++) {
			if (combinationList[i] !== undefined) {
				const [a, b, c] = combinationList[i];

				if (
					buttons[a].value === buttons[b].value &&
					buttons[b].value === buttons[c].value
				) {
					return buttons[a].value;
				}
			}
		}
		return null;
	}

	function handleClick(id: number) {
		if (!gameStart || winner || buttons[id].value != '') return;
		setTurn(turn === 'x' ? 'o' : 'x');
		const copyButtons = [...buttons];
		copyButtons[id].value = turn;

		setButtons(copyButtons);
		setWinner(checkWinner());
	}
	function handleStartGame() {
		if (!gameStart) {
			setGameStart(true);
		} else {
			setGameStart(false);
			setButtons(buttonList);
			setWinner(null);
			setTurn('x');
		}
	}
	useEffect(() => {
		if (!winner && buttons.every((button) => button.value != '')) {
			setGameStatus(`This game is a draw, restart the game..`);
		} else if (winner) {
			setGameStatus(`${winner.toUpperCase()} Won the game!`);
			return;
		} else {
			setGameStatus(`Next player is ${turn.toUpperCase()}`);
		}
	}, [turn, winner]);
	return (
		<>
			<div className="grid place-items-center p-5">
				<div className="grid grid-cols-3 gap-2">
					{buttons.map((button) => (
						<button
							className="tictac-btn"
							onClick={() => handleClick(button.id)}
							key={button.id}
						>
							{button.value.toUpperCase()}
						</button>
					))}
				</div>

				<span className="mt-5 font-bold text-lg">{gameStatus}</span>
				<button
					className="p-1 bg-blue-500 text-sm rounded-full px-3 text-white hover:bg-blue-400"
					onClick={() => handleStartGame()}
				>
					{buttons.every((btn) => btn.value !== '' || gameStart)
						? 'Restart'
						: 'Start the game'}
				</button>
			</div>
		</>
	);
}
