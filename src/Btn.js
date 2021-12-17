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

		this.state.down = false;

		this.play = this.play.bind(this);
		this.release = this.release.bind(this);
	}

	play() {
		this.state.src = this.props.ctx.createBufferSource();
		this.state.src.buffer = this.props.buff;

		this.state.src.connect(this.props.ctx.destination);

		this.state.src.start();

		this.setState(() => ({
			down: true
		}));
	}

	release() {
		if (this.state.src) {
			this.state.src.stop();

			this.state.src = null;
		}

		this.setState(() => ({
			down: false
		}));
	}

	render() {
		return (
			<div className={"btn " + (this.state.down ? " " : "raised ") + this.props.sz} onMouseDown={this.play} onMouseUp={this.release} onMouseLeave={this.release}>
				<div>
					<div className="mark">{this.props.name}</div>
				</div>
			</div>
		);
	}
};

Btn.defaultProps = {
	sz: "s"
};

export default Btn;
