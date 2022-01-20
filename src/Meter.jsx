import React from "react";
import {
	In
} from "./Port";
import {
	bg,
	js,
	light
} from "./col";

class Meter extends React.Component {
	sz = Math.pow(2, 10);

	// layout
	wd = 14;
	ht = 6;

	margin = 1;

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
		this.canvCtx = this.refer.current.getContext("2d");

		this.canvCtx.canvas.width = this.wd + (this.margin * 2 * 2);
		this.canvCtx.canvas.height = (this.props.tick * (this.ht + (this.margin * 2))) + (this.margin * 2);

		this.clear();

		this.proc.onaudioprocess = this.draw;
	}

	clear() {
		this.canvCtx.fillStyle = bg;
		this.canvCtx.fillRect(0, 0, this.refer.current.width, this.refer.current.height);

		this.canvCtx.fillStyle = light["inert"];
		this.canvCtx.fillRect(0, 0, this.refer.current.width, this.refer.current.height);
	}

	draw() {
		this.clear();

		this.analyser.getByteFrequencyData(this.data);

		let stride = this.ht + (this.margin * 2);

		this.canvCtx.fillStyle = light["active"];
		for (let i = 0; i < this.props.tick; i++) {
			this.canvCtx.fillRect(this.margin * 2, (this.margin * 2) + (i * stride), this.wd, this.ht);
		}

		this.canvCtx.fillStyle = light["active"];
		for (let i = 0; i < 3; i++) {
			let inv = this.props.tick - (i + 1);

			this.canvCtx.fillRect(this.margin * 2, (this.margin * 2) + (inv * stride), this.wd, this.ht);
		}
	}

	render() {
		return (
			<div className="cont">
				<div className="cont">
					<canvas ref={this.refer} />
				</div>
				<div className="io">
					<In point={this.props.point} hookInDown={this.props.hookInDown} hookInUp={this.props.hookInUp} />
				</div>
			</div>
		);
	}
}

Meter.defaultProps = {
	tick: 20
};

export default Meter;
