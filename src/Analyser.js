import React from "react";
import Led from "./Led";
import PortIn from "./PortIn";

class Analyser extends React.Component {
	render() {
		return (
			<div className="cont">
				<div className="head"></div>
				<div className="body">
					<Led />
				</div>
				<div className="io">
					<PortIn refer={this.props.refer} />
				</div>
			</div>
		);
	}
}

export default Analyser;
