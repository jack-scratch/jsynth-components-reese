import React from "react";
import LCD from "./LCD";

class Analyzer extends React.Component {
	constructor(props) {
		super();

		this.src = window.ctx.createOscillator();

		// route
		this.src.connect(window.ctx.destination);

		// start
		this.src.start();
	}

	render() {
		return (
			<div className="cont">
				<div className="body">
					<LCD />
				</div>
			</div>
		);
	}
}

export default Analyzer;
