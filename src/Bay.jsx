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
	}

	addCable(e, refer, node) {
		this.setState((prevState) => ({
			patch: [
				...prevState.patch,
				{
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
		}), () => {
			node.connect(window.ctx.destination);
		});
	}

	popCable(e) {
		let ls = [...this.state.patch];

		ls.splice(ls.length - 1, 1);

		this.setState((prevState) => ({
			patch: ls
		}));
	}

	render() {
		return (
			<div className="sys">
				<div>
					<Osc hookDown={this.addCable} />
					{speaker({
						hookUp: () => alert("asdf")
					})}
				</div>

				{this.state.patch.map((inst, i) =>
					<Cable key={i} start={inst.start} end={inst.end} hookUp={this.popCable} />
				)}
			</div>
		);
	}
}

export default Bay;
