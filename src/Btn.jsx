import React from "react";

import "./Btn.css";

class Btn extends React.Component {
	constructor(props) {
		super(props);

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
		this.setState({
			down: true
		});
	}

	release() {
		if (this.state.src) {
			this.state.src.stop();

			this.setState({
				src: null
			})
		}

		this.setState({
			down: false
		});
	}

	render() {
		return (
			<div className={"btn " + (this.state.down ? " " : "raised ")} onMouseDown={this.push} onMouseUp={this.release} onMouseLeave={this.release} style={{
				width: this.props.wd,
				height: this.props.ht
			}} onClick={this.props.call}>
				<div>
					<div className="mark">{this.props.name}</div>
				</div>
			</div>
		);
	}
}

class S extends Btn {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Btn wd={50} ht={50} />
		);
	}
}

class M extends Btn {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Btn wd={65} ht={65} />
		);
	}
}

class L extends Btn {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Btn wd={100} ht={100} />
		);
	}
}

Btn.defaultProps = {
	wd: 50,
	ht: 50
};

export {
	Btn,
	S,
	M,
	L
};
