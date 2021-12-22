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
				<div>
					<table className="body white">
						<tbody>
							<tr>
								{[...Array(this.props.ln).keys()].map((i) =>
									<td key={`white-${i}`}>
										<Key type="white" i={i} />
									</td>
								)}
							</tr>
						</tbody>
					</table>
					<table className="body black">
						<tbody>
							<tr>
								{[...Array(this.props.ln).keys()].map((i) =>
									<td key={`black-${i}`}>
										<Key type="black" i={i} />
									</td>
								)}
							</tr>
						</tbody>
					</table>
				</div>
				<div className="body">
					<div className="io">
						<Out />
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
