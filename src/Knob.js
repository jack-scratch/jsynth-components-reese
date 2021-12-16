import React from "react";
import Poly from "./Poly";
import {
	margin
} from "./Layout";

import "./Knob.css";

class Knob extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			val: this.props.param.value
		};

		this.turn = this.turn.bind(this);
	}

	turn() {
		this.setState((prevState, props) => ({
			val: prevState.val + 10.0
		}));

		this.props.param.value = this.state.val;
	}

	render() {
		let shape;
		if (this.props.quant) {
			shape = <Poly n={this.props.quant} />
		} else {
			shape = `<circle className="raised" cx={rad} cy={rad} r={rad} onClick={this.turn} />`;
		}

		let rad;
		switch (this.props.sz) {
			default:
			case "s":
				rad = 26;

				break;

			case "m":
				rad = 40;

				break;

			case "l":
				rad = 60;

				break;
		}

		const diam = rad * 2;
		const lineLn = 16;

		return (
			<div>
				<svg className="knob" width={diam} height={diam} transform={`rotate(${this.state.val})`}>
					{shape}
					<line x1={rad} x2={rad} y1={diam - lineLn} y2={rad * 2} />
					<text className="mark" textAnchor="end" alignmentBaseline="middle" x={-margin} y={rad}>{this.props.min}</text>
					<text className="mark" textAnchor="start" alignmentBaseline="middle" x={diam + margin} y={rad}>{this.props.max}</text>
				</svg>
			</div>
		);
	}
}

export default Knob;
