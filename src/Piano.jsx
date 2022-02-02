import React from "react";
import Key from "./Key";
import {
	oct
} from "./math";

import "./Piano.css";

class Piano extends React.Component {
	render() {
		return (
			<div className="board">
				<div className="body">
					<div className="white">
						{[...Array(this.props.ln).keys()].map((i) => <div key={i}>
							<Key type="white" i={i} />
						</div>)}
					</div>
					<div className="black">
						{[...Array(this.props.ln - 1).keys()].map((i) =>
							 <div key={i}>
								<Key type="black" i={i} />
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}

Piano.defaultProps = {
	ln: oct
};

export default Piano;
