import React from "react";
import {
	margin
} from "../layout";
import {
	FontAwesomeIcon
} from "@fortawesome/react-fontawesome"
import {
	faStop,
	faPlay,
	faChevronDown,
	faChevronUp
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

	push(e) {
		e.preventDefault();

		if (this.props.hookPush) {
			this.props.hookPush();
		}

		this.setState({
			down: true
		});
	}

	release(e) {
		e.preventDefault();

		if (this.props.hookRelease) {
			this.props.hookRelease();
		}

		this.setState({
			down: false
		});
	}

	render() {
		return (
			<svg xmlns="http://www.w3.org/1999/xhtml" version="1.1" className={`btn${this.state.down ? "" : " raised"}`} width={this.props.wd} height={this.props.ht} onMouseDown={(e) => this.push(e)} onMouseUp={(e) => this.release(e)} onMouseLeave={this.release}>
				<rect width={this.props.wd} height={this.props.ht} />
				<g transform={`translate(${margin * 2} ${margin * 2})`}>
					{this.props.label}
				</g>
			</svg>
		);
	}
}

Btn.defaultProps = {
	wd: 50,
	ht: 50
};

class XS extends Btn {
	render() {
		return (
			<Btn wd={32} ht={32} />
		);
	}
}

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
			<Btn label={<FontAwesomeIcon icon={faStop} /> / <FontAwesomeIcon icon={faPlay} />} hookPush={this.props.hookPush} hookRelease={this.props.hookRelease} />
		);
	}
}

class Select extends Btn {
	render() {
		return (
			<Btn ht={16} label={this.props.dir == "next" ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />} hookPush={this.props.hookPush} hookRelease={this.props.hookRelease} />
		);
	}
}

Select.defaultProps = {
	dir: "next"
};

export {
	Btn,
	XS,
	S,
	M,
	L,
	Toggle,
	Select
};
