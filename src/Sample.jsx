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

		this.buff = [
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
		];

		this.state = {
			l: 0
		};

		this.inc = this.inc.bind(this);
		this.dec = this.dec.bind(this);
	}

	inc() {
		if (this.state.l < this.buff.length) {
			this.setState((prevState) => ({
				l: prevState.l + 1
			}));
		}
	}

	dec() {
		if (this.state.l > 0) {
			this.setState((prevState) => ({
				l: prevState.l - 1
			}));
		}
	}

	render() {
		return (
			<div className="cont">
				<div className="body" style={{
					display: "flex",
					flexDirection: "row"
				}}>
					<div className="body">
						<Text buff={this.buff} ht={1} />
					</div>
					<div className="body group">
						<Btn name={<FontAwesomeIcon icon={faSortUp} />} wd={40} ht={26} call={this.dec} />
						<Btn name={<FontAwesomeIcon icon={faSortDown} />} wd={40} ht={26} call={this.inc} />
					</div>
				</div>
				<div className="body">
					<Impulse name={<FontAwesomeIcon icon={faPlay}/> } />
				</div>
			</div>
		);
	}
}

export default Sample;
