import React from "react";
import Filter from "./Filter";

class Highpass extends Filter {
	render() {
		return (
			<Filter  name="Highpass" type="highpass" refer={[
				{
					name: "Frequency",
					point: this.state.node.frequency
				}
			]} />
		);
	}
}

export default Highpass;
