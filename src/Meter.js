import React from "react";
import Led from "./Led";
import {
	bg,
	js
} from "./col";

class Meter extends React.Component {
	constructor(props) {
		super(props);

		this.wd = 16;

		this.level = 20;
	}

	draw() {
		this.window.ctx.fillStyle = js;
	}

	render() {
		return (
			<Led wd={this.wd} ht={this.level * this.props.tick} />
		);
	}
}

Meter.defaultProps = {
	tick: 10
};

export default Meter;
