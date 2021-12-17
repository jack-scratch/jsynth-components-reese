import React from "react";
import Led from "./Led";
import PortIn from "./PortIn";

class Analyser extends React.Component {
	render() {
		return (
			<div className="cont">
				<div className="body">
					<Led />
				</div>
				<div className="io">
					<PortIn />
				</div>
			</div>
		);
	}
}

export default Analyser;
