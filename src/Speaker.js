import React from "react";
import Out from "./Out";

class Speaker extends Out {
	render() {
		return (
			<Out ctx={this.props.ctx} name="Output" />
		);
	}
}

export default Speaker;
