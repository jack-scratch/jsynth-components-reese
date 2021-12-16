import React from "react";
import Module from "./Module";
import {
	oct
} from "./math";

import "./Key.css";

class Key extends Module {
	constructor(props) {
		super(props);

		this.state = {
			down: false
		};

		this.play = this.play.bind(this);
		this.release = this.release.bind(this);
	}

	play() {
		this.setState(() => ({
			down: true
		}));
	}

	release() {
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

export default Key;
