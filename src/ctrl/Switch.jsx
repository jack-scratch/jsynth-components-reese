import React from "react";
import {
	inert,
	bg
} from "./col";
import "./Switch.css";

class Switch extends React.Component {
	dim = 14;

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
		}, () => {
			if (this.props.hookToggle) {
				this.props.tookToggle(this.state.on);
			}
		}));
	}

	render() {
		return (
			<div className="body">
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
						webkitFilter: "drop-shadow(0px 0px 1px rgba(0, 0, 0, 1.0));",
						marginLeft: this.state.on * this.dim,
					}}></div>
				</div>
			</div>
		);
	}
}

export default Switch;
