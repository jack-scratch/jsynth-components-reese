import React from "react";
import Module from "./Module";

class Effect extends Module {
	render() {
		return (
			<Module name={this.props.name} refer={this.props.refer} port={[
				{
					type: "in",
					point: this.props.refer
				}, {
					type: "out",
					point: this
				}
			]} refer={this.props.refer} min={this.props.min} max={this.props.max} />
		);
	}
};

export default Effect;
