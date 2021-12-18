import React from "react";
import Filter from "./Filter";

class Lowpass extends Filter {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Filter ctx={this.props.ctx} name="Lowpass" type="lowpass" />
		);
	}
}

export default Lowpass;
