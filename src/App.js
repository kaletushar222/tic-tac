import './App.css';
import { Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  	let initialState = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	];
  	const [gameArray, setGameArray] = useState(initialState)
	const [player, setPlayer] = useState("player1");
	const [gameOver, setGameOver] = useState(false);
	const [winner, setWinner] = useState("");
	const [count, setCount] = useState(0);

	const checkGameResult = () =>{
		console.log(gameArray, gameArray[0][0], gameArray[0][1], gameArray[0][2]);
		//Row wise winner
		if ((gameArray[0][0] === gameArray[0][1]) && ( gameArray[0][0] === gameArray[0][2])){
			if (gameArray[0][0]){
				setWinner(gameArray[0][0]);
				setGameOver(true);
				console.log(1);
			}
		}
		else if ((gameArray[1][0] === gameArray[1][1]) && (gameArray[1][0] === gameArray[1][2])){
			if (gameArray[1][0]){
				setWinner(gameArray[1][0]);
				setGameOver(true);
				console.log(2);
			}
		}
		else if ((gameArray[2][0] === gameArray[2][1]) && ( gameArray[2][0] === gameArray[2][2])){
			if (gameArray[2][0]){
				setWinner(gameArray[2][0]);
				setGameOver(true);
				console.log(3);
			}
		}

		//Diagonal winner
		else if ((gameArray[0][0] === gameArray[1][1]) && ( gameArray[0][0] === gameArray[2][2])){
			if (gameArray[0][0]){
				setWinner(gameArray[0][0]);
				setGameOver(true);
				console.log(4);
			}
		}
		else if ((gameArray[0][2] === gameArray[1][1]) && ( gameArray[0][2] === gameArray[2][0])){
			if (gameArray[0][2]){
				setWinner(gameArray[0][2]);
				setGameOver(true);
				console.log(5);
			}
		}

		//Column wise winner
		else if ((gameArray[0][0] === gameArray[1][0]) && ( gameArray[0][0] === gameArray[2][0])){
			if (gameArray[0][0]){
				setWinner(gameArray[0][0]);
				setGameOver(true);
				console.log(6);
			}
		}
		else if ((gameArray[0][1] === gameArray[1][1]) && ( gameArray[0][1] === gameArray[2][1])){
			if (gameArray[0][1]){
				setWinner(gameArray[0][1]);
				setGameOver(true);
				console.log(7);
			}
		}
		else if ((gameArray[0][2] === gameArray[1][2]) && ( gameArray[0][0] === gameArray[2][2])){
			if (gameArray[0][2]){
				setWinner(gameArray[0][2]);
				setGameOver(true);
				console.log(8);
			}
		}
		else if (count === 8){
			setWinner("Draw");
			setGameOver(true);
		}
	};

	const selectItem = (rowIndex, colIndex) =>{
		gameArray[rowIndex][colIndex] = player;
		setGameArray(gameArray);
		if (player === "player1"){
			setPlayer("player2");
		}
		else {
			setPlayer("player1");
		}
		setCount(count + 1);
		checkGameResult();
	};


	return (
		<div className="App">
			<header>
				Tic Tac Toe
			</header>
			<body> 
				<br/><br/>
				{
					winner && <span>winner is { winner }</span>
				}
				<br/><br/>
				<div className="game-container">
					{
						gameArray.map((row, rowIndex)=>{
							return (
								<Row key={rowIndex}>
									{
										row.map((col, colIndex)=>{
											return (
												<Col sm={4} md={4} lg={4}>
													<br/>
														<Button variant={ col === "player1" ? "primary" : "secondary" } className={ col } onClick={ () => selectItem(rowIndex, colIndex) } disabled={ col || gameOver }>
															{  !col ? "Select" : col }
														</Button>
													<br/>
												</Col>
											)
										})
									}
								</Row>
							);
						})
					}
				</div>
			</body>
		</div>
  	);
}

export default App;
