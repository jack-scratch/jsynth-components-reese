import React from "react";
import Btn from "./Btn";
import {
	Out
} from "./Port";

class Pulse extends React.Component {
	render() {
		return (
			<div className="cont">
				<div className="body">
					<Btn wd={50} ht={50} />
					<Out />
				</div>
			</div>
		);
	}
}

export default Pulse;
