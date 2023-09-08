import React from "react";
import {
	inert,
	bg
} from "./col";

class Switch extends React.Component {
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
					height: 10,
					width: 2 * 10,
					background: inert,
					cursor: "pointer"
				}} onMouseDown={this.toggle}>
					<div id="nub" style={{
						position: "absolute",
						height: 10,
						width: 10,
						background: bg,
						marginLeft: this.state.on * 10
					}}></div>
				</div>
			</div>
		);
	}
}

export default Switch;
