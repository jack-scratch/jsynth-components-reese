import React from "react";

import {
	bg,
	light
} from "./col";

class Text extends React.Component {
	constructor(props) {
		super(props);

		this.lineHt = 16;

		this.refer = React.createRef();

		this.clear = this.clear.bind(this);
		this.draw = this.draw.bind(this);
	}

	componentDidMount() {
		this.canvCtx = this.refer.current.getContext("2d");

		this.canvCtx.font = `${this.lineHt}px Arial`;

		this.clear();

		this.draw();
	}

	componentDidUpdate() {
		this.draw();
	}

	clear() {
		this.canvCtx.fillStyle = bg;
		this.canvCtx.fillRect(0, 0, this.refer.current.width, this.refer.current.height);

		this.canvCtx.fillStyle = light["inert"];
		this.canvCtx.fillRect(0, 0, this.refer.current.width, this.refer.current.height);
	}

	draw() {
		this.clear();

		this.canvCtx.fillStyle = light["active"];

		for (let i = 0; i < this.props.buff.length; i++) {
			this.canvCtx.fillText(this.props.buff[i], 0, (i + 1) * this.lineHt);
		}
	}

	render() {
		return (
			<div className="cont">
				<canvas ref={this.refer} height={this.props.ht * this.lineHt} />
			</div>
		);
	}
}

Text.defaultProps = {
	wd: 20,
	ht: 4,
	l: 0
};

export default Text;
