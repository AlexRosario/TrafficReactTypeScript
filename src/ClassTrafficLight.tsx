import * as React from "react";
import { Component } from "react";

type TrafficLightState = {
	lightState: number;
};

export class ClassTrafficLight extends Component<object, TrafficLightState> {
	state: TrafficLightState = {
		lightState: 0,
	};

	lightChange = (): void => {
		this.setState(({ lightState }) => ({
			lightState: lightState < 2 ? lightState + 1 : 0,
		}));
	};

	getColor = (index: number): string => {
		const { lightState } = this.state;
		if (
			(index === 0 && lightState === 0) ||
			(index === 1 && lightState === 1) ||
			(index === 2 && lightState === 2)
		) {
			return index === 0 ? "red" : index === 1 ? "yellow" : "green";
		}
		return "black";
	};

	render() {
		return (
			<div className="traffic-light-box">
				<h2>Class-based Traffic Light</h2>
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
