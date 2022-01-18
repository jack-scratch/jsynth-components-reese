import React from "react";
import LCD from "./LCD";
import {
	In
} from "./Port";

class Analyser extends React.Component {
	render() {
		return (
			<div className="cont">
				<div className="head"></div>
				<div className="body">
					<LCD />
				</div>
				<div className="io">
					<In param={this.props.param} />
				</div>
			</div>
		);
	}
}

export default Analyser;
