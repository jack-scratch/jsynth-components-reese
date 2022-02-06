import React from "react";
import {
	margin,
	rotDeg,
	rotRad,
	lineLn
} from "./layout";
import {
	ws,
	sep
} from "./path";
import {
	clamp
} from "./util";

import "./Knob.css";

class Quant extends React.Component {
	dipFac = 6;
	sheerFac = 0.1;

	render() {
		const stride = rotRad / this.props.n;

		const dip = this.props.rad - this.dipFac;

		let serial = "";

		// start
		serial += `M ${Math.cos(this.sheerFac) * this.props.rad}${sep}${Math.sin(this.sheerFac) * this.props.rad}`;
		serial += ws;

		for (let i = 0; i < this.props.n; i++) {
			let fst = i + this.sheerFac;
			let snd = (i + 1) - this.sheerFac;
			let mid = i + 0.5;

			let curve = `C ${Math.cos(fst * stride) * this.props.rad}${sep}${Math.sin(fst * stride) * this.props.rad} ${Math.cos(mid * stride) * dip}${sep}${Math.sin(mid * stride) * dip} ${Math.cos(snd * stride) * this.props.rad}${sep}${Math.sin(snd * stride) * this.props.rad}`;

			serial += ws;
			serial += curve;

			let ln = `L ${Math.cos(snd * stride) * this.props.rad}${sep}${Math.sin(snd * stride) * this.props.rad} ${Math.cos((snd + (this.sheerFac * 2)) * stride) * this.props.rad}${sep}${Math.sin((snd + (this.sheerFac * 2)) * stride) * this.props.rad}`;

			serial += ws;
			serial += ln;
		}

		return (
			<path d={serial} />
		);
	}
}

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
			this.props.hookTurn(this.state.val);
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

				let snap = this.state.prevVal - deltaY;
				if (this.props.quant) {
					const rng = this.props.max - this.props.min;
					const stride = rng / this.props.quant;

					snap -= snap % stride;
				}

				this.setState({
					val: clamp(snap, this.props.min, this.props.max)
				}, () => {
					this.props.hookTurn(this.state.val);
				});
			});
		}
	}

	render() {
		let shape;
		if (this.props.quant) {
			shape = <Quant n={this.props.quant} rad={this.props.rad} bevel />;
		} else {
			shape = <circle r={this.props.rad} />;
		}

		const diam = this.props.rad * 2;

		let stride;
		if (this.props.marked) {
			stride = rotDeg / this.props.marked;
		}

		const delta = this.props.max - this.props.min;
		let ratio = rotDeg / delta;

		return (
			<div>
				<svg xmlns="http://www.w3.org/1999/xhtml" version="1.1" className={"knob" + (this.props.marked ? " marked" : "")} width={diam} height={diam} onMouseDown={this.grab}>
					{this.props.marked && [...Array(this.props.marked).keys()].map((i) => <line x1={0} y1={0} x2={10} y2={0} transform={`translate(${this.props.rad} ${this.props.rad}) rotate(${i * stride}) translate(${this.props.rad + margin} 0)`} key={i} />)}

					<defs>
						<clipPath id="perim">
							{shape}
						</clipPath>
					</defs>

					<g transform={`translate(${this.props.rad} ${this.props.rad}) rotate(${this.baseRot + (this.state.val * ratio)})`}>
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
