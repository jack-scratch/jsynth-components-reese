import React from "react";
import Btn from "./Btn";
import Port from "./Port";

class Pulse extends React.Component {
	render() {
		return (
			<div className="cont">
				<div className="body">
					<Btn sz="s" />
					<Port />
				</div>
			</div>
		);
	}
};

export default Pulse;
