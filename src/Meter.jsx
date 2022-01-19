import React from "react";
import {
	In
} from "./Port";
import {
	light,
	js
} from "./col";
import {
	margin
} from "./layout";

class Meter extends React.Component {
	sz = Math.pow(2, 10);

	wd = 16;

	constructor(props) {
		super(props);

		this.refer = React.createRef();

		this.analyser = window.ctx.createAnalyser();
		this.proc = window.ctx.createScriptProcessor(this.sz, 1, 1);

		this.analyser.fftSize = this.sz;

		// route
		this.props.point.connect(this.analyser);

		this.analyser.connect(this.proc);
		this.proc.connect(window.ctx.destination);

		this.data = new Uint8Array(this.analyser.frequencyBinCount);

		this.clear = this.clear.bind(this);
		this.draw = this.draw.bind(this);
	}

	componentDidMount() {
		this.ctxCanv = this.refer.current.getContext("2d");

		this.clear();

		this.proc.onaudioprocess = this.draw;
	}

	clear() {
		this.ctxCanv.fillStyle = "#111";

		this.ctxCanv.fillRect(0, 0, this.refer.current.width, this.refer.current.height);
	}

	draw() {
		this.clear();

		this.ctxCanv.fillStyle = js;

		this.analyser.getByteFrequencyData(this.data);

		this.ctxCanv.fillRect(margin, margin, 14, 10);
	}

	render() {
		return (
			<div className="cont">
				<div className="body">
					<canvas ref={this.refer} ref={this.refer} />
				</div>
				<div className="io">
					<In point={this.props.point} hookInDown={this.props.hookInDown} hookInUp={this.props.hookInUp} />
				</div>
			</div>
		);
	}
}

Meter.defaultProps = {
	tick: 10
};

export default Meter;
