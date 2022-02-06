import React from "react";
import {
	a,
	oct,
	trans
} from "./math";

import "./Key.css";

class Key extends React.Component {
	constructor(props) {
		super();

		this.state = {
			down: false
		};

		this.node = null;

		this.play = this.play.bind(this);
		this.release = this.release.bind(this);
	}

	play() {
		this.node = window.ctx.createOscillator();
		this.node.type = 'sine';
		this.node.frequency.value = trans(a, this.props.i * (1 / (oct - 1)));

		// start
		this.node.start();

		this.setState({
			down: true
		});
	}

	release() {
		if (this.node) {
			this.node.stop();

			this.node = null;
		}

		this.setState({
			down: false
		});
	}

	render() {
		return (
			<svg className={`key ${this.props.type}`}onMouseDown={this.play} onMouseUp={this.release} onMouseLeave={this.release}>
				<text className={`${this.props.type}`}></text>
			</svg>
		);
	}
}

Key.defaultProps = {
	type: "white"
};

export default Key;
