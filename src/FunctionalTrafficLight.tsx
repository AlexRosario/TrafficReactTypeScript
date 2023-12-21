import * as React from "react";
import { useState } from "react";

export const FunctionalTrafficLight = () => {
	const [lightState, setLightState] = useState<number>(0);

	const lightChange = (): void => {
		setLightState((lightState) =>
			lightState < 2 ? lightState + 1 : (lightState = 0)
		);
	};

	const getColor = (index: number): string => {
		if (
			(index === 0 && lightState === 0) ||
			(index === 1 && lightState === 1) ||
			(index === 2 && lightState === 2)
		) {
			return index === 0 ? "red" : index === 1 ? "yellow" : "green";
		}
		return "black";
	};

	return (
		<div className="traffic-light-box">
			<h2>Functional Traffic Light</h2>
			<div className="traffic-light">
				<div className={`circle ${getColor(0)}`}></div>
				<div className={`circle ${getColor(1)}`}></div>
				<div className={`circle ${getColor(2)}`}></div>
			</div>
			<button className="next-state-button" onClick={lightChange}>
				Next State
			</button>
		</div>
	);
};
