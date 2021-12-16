import React from "react";
import Module from "./Module";
import {
	oct
} from "./math";

import "./Key.css";

class Key extends Module {
	render() {
		return (
			<div className="key white">
				<span className="white"></span>
			</div>
		);
	}
};

export default Key;
