import * as React from "react";
import { useState } from "react";

export const FunctionalTrafficLight = () => {
	const [lightState, setLightState] = useState<number>(0);

	const lightChange = (): void => {
		setLightState((lightState) => (lightState += 1)); //Did one better. Moved the index matching logic to getColor so that lightState now also preserves number of clicks.
	};

	const getColor = (index: number): string => {
		if (lightState % 3 === index) {
			return ["green", "red", "yellow"][index];
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
