import React from "react";
import Cable from "./Cable";
import Osc from "./Osc";
import speaker from "./speaker";
import {
	nutRad,
	portRad
} from "./layout";

class Bay extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			patch: []
		};

		this.addCable = this.addCable.bind(this);
		this.popCable = this.popCable.bind(this);

		this.release = this.release.bind(this);
	}

	addCable(e, refer, node) {
		this.setState((prevState) => ({
			patch: [
				...prevState.patch,
				{
					inPoint: node,
					endPoint: window.ctx.destination,
					start: [
						refer.current.offsetLeft + nutRad + portRad,
						refer.current.offsetTop + nutRad + portRad
					],
					end: [
						refer.current.offsetLeft + nutRad + portRad,
						refer.current.offsetTop + nutRad + portRad
					]
				}
			]
		}));
	}

	popCable(e) {
		let ls = [...this.state.patch];

		ls.splice(ls.length - 1, 1);

		this.setState((prevState) => ({
			patch: ls
		}));
	}

	release(e) {
		if (this.state.patch[this.state.patch.length - 1].inPoint && this.state.patch[this.state.patch.length - 1].endPoint) {
			this.state.patch[this.state.patch.length - 1].inPoint.connect(this.state.patch[this.state.patch.length - 1].endPoint);
		} else {
			this.popCable(e);
		}
	}

	render() {
		return (
			<div className="sys">
				<div>
					<Osc hookDown={this.addCable} />
					{speaker()}
				</div>

				{this.state.patch.map((inst, i) =>
					<Cable start={inst.start} end={inst.end} hookUp={this.release} inPoint={inst.inPoint} key={i} />
				)}
			</div>
		);
	}
}

export default Bay;
