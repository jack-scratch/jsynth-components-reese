import React from "react";
import LCD from "./LCD";

class Meter extends React.Component {
	constructor(props) {
		super(props);

		this.wd = 16;
	}

	render() {
		return (
			<div className="cont">
				<div className="body">
					<canvas width={this.wd} ref={this.refer} />
				</div>
			</div>
		);
	}
}

Meter.defaultProps = {
	tick: 10
};

export default Meter;
