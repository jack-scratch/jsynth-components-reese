import React from "react";
import LCD from "./LCD";
import {
	In
} from "./Port";
import {
	light
} from "./col";

class Analyser extends LCD {
	constructor(props) {
		super();

		this.refer = React.createRef();

		this.sz = Math.pow(2, 10);

		this.analyser = window.ctx.createAnalyser();
		this.proc = window.ctx.createScriptProcessor(this.sz, 1, 1);

		this.analyser.fftSize = this.sz;

		this.data = new Uint8Array(this.analyser.frequencyBinCount);

		// source
		this.src = window.ctx.createOscillator();

		// route
		this.src.connect(this.analyser);

		this.analyser.connect(this.proc);
		this.proc.connect(window.ctx.destination);

		this.src.connect(window.ctx.destination);

		// start
		this.src.start();

		this.clear = this.clear.bind(this);
		this.draw = this.draw.bind(this);
	}

	componentDidMount() {
		this.refer.current.width = this.props.wd;
		this.refer.current.height = this.props.ht;

		this.ctxCanv = this.refer.current.getContext("2d");

		this.clear();

		this.proc.onaudioprocess = this.draw;
	}

	clear() {
		this.ctxCanv.fillStyle = light["inert"];

		this.ctxCanv.fillRect(0, 0, this.refer.current.width, this.refer.current.height);
	}

	draw() {
		this.clear();

		this.ctxCanv.fillStyle = light["active"];

		this.analyser.getByteFrequencyData(this.data);
		for (let x = 0; x < this.refer.current.width; x++) {
			if (x < this.data.length) {
				for (let y = 0; y < this.refer.current.height; y++) {
					if (y < this.data[x] / 2) {
						this.ctxCanv.fillRect(x, this.refer.current.height - y, 1, 1);
					}
				}
			}
		}
	}

	render() {
		return (
			<div className="cont">
				<div className="body">
					<canvas ref={this.refer} />
				</div>
				<div className="io">
					<In point={this.src} hookInDown={this.props.hookInDown} hookInUp={this.props.hookInUp} />
				</div>
			</div>
		);
	}
}

export default Analyser;
