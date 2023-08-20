import React from "react";
import {
	light
} from "../col";

class LCD extends React.Component {
	constructor(props) {
		super(props);

		this.refer = React.createRef();

		this.clear = this.clear.bind(this);
	}

	componentDidMount() {
		this.refer.current.width = this.props.wd;
		this.refer.current.height = this.props.ht;

		this.ctx = this.refer.current.getContext("2d");
	}

	clear() {
		this.ctx.fillStyle = light["inert"];

		this.ctx.fillRect(0, 0, this.refer.current.width, this.refer.current.height);
	}

	render() {
		return (
			<canvas ref={this.refer} />
		);
	}
}

LCD.defaultProps = {
	wd: 400,
	ht: 100
};

export default LCD;
