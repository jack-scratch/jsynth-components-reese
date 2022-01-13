import React from "react";
import Module from "./Module";
import {
	a,
	oct,
	trans
} from "./math";

import "./Key.css";

class Key extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			down: false
		};

		this.play = this.play.bind(this);
		this.release = this.release.bind(this);
	}

	play() {
		this.props.node = window.ctx.createOscillator();
		this.props.node.type = 'sine';
		this.props.node.frequency.value = trans(a, this.props.i * (1 / (oct - 1)));

		// start
		this.props.node.start();

		this.setState({
			down: true
		});
	}

	release() {
		if (this.props.node) {
			this.props.node.stop();

			this.props.node = null;
		}

		this.setState({
			down: false
		});
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
