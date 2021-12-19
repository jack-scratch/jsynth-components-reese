import React from "react";
import Btn from "./Btn";
import PortOut from "./PortOut";

class Pulse extends React.Component {
	render() {
		return (
			<div className="cont">
				<div className="body">
					<Btn wd="50" ht="50" />
					<PortOut />
				</div>
			</div>
		);
	}
}

export default Pulse;
