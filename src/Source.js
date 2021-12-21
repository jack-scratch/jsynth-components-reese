import React from "react";
import Module from "./Module";

class Source extends Module {
	render() {
		return (
			<Module name={this.props.name} refer={this.props.refer} port={[
				{
					type: "out",
					point: this.props.refer
				}
			]} min={this.props.min} max={this.props.max} />
		);
	}
}

export default Source;
