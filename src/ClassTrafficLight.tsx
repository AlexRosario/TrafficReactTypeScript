import * as React from "react";
import { Component } from "react";

type TrafficLightState = {
	lightState: number;
};

export class ClassTrafficLight extends Component<
	Record<string, never>,
	TrafficLightState
> {
	state: TrafficLightState = {
		lightState: 0,
	};

	lightChange = (): void => {
		this.setState(({ lightState }) => ({
			lightState: lightState + 1, //Did one better. Moved the index matching logic to getColor so that lightState now also preserves number of clicks.
		}));
	};

	getColor = (index: number): string => {
		const { lightState } = this.state;
		if (lightState % 3 === index) {
			return ["green", "yellow", "red"][index];
		}
		return "black";
	};

	render() {
		return (
			<div className="traffic-light-box">
				<h2>Class Traffic Light</h2>
				<div className="traffic-light">
					<div className={`circle ${this.getColor(0)}`}></div>
					<div className={`circle ${this.getColor(1)}`}></div>
					<div className={`circle ${this.getColor(2)}`}></div>
				</div>
				<button className="next-state-button" onClick={this.lightChange}>
					Next State
				</button>
			</div>
		);
	}
}
