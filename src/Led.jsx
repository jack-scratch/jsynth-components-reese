import React from "react";
import {
	light
} from "./col";

class Led extends React.Component {
	constructor(props) {
		super();

		this.refer = React.createRef();

		this.clear = this.clear.bind(this);
		this.draw = this.draw.bind(this);
	}

	componentDidMount() {
		this.refer.current.width = this.props.wd;
		this.refer.current.height = this.props.ht;

		this.window.ctx = this.refer.current.getContext("2d");

		this.clear();

		this.draw();
	}

	clear() {
		this.window.ctx.fillStyle = light["inert"];

		this.window.ctx.fillRect(0, 0, this.refer.current.width, this.refer.current.height);
	}

	draw() {
		this.window.ctx.fillStyle = light["active"];
	}

	render() {
		return (
			<canvas ref={this.refer} />
		);
	}
}

Led.defaultProps = {
	wd: 400,
	ht: 100
};

export default Led;
