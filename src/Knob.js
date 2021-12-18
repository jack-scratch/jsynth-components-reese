import React from "react";
import Poly from "./Poly";
import {
	margin,
	rotDeg,
	lineLn
} from "./layout";

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

		this.start = this.start.bind(this);
		this.end = this.end.bind(this);
		this.turn = this.turn.bind(this);
	}

	start(e) {
		this.setState(() => ({
			down: true
		}));

		this.setState(() => ({
			startY: e.nativeEvent.offsetY
		}));
	}

	end() {
		this.setState(() => ({
			down: false
		}));
	}

	turn(e) {
		if (this.state.down) {
			this.setState(() => ({
				currY: e.nativeEvent.offsetY
			}));

			let delta = this.state.currY - this.state.startY;

			this.setState(() => ({
				val: delta
			}));

			this.props.refer.value = this.state.val;
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

		let stride;
		if (this.props.mark) {
			stride = rotDeg / this.props.mark;
		}

		return (
			<svg className="knob" width={diam} height={diam} transform={`rotate(${this.state.val})`}>
				{
					this.props.mark ? [...Array(this.props.mark).keys()].map((i) =>
						<line x1={0} y1={0} x2={10} y2={0} transform={`translate(${rad} ${rad}) rotate(${i * stride}) translate(${rad + margin} 0)`} />
					) : null
				}
				{shape}
				<line x1={rad} x2={rad} y1={diam - lineLn} y2={rad * 2} />
				<text className="mark" textAnchor="end" alignmentBaseline="middle" x={-margin} y={rad}>{this.props.min}</text>
				<text className="mark" textAnchor="start" alignmentBaseline="middle" x={diam + margin} y={rad}>{this.props.max}</text>
			</svg>
		);
	}
}

export default Knob;
