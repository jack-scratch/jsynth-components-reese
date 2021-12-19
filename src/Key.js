import React from "react";
import Module from "./Module";
import {
	a,
	oct,
	trans
} from "./math";
import ctx from "./ctx";

import "./Key.css";

class Key extends Module {
	constructor(props) {
		super(props);

		this.state = {
			down: false,
			osc: null
		};

		this.play = this.play.bind(this);
		this.release = this.release.bind(this);
	}

	play() {
		this.state.osc = ctx.createOscillator();
		this.state.osc.type = 'sine';
		this.state.osc.frequency.value = trans(a, this.props.i * (1 / (oct - 1)));

		this.state.osc.start();

		this.setState(() => ({
			down: true
		}));
	}

	release() {
		if (this.state.osc) {
			this.state.osc.stop();

			this.state.osc = null;
		}

		this.setState(() => ({
			down: false
		}));
	}

	render() {
		return (
			<div className={`key ${this.props.type}`}onMouseDown={this.play} onMouseUp={this.release} onMouseLeave={this.release}>
				<span className={`${this.props.type}`}></span>
			</div>
		);
	}
}

Key.defaultProps = {
	type: "white"
};

export default Key;
