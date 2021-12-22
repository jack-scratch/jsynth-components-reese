import React from "react";
import Text from "./Text";
import Impulse from "./Impulse";

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
					<Impulse name="Play" />
				</div>
			</div>
		);
	}
}

export default Sample;
