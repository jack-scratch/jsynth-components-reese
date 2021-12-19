import React from "react";
import Filter from "./Filter";

class Lowpass extends Filter {
	render() {
		return (
			<Filter  name="Lowpass" type="lowpass" refer={[
				{
					name: "Frequency",
					point: this.state.node.frequency
				}
			]} />
		);
	}
}

export default Lowpass;
