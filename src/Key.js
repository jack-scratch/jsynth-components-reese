import React from "react";
import Module from "./Module";

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
		this.state.osc = this.props.ctx.createOscillator();
		this.state.osc.type = 'sine';
		this.state.osc.frequency.value = 440.0;

		this.state.osc.connect(this.props.ctx.destination);

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
			<div className="key white"  onMouseDown={this.play} onMouseUp={this.release} onMouseLeave={this.release}>
				<span className="white"></span>
			</div>
		);
	}
};

Key.defaultProps = {
	type: "white"
};

export default Key;
