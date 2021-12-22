import React from "react";
import Cable from "./Cable";
import Osc from "./Osc";
import speaker from "./speaker";

class Bay extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			patch: []
		};
	}

	render() {
		return (
			<div className="sys" onMouseDown={(e) => this.setState((prevState) => ({
				patch: [
					...prevState.patch,
					{
						start: [
							e.nativeEvent.offsetX,
							e.nativeEvent.offsetY
						],
						end: [
							e.nativeEvent.offsetX,
							e.nativeEvent.offsetY
						]
					}
				]
			}))}>
				<Osc />
				{speaker()}

				{this.state.patch.map((inst, i) =>
					<Cable key={i} start={inst.start} end={inst.end} />
				)}
			</div>
		);
	}
}

export default Bay;
