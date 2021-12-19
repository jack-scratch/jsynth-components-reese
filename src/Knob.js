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
			startY: 0,
			currY: 0,
			delta: 0,
			val: this.props.refer.value
		};

		this.start = this.start.bind(this);
		this.release = this.release.bind(this);
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

	release() {
		this.setState((prevState) => ({
			val: prevState.val + prevState.delta
		}));

		this.setState(() => ({
			down: false
		}));
	}

	turn(e) {
		if (this.state.down) {
			this.setState((prevState) => ({
				currY: e.nativeEvent.offsetY,
				delta: this.state.currY - prevState.startY
			}));

			this.setState((prevState) => ({
				val: prevState.delta
			}));
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
			shape = <circle cx={rad} cy={rad} r={rad} onMouseDown={this.start} onMouseUp={this.release} onMouseLeave={this.release} onMouseMove={this.turn} />;
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
