import React from "react";
import Module from "./Module";
import ctx from "./ctx";

class Out extends Module {
	render() {
		return (
			<Module name={this.props.name} port={this.props.port} />
		);
	}
}

export default Out;
