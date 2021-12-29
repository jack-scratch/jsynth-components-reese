import React from "react";
import Led from "./Led";
import {
	In
} from "./Port";

class Analyser extends React.Component {
	render() {
		return (
			<div className="cont">
				<div className="head"></div>
				<div className="body">
					<Led />
				</div>
				<div className="io">
					<In node={this.props.node} />
				</div>
			</div>
		);
	}
}

export default Analyser;
