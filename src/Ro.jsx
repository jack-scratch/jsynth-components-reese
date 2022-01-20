import React from "react";

import {
	bg,
	light
} from "./col";

class Ro extends React.Component {
	constructor(props) {
		super(props);

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
		this.ctxCanv = this.refer.current.getContext("2d");

		this.clear();

		this.draw();
	}

	clear() {
		this.ctxCanv.fillStyle = bg;
		this.ctxCanv.fillRect(0, 0, this.refer.current.width, this.refer.current.height);

		this.ctxCanv.fillStyle = light["inert"];
		this.ctxCanv.fillRect(0, 0, this.refer.current.width, this.refer.current.height);
	}

	draw() {
		this.clear();

		this.ctxCanv.fillStyle = light["active"];

		for (let i = 0; i < this.state.buff.length; i++) {
			this.ctxCanv.fillText(this.state.buff[i], 0, (i + 1) * 10);
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

Ro.defaultProps = {
	buff: [],
	wd: 20,
	ht: 4,
	l: 0
};

export default Ro;
