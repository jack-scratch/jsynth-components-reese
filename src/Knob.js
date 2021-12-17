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
			down: false,
			startY: null,
			currY: null,
			val: 0
		};

		this.start = this.turn.bind(this);
		this.end = this.turn.bind(this);
		this.turn = this.turn.bind(this);
	}

	start(e) {
		this.setState((prevState, props) => ({
			down: true
		}));

		console.log(this.state.down)

		this.setState((prevState, props) => ({
			startY: e.nativeEvent.offsetY
		}));
	}

	end(e) {
		this.setState((prevState, props) => ({
			down: false
		}));

		this.setState((prevState, props) => ({
			startY: e.nativeEvent.offsetY
		}));
	}

	turn(e) {
		if (this.state.down) {
			this.setState((prevState, props) => ({
				currY: e.nativeEvent.offsetY
			}));

			let delta = this.state.currY - this.state.startY;

			console.log(delta)

			this.setState((prevState, props) => ({
				val: delta
			}));

			this.props.param.value = this.state.val;
		}
	}

	render() {
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

		let shape;
		if (this.props.quant) {
			shape = <Poly n={this.props.quant} />
		} else {
			shape = <circle cx={25} cy={25} r={25} onMouseDown={this.start} onMouseUp={this.end} onMouseMove={this.turn} />;
		}

		const diam = rad * 2;
		const lineLn = 16;

		return (
			<svg className="knob" width={diam} height={diam} transform={`rotate(${this.state.val})`}>
				{shape}
				<line x1={rad} x2={rad} y1={diam - lineLn} y2={rad * 2} />
				<text className="mark" textAnchor="end" alignmentBaseline="middle" x={-margin} y={rad}>{this.props.min}</text>
				<text className="mark" textAnchor="start" alignmentBaseline="middle" x={diam + margin} y={rad}>{this.props.max}</text>
			</svg>
		);
	}
}

export default Knob;
