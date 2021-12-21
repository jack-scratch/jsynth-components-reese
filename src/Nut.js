import React from "react";
import Poly from "./Poly";
import {
	rotRad
} from "./layout";

class Nut extends React.Component {
	render() {
		return (
			<Poly n={6} rad={rotRad} />
		);
	}
}

export default Nut;
