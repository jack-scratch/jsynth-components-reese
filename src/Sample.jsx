import React from "react";
import Text from "./Text";
import Impulse from "./Impulse";
import {
	FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {
	faPlay
} from "@fortawesome/free-solid-svg-icons";

class Sample extends React.Component {
	render() {
		return (
			<div className="sys">
				<div className="body">
					<Text buff={[
						"asdf",
						"hjkl"
					]} ht={1} />
				</div>
				<div className="body">
					<Impulse name={<FontAwesomeIcon icon={faPlay}/> }/>
				</div>
			</div>
		);
	}
}

export default Sample;
