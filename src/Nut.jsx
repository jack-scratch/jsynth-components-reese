import React from "react";
import Poly from "./Poly";
import {
	nutRad
} from "./layout";

class Nut extends React.Component {
	render() {
		return (
			<Poly n={6} rad={nutRad} />
		);
	}
}

export default Nut;
