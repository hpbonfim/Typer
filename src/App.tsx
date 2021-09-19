import React from "react"
import Typer from "./Components/Typer"

const App: React.FC = () => {
	return (
		<section className="background">
			<svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%">
				<filter id="space">
					<feTurbulence baseFrequency="0.1"></feTurbulence>
					<feColorMatrix values="0.3 -4.8 2.6 -5 -1.5 0.5 3.1 -4.2 1 -4 3.7 -2.4 -0.3 -4 -3.7 -4.4 3.9 -4.9 -0.6 4.7"></feColorMatrix>
				</filter>
				<rect width="100%" height="100%" fill="#fff"></rect>
				<rect width="100%" height="100%" filter="url(#space)"></rect>
			</svg>
			<Typer />
		</section>
	)
}

export default App
