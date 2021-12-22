import React from "react";
import Cable from "./Cable";
import Osc from "./Osc";
import speaker from "./speaker";
import {
	nutRad
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

	addCable(e, refer) {
		this.setState((prevState) => ({
			patch: [
				...prevState.patch,
				{
					start: [
						nutRad + refer.current.offsetLeft,
						nutRad + refer.current.offsetTop
					],
					end: [
						0,
						0
					]
				}
			]
		}));
	}

	popCable(e) {
		let ls = [
			...this.state.patch
		];

		ls.splice(ls.length - 1, 1);

		this.setState((prevState) => ({
			patch: ls
		}));
	}

	render() {
		return (
			<div className="sys">
				<Osc hook={this.addCable} />
				{speaker()}

				{this.state.patch.map((inst, i) =>
					<Cable key={i} start={inst.start} end={inst.end} hookUp={this.popCable} />
				)}
			</div>
		);
	}
}

export default Bay;
