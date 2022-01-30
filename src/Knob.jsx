import React from "react";
import Poly from "./Poly";
import {
	margin,
	rotDeg,
	lineLn
} from "./layout";
import {
	clamp
} from "./util";

import "./Knob.css";

class Knob extends React.Component {
	baseRot = 90;

	constructor(props) {
		super();

		this.state = {
			down: false,
			startY: 0,
			currY: 0,
			val: 0,
			prevVal: 0
		};

		this.markRef = React.createRef();
		
		this.grab = this.grab.bind(this);
		this.release = this.release.bind(this);
		this.turn = this.turn.bind(this);
	}

	componentDidMount() {
		let deltaY = this.state.currY - this.state.startY;

		this.setState({
			val: clamp(this.state.prevVal - deltaY, this.props.min, this.props.max)
		}, () => {
			this.props.hook(this.state.val);
		});

		if (this.props.marked) {
			this.markBound = [
				this.markRef.current.getBBox().x,
				this.markRef.current.getBBox().y
			];
		}
	}

	grab(e) {
		this.setState(this.setState((prevState) => ({
			startY: e.nativeEvent.clientY,
			currY: e.nativeEvent.clientY,
			prevVal: this.state.val,
			down: true
		})));
	}

	release() {
		this.setState((prevState) => ({
			deltaY: 0,
			down: false
		}));
	}

	turn(e) {
		if (this.state.down) {
			this.setState({
				currY: e.nativeEvent.clientY
			}, () => {
				let deltaY = this.state.currY - this.state.startY;

				this.setState({
					val: clamp(this.state.prevVal - deltaY, this.props.min, this.props.max)
				}, () => {
					this.props.hook(this.state.val);
				});
			});
		}
	}

	render() {
		let shape;
		if (this.props.quant) {
			shape = <Poly n={this.props.quant} rad={this.props.rad} bevel />;
		} else {
			shape = <circle r={this.props.rad} />;
		}

		const diam = this.props.rad * 2;

		let stride;
		if (this.props.marked) {
			stride = rotDeg / this.props.marked;
		}

		return (
			<div>
				<svg xmlns="http://www.w3.org/1999/xhtml" version="1.1" className={"knob" + (this.props.marked ? " marked" : "")} width={diam} height={diam} onMouseDown={this.grab}>
					{this.props.marked && [...Array(this.props.marked).keys()].map((i) =>
						<line x1={0} y1={0} x2={10} y2={0} transform={`translate(${this.props.rad} ${this.props.rad}) rotate(${i * stride}) translate(${this.props.rad + margin} 0)`} key={i} />
					)}

					<defs>
						<clipPath id="perim">
							{shape}
						</clipPath>
					</defs>

					<g transform={`translate(${this.props.rad} ${this.props.rad}) rotate(${this.baseRot + (this.state.val)})`}>
						{shape}
						<line className="tick" x1={this.props.rad} x2={this.props.rad - lineLn} y1={0} y2={0} clipPath="url(#perim)" />
					</g>

					{this.props.marked && [...Array(this.props.marked).keys()].map((i) => <g ref={this.markRef}>
						<text className="mark" textAnchor="end" x={-(margin * 2) + this.props.rad} y={(margin * 2) + diam}>{this.props.min}{this.props.unit}</text>
						<text className="mark" textAnchor="start" x={(margin * 2) + this.props.rad} y={(margin * 2) + diam}>{this.props.max}{this.props.unit}</text>
					</g>)}
				</svg>
				{this.state.down && <div className="dragField" onMouseMove={this.turn} onMouseUp={this.release} onMouseLeave={this.release}></div>}
			</div>
		);
	}
}

Knob.defaultProps = {
	rad: 26
};

export default Knob;
