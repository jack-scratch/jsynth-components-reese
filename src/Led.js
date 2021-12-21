import React from "react";
import {
	bg,
	js
} from "./col";

class Led extends React.Component {
	constructor(props) {
		super(props);

		this.canvRef = React.createRef();

		this.clear = this.clear.bind(this);
		this.draw = this.draw.bind(this);
	}

	componentDidMount() {
		this.context = this.canvRef.current.getContext("2d");

		this.clear();

		this.draw();
	}

	clear() {
		this.context.fillStyle = bg;

		this.context.fillRect(0, 0, this.canvRef.current.width, this.canvRef.current.height);
	}

	draw() {
		this.context.fillStyle = js;

		this.context.fillRect(0, 0, 30, 70);
	}

	render() {
		return (
			<canvas ref={this.canvRef} />
		)
	}
}

export default Led;
