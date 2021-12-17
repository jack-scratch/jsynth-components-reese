import React from "react";
import Module from "./Module";

class Out extends Module {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Module name={this.props.name} param={[
				{
					name: "asdf",
					point: this.props.ctx.destination
				}
			]} port={[
				"In"
			]} />
		);
	}
}

export default Out;
