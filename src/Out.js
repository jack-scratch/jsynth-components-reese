import React from "react";
import Module from "./Module";

class Out extends Module {
	render() {
		return (
			<Module name={this.props.name} refer={this.props.refer} port={[
				{
					type: "in",
					point: this.props.ctx.destination
				}
			]} />
		);
	}
}

export default Out;
