import React from "react";
import Module from "./Module";
import Key from "./Key";
import {
	Out
} from "./Port";
import {
	oct
} from "./math";

import "./Board.css";

class Board extends Module {
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
							 i % 3 && <div key={`black-${i}`}>
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

Board.defaultProps = {
	ln: oct
};

export default Board;
