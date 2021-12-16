import React from "react";
import Module from "./Module";

class Source extends Module {
	render() {
		return (
			<Module name={this.props.name} ref={this.props.ref} param={this.props.param} port={[
				"Out"
			]} min={this.props.min} max={this.props.max} />
		);
	}
};

export default Source;
