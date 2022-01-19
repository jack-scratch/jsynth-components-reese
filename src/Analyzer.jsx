import React from "react";
import LCD from "./LCD";
import {
	light
} from "./col";

class Analyzer extends LCD {
	constructor(props) {
		super();

		this.refer = React.createRef();

		this.clear = this.clear.bind(this);

		this.draw = this.draw.bind(this);
	}

	componentDidMount() {
		this.refer.current.width = this.props.wd;
		this.refer.current.height = this.props.ht;

		this.src = window.ctx.createOscillator();

		const sz = Math.pow(2, 10);

		this.analyser = window.ctx.createAnalyser();
		this.proc = window.ctx.createScriptProcessor(sz, 1, 1);

		this.ctxCanv = this.refer.current.getContext("2d");

		this.analyser.fftSize = sz;

		this.data = new Uint8Array(this.analyser.frequencyBinCount);

		// route
		this.src.connect(this.analyser);

		this.analyser.connect(this.proc);
		this.proc.connect(window.ctx.destination);

		this.src.connect(window.ctx.destination);

		// start
		this.src.start();

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
			</div>
		);
	}
}

export default Analyzer;
