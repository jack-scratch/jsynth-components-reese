import React from "react";
import Btn from "./Btn";
import PortOut from "./PortOut";

class Pulse extends React.Component {
	render() {
		return (
			<div className="cont">
				<div className="body">
					<Btn sz="s" />
					<PortOut />
				</div>
			</div>
		);
	}
};

export default Pulse;
