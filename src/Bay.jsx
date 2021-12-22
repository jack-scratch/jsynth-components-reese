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

		this.referSys = React.createRef();
	}

	componentDidMount() {
		this.offsetX = this.referSys.current.offsetLeft;
		this.offsetY = this.referSys.current.offsetTop;
	}

	addCable(e, refer) {
		this.setState((prevState) => ({
			patch: [
				...prevState.patch,
				{
					start: [
						this.offsetX + nutRad + refer.current.offsetLeft,
						this.offsetY + nutRad + refer.current.offsetTop
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
			<div className="sys" ref={this.referSys}>
				<Osc hookDown={this.addCable} />
				{speaker()}

				{this.state.patch.map((inst, i) =>
					<Cable key={i} start={inst.start} end={inst.end} hookUp={this.popCable} />
				)}
			</div>
		);
	}
}

export default Bay;
