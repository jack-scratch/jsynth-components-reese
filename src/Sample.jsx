import React from "react";
import Text from "./Text";
import Impulse from "./Impulse";
import Btn from "./Btn";
import {
	FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faSortUp,
	faSortDown
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
				<div className="body">
					<Btn name={<FontAwesomeIcon icon={faSortUp}/>} wd={40} ht={26} />
					<Btn name={<FontAwesomeIcon icon={faSortDown}/>} wd={40} ht={26} />
				</div>
				</div>
				<div className="body">
					<Impulse name={<FontAwesomeIcon icon={faPlay}/> }/>
				</div>
			</div>
		);
	}
}

export default Sample;
