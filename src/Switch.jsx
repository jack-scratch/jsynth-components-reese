import React from "react";
import {
	inert,
	bg
} from "./col";

class Switch extends React.Component {
	dim = 10;

	constructor(props) {
		super();

		this.state = {
			on: false
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState((prevState) => ({
			on: !prevState.on
		}));
	}

	render() {
		return (
			<div className="cont">
				<div id="track" style={{
					height: this.dim,
					width: 2 * this.dim,
					background: inert,
					cursor: "pointer"
				}} onMouseDown={this.toggle}>
					<div id="nub" style={{
						position: "absolute",
						height: this.dim,
						width: this.dim,
						background: bg,
						marginLeft: this.state.on * this.dim
					}}></div>
				</div>
			</div>
		);
	}
}

export default Switch;
