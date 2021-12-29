import React from "react";
import Module from "./Module";

class Source extends Module {
	render() {
		return (
			<Module name={this.props.name} refer={this.props.refer} port={this.props.port} min={this.props.min} max={this.props.max} hookDown={this.props.hookDown} hookUp={this.props.hookUp} marked={this.props.marked} />
		);
	}
}

export default Source;
