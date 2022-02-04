import React from "react";
import {
	margin
} from "./layout";
import {
	FontAwesomeIcon
} from "@fortawesome/react-fontawesome"
import {
	faStop,
	faPlay
} from "@fortawesome/free-solid-svg-icons"

import "./Btn.css";

class Btn extends React.Component {
	constructor(props) {
		super();

		this.state = {
			buff: null,
			data: null,
			src: null,
			down: null
		};

		this.push = this.push.bind(this);
		this.release = this.release.bind(this);
	}

	push() {
		if (this.props.hookPush) {
			this.props.hookPush();
		}

		this.setState({
			down: true
		});
	}

	release() {
		if (this.props.hookRelease) {
			this.props.hookRelease();
		}

		this.setState({
			down: false
		});
	}

	render() {
		return (
			<svg xmlns="http://www.w3.org/1999/xhtml" version="1.1" className={"btn" + (this.state.down ? "" : " raised")} width={this.props.wd} height={this.props.ht} onMouseDown={this.push} onMouseUp={this.release} onMouseLeave={this.release}>
				<rect width={this.props.wd} height={this.props.ht} />
				{this.props.name}
			</svg>
		);
	}
}

Btn.defaultProps = {
	wd: 50,
	ht: 50
};

class S extends Btn {
	render() {
		return (
			<Btn wd={50} ht={50} />
		);
	}
}

class M extends Btn {
	render() {
		return (
			<Btn wd={65} ht={65} />
		);
	}
}

class L extends Btn {
	render() {
		return (
			<Btn wd={100} ht={100} />
		);
	}
}

class Toggle extends Btn {
	render() {
		return (
			<Btn name={<FontAwesomeIcon icon={faStop} /> / <FontAwesomeIcon icon={faPlay} />} />
		);
	}
}

export {
	Btn,
	S,
	M,
	L,
	Toggle
};
