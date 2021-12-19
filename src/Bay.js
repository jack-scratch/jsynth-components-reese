import React from "react";
import Cable from "./Cable";

class Bay extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			patch: [
				{
					start: [
						30,
						70
					],
					end: [
						120,
						300
					]
				}, {
					start: [
						120,
						30
					],
					end: [
						120,
						300
					]
				}
			]
		};
	}

	render() {
		return (
			<div className="sys">
				{this.state.patch.map((inst, i) =>
					<Cable key={i} start={inst.start} />
				)}
			</div>
		);
	}
}

export default Bay;
