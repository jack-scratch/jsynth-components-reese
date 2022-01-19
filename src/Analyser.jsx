import React from "react";
import LCD from "./LCD";

class Analyser extends React.Component {
	render() {
		return (
			<div className="cont">
				<div className="head"></div>
				<div className="body">
					<LCD />
				</div>
			</div>
		);
	}
}

export default Analyser;
