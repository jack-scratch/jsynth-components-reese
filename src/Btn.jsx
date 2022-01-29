import React from "react";
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
		if (this.props.push) {
			this.props.push();
		}

		this.setState({
			down: true
		});
	}

	release() {
		if (this.props.release) {
			this.props.release();
		}

		this.setState({
			down: false
		});
	}

	render() {
		return (
			<div className={"btn" + (this.state.down ? "" : " raised")} onMouseDown={this.push} onMouseUp={this.release} onMouseLeave={this.release} style={{
				width: this.props.wd,
				height: this.props.ht
			}} onMouseDown={this.props.hookOn} onMouseUp={this.props.hookOff} onMouseLeave={this.props.hookOff}>
				<div>
					<div className="mark">{this.props.name}</div>
				</div>
			</div>
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
			<Btn name={
				<span>
					<FontAwesomeIcon icon={faStop} /> / <FontAwesomeIcon icon={faPlay} />
				</span>
			} wd={80} />
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
