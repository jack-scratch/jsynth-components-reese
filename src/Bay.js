import React from "react";
import Cable from "./Cable";

class Bay extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			patch: []
		};
	}

	render() {
		return (
			<div className="sys" onMouseDown={() => this.setState((prevState) => ({
				patch: [
					...prevState.patch,
					{
						start: [
							30,
							70
						],
						end: [
							120,
							30
						]
					}
				]
			}))}>
				{this.props.module.map((inst) =>
					inst
				)}

				{this.state.patch.map((inst, i) =>
					<Cable key={i} start={inst.start} />
				)}
			</div>
		);
	}
}

export default Bay;
