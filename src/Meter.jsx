import React from "react";
import Lcd from "./Lcd";
import {
	bg,
	js
} from "./col";

class Meter extends React.Component {
	constructor(props) {
		super();

		this.wd = 16;
	}

	draw() {
		this.window.ctx.fillStyle = js;
	}

	render() {
		return (
			<Lcd wd={this.wd} ht={this.level * this.props.tick} />
		);
	}
}

Meter.defaultProps = {
	tick: 10
};

export default Meter;
