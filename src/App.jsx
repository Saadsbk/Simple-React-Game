import './App.css'
import React from 'react';
import { useState } from 'react'

const Die = React.memo((props) => {
	const Handler = (idx, arr) => {
		let temp = [...arr];
		temp[idx].isPressed = !temp[idx].isPressed;
		props.Click(temp);
	};

	console.log(`Rendering Die ${props.idx}`);

	return (
		<button
			className={props.isPressed ? "button-pressed" : "button-not-pressed"}
			onClick={() => { Handler(props.idx, props.DieArr) }}
		>
			{props.val}
		</button>
	);
});

function App() {
	const generateRandomDie = () => {
		return Array.from({ length: 10 }, () => ({
			value: Math.ceil(Math.random() * 6),
			isPressed: false
		}));
	};

	const [dice, setDice] = useState(generateRandomDie);

	const checkWin = () => dice.every((die) => die.isPressed) && dice.every((die) => die.value === dice[0].value);

	const rollDie = () => {
		setDice((prevDice) =>
			prevDice.map((die) =>
				die.isPressed ? die : {
					value: Math.ceil(Math.random() * 6),
					isPressed: false
				}
			)
		);
	};

	const diceElements = dice.map((die, idx) => (
		<Die
			key={idx}
			isPressed={die.isPressed}
			val={die.value}
			idx={idx}
			DieArr={dice}
			Click={setDice}
		/>
	));

	return (
		<>
			<header>
				<h1>Dice Game</h1>
			</header>
			<section className="prompt">
				<p>Click on dice with the same number to freeze them. Roll until all are same!</p>
			</section>
			<main>
				<div className="co">
					<div className="die-container">
						{diceElements}
					</div>
					<div className="msg-container">
						{checkWin() && <p>You Won!</p>}
					</div>
					<div className="roll-die-container">
						<button onClick={rollDie} disabled={checkWin()}>Roll</button>
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
