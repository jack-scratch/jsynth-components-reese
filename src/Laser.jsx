import React from "react";
import Knob from "./ctrl/Knob";

import {
	Btn
} from "./ctrl/Btn";
import {
	FontAwesomeIcon
} from "@fortawesome/react-fontawesome"
import {
	faRocket
} from "@fortawesome/free-solid-svg-icons"

class Laser extends React.Component {
	render() {
		return (
			<div className="cont body">
				<div className="head">
					<h1><FontAwesomeIcon icon={faRocket} /></h1>
				</div>
				<div className="cont body">
					<div className="mark">Power</div>
					<Knob />
				</div>
				<div className="cont body">
					<Btn label="Fire" />
				</div>
			</div>
		);
	}
}

export default Laser;
