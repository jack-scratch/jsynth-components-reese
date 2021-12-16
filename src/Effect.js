import React from "react";
import Module from "./Module";

class Effect extends Module {
	render() {
		return (
			<Module name={this.props.name} param={this.props.param} port={[
				"In",
				"Out"
			]} ref={this.props.ref} min={this.props.min} max={this.props.max} />
		);
	}
};

export default Effect;
