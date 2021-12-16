import React from "react";

import "./Btn.css";

class Btn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			buffLn: null,
			pitch: null,
			buff: null,
			data: null,
			src: null,
			down: null
		};

		const ln = 3.0;

		this.state.buffLn = ln * this.props.ctx.sampleRate;
		this.state.buff = this.props.ctx.createBuffer(1, this.state.buffLn, this.props.ctx.sampleRate);

		const hz = 440.0;

		this.state.pitch = this.state.buffLn / (ln * hz);

		// buffer
		this.state.data = this.state.buff.getChannelData(0);

		for (let i = 0; i < this.state.buffLn; i++) {
			this.state.data[i] = Math.sin((i / this.state.pitch) * Math.PI * 2);
		}

		this.state.down = false;

		this.play = this.play.bind(this);
		this.release = this.release.bind(this);
	}

	play() {
		this.state.src = this.props.ctx.createBufferSource();
		this.state.src.buffer = this.state.buff;

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

export default Btn;
