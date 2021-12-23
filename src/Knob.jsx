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
			deltaY: 0,
			val: this.props.refer.value
		};
		
		this.baseRot = 90;

		this.grab = this.grab.bind(this);
		this.release = this.release.bind(this);
		this.turn = this.turn.bind(this);
	}

	grab(e) {
		this.setState({
			startY: e.nativeEvent.clientY,
			currY: e.nativeEvent.clientY,
			down: true
		});
	}

	release() {
		this.setState((prevState) => ({
			val: prevState.val + this.state.deltaY,
			deltaY: 0,
			down: false
		}));
	}

	turn(e) {
		if (this.state.down) {
			this.setState({
				currY: e.nativeEvent.clientY
			}, () => this.setState({
				deltaY: this.state.currY - this.state.startY
			}), () => {
				this.setState((prevState) => ({
					val: prevState.val + this.state.deltaY,
					deltaY: 0,
					down: false
				}));
			});
		}
	}

	render() {
		let shape;
		if (this.props.quant) {
			shape = <Poly n={this.props.quant} rad={this.props.rad} bevel />
		} else {
			shape = <circle r={this.props.rad} />;
		}

		const diam = this.props.rad * 2;

		let stride;
		if (this.props.mark) {
			stride = rotDeg / this.props.mark;
		}

		return (
			<div>
				<svg className="knob" width={diam} height={diam} onMouseDown={this.grab}>
					{this.props.mark && [...Array(this.props.mark).keys()].map((i) =>
						<line x1={0} y1={0} x2={10} y2={0} transform={`translate(${this.props.rad} ${this.props.rad}) rotate(${i * stride}) translate(${this.props.rad + margin} 0)`} />
					)}

					<defs>
						<clipPath id="perim">
							{shape}
						</clipPath>
					</defs>

					<g transform={`translate(${this.props.rad} ${this.props.rad}) rotate(${this.baseRot + this.state.val + this.state.deltaY})`}>
						{shape}
						<line className="tick" x1={this.props.rad} x2={this.props.rad - lineLn} y1={0} y2={0} clipPath="url(#perim)" />
					</g>

					{this.props.mark && [...Array(this.props.mark).keys()].map((i) =>
						<g>
							<text className="mark" textAnchor="end" x={-margin} y={this.props.rad}>{this.props.min}{this.props.unit && ` ${this.props.unit}`}</text>
							<text className="mark" textAnchor="start" x={diam + margin} y={this.props.rad}>{this.props.max}{this.props.unit && ` ${this.props.unit}`}</text>
						</g>
					)}
				</svg>
				{this.state.down && <div className="dragField" onMouseMove={this.turn} onMouseUp={this.release}></div>}
			</div>
		);
	}
}

Knob.defaultProps = {
	rad: 26
};

export default Knob;
