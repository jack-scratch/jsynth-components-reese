import React from "react";
import ctx from "./ctx";
import Module from "./Module";

class Out extends Module {
	render() {
		return (
			<Module name={this.props.name} port={[
				{
					type: "in",
					point: ctx.destination
				}
			]} />
		);
	}
}

export default Out;
