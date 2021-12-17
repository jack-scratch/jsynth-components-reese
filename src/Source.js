import React from "react";
import Module from "./Module";

class Source extends Module {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Module name={this.props.name} refer={this.props.refer} port={[
				"Out"
			]} min={this.props.min} max={this.props.max} />
		);
	}
};

export default Source;
