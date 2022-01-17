import React from "react";
import Lcd from "./Lcd";
import {
	In
} from "./Port";

class Analyser extends React.Component {
	render() {
		return (
			<div className="cont">
				<div className="head"></div>
				<div className="body">
					<Lcd />
				</div>
				<div className="io">
					<In param={this.props.param} />
				</div>
			</div>
		);
	}
}

export default Analyser;
