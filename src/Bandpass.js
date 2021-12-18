import React from "react";
import Filter from "./Filter";

class Bandpass extends Filter {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Filter ctx={this.props.ctx} name="Bandpass" type="bandpass" />
		);
	}
}

export default Bandpass;
