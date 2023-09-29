import React from "react";
import {
	bg,
	light
} from "./col";
import {
	margin
} from "./layout";
import {
	unit
} from "./fmt";

class VU extends React.Component {
	sz = Math.pow(2, 10);

	// Layout
	wd = 14;
	ht = 6;

	margin = 1;

	constructor(props) {
		super(props);

		this.refer = React.createRef();

		this.end = window.ctx.createAnalyser();

		this.end.maxDecibels = this.props.max;
		this.end.minDecibels = this.props.min;

		this.proc = window.ctx.createScriptProcessor(this.sz, 1, 1);

		this.end.fftSize = this.sz;

		// patch
		this.props.point.connect(this.end);

		this.end.connect(this.proc);
		this.proc.connect(window.ctx.destination);

		this.data = new Uint8Array(this.end.frequencyBinCount);

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

		this.end.getByteFrequencyData(this.data);

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
		let ht = this.props.tick * (this.ht + (this.margin * 2));

		return (
			<div className="cont">
				<div className="cont">
					<canvas ref={this.refer} />
					{this.props.marked && <svg overflow="visible" width={60} height={ht} style={{
						marginLeft: margin
					}}>
						<line className="tick" x1={0} y1={0} x2={10} y2={0} />
						<text className="mark" x={10 + margin} alignmentBaseline="middle">{this.props.max}{unit["level"]}</text>

						<line className="tick" x1={0} y1={ht} x2={10} y2={this.props.tick * (this.ht + (this.margin * 2))} />
						<text className="mark" x={10 + margin} y={this.props.tick * (this.ht + (this.margin * 2))} alignmentBaseline="middle">{this.props.min}{unit["level"]}</text>
					</svg>}
				</div>
			</div>
		);
	}
}

VU.defaultProps = {
	tick: 20,
	min: 0.0,
	max: 12.0
};

export default VU;
