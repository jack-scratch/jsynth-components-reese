import React from "react";
import LCD from "./LCD";
import {
	light
} from "./col";

class Analyzer extends LCD {
	constructor(props) {
		super();

		this.src = window.ctx.createOscillator();

		// route
		this.src.connect(window.ctx.destination);

		// start
		this.src.start();

		this.draw = this.draw.bind(this);
	}

	componentDidMount() {
		window.requestAnimationFrame(this.draw);
	}

	draw() {
		window.ctx.fillStyle = light["active"];

		window.requestAnimationFrame(this.draw);
	}

	render() {
		return (
			<div className="cont">
				<div className="body">
					<LCD />
				</div>
			</div>
		);
	}
}

export default Analyzer;
