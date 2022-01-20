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

		this.state = {
			buff: []
		};

		if (this.props.buff) {
			this.state.buff = this.props.buff;
		}
	}

	componentDidMount() {
		this.canvCtx = this.refer.current.getContext("2d");

		this.clear();

		this.draw();
	}

	clear() {
		this.canvCtx.fillStyle = bg;
		this.canvCtx.fillRect(0, 0, this.refer.current.width, this.refer.current.height);

		this.canvCtx.fillStyle = light["inert"];
		this.canvCtx.fillRect(0, 0, this.refer.current.width, this.refer.current.height);

		this.canvCtx.font = `${this.lineHt}px Arial`;
	}

	draw() {
		this.clear();

		this.canvCtx.fillStyle = light["active"];

		for (let i = 0; i < this.state.buff.length; i++) {
			this.canvCtx.fillText(this.state.buff[i], 0, (i + 1) * this.lineHt);
		}
	}

	render() {
		return (
			<div className="cont">
				<div className="body">
					<canvas ref={this.refer} height={this.props.ht * this.lineHt} />
				</div>
			</div>
		);
	}
}

Text.defaultProps = {
	buff: [],
	wd: 20,
	ht: 4,
	l: 0
};

export default Text;
