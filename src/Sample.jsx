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
	constructor(props) {
		super(props);

		this.state = {
			l: 0
		};
	}

	render() {
		return (
			<div className="sys">
				<div className="body">
					<Text buff={[
						"Bamboo",
						"Bass-Drum-1",
						"Bass-Drum-2",
						"Bass-Drum-3",
						"Boom-Kick",
						"Bottle",
						"Clap-1",
						"Clap-2",
						"Clap-3",
						"Claves"
					]} ht={1} />
				<div className="body">
					<Btn name={<FontAwesomeIcon icon={faSortUp}/>} wd={40} ht={26} call={() => this.setState((prevState) => ({
						l: prevState.l - 1
					}))} />
					<Btn name={<FontAwesomeIcon icon={faSortDown}/>} wd={40} ht={26} call={() => this.setState((prevState) => ({
						l: prevState.l + 1
					}))} />
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
