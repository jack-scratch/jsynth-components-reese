import React from "react";
import Module from "./Module";

class Effect extends Module {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Module name={this.props.name} param={this.props.param} port={[
				"In",
				"Out"
			]} paramRef={this.props.paramRef} min={this.props.min} max={this.props.max} />
		);
	}
};

export default Effect;
