import React from "react";
import Module from "./Module";
import Key from "./Key";
import {
	Out
} from "./Port";
import {
	oct
} from "./math";

import "./Piano.css";

class Piano extends Module {
	render() {
		return (
			<div className="board">
				<div className="body">
					<div className="white">
						{[...Array(this.props.ln).keys()].map((i) =>
							<div key={`white-${i}`}>
								<Key type="white" i={i} />
							</div>
						)}
					</div>
					<div className="black">
						{[...Array(this.props.ln - 1).keys()].map((i) =>
							 <div key={`black-${i}`}>
								<Key type="black" i={i} />
							</div>
						)}
					</div>
					<div className="body">
						<div className="io">
							<Out />
						</div>
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
