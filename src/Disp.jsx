import React from "react";
import Knob from "./Knob";
import Text from "./Text";

class Disp extends React.Component {
	constructor(props) {
		super(props);

		this.update = this.update.bind(this);

		this.state = {
			val: 0
		};
	}

	update(val) {
		this.setState({
			val: val
		});
	}

	render() {
		return (
			<div className="sys">
				<div className="head">
					<h1>Display</h1>
				</div>
				<div className="body">
					<Text buff={[
						this.state.val
					]} wd={8} ln={2} />
				</div>
				<div className="body">
					<div className="ctrl">
						<Knob hook={this.update} min={0.0} max={100.0} />
					</div>
				</div>
			</div>
		);
	}
}

export default Disp;
