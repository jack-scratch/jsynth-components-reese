import React from "react";

import "./Fader.css";

class Fader extends React.Component {
	render() {
		return (
			<div className="fader">
				<div className="groove">
					<div className="thumb">
						<div className="mark"></div>
					</div>
				</div>
				<svg xmlns="http://www.w3.org/2000/svg" className="inc"></svg>
			</div>
		);
	}
}

export default Fader;
