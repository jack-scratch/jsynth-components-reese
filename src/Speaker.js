import React from "react";
import Out from "./Out";

class Speaker extends Out {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Out name="Output" refer={[
				{
					name: "Output",
					point: this.props.ctx.destination
				}
			]} />
		);
	}
};

export default Speaker;
