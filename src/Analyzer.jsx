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

		this.src = window.ctx.createOscillator();

		// route
		this.src.connect(window.ctx.destination);

		// start
		this.src.start();

		this.draw = this.draw.bind(this);
	}

	componentDidMount() {
		this.refer.current.width = this.props.wd;
		this.refer.current.height = this.props.ht;

		window.ctx = this.refer.current.getContext("2d");

		window.requestAnimationFrame(this.draw);
	}

	clear() {
		window.ctx.fillStyle = light["inert"];

		window.ctx.fillRect(0, 0, this.refer.current.width, this.refer.current.height);
	}

	draw() {
		this.clear();

		window.ctx.fillStyle = light["active"];

		window.ctx.fillRect(0, 0, 50, 50);

		window.requestAnimationFrame(this.draw);
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
