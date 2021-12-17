import React from "react";
import Module from "./Module";

class Out extends Module {
	render() {
		return (
			<Module name={this.props.name} param={[
				this.props.param
			]} port={[
				"In"
			]} />
		);
	}
}

export default Out;
