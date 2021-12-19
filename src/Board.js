import React from "react";
import Module from "./Module";
import Key from "./Key";
import {
	oct
} from "./math";

import "./Board.css";

class Board extends Module {
	render() {
		return (
			<div className="board">
				<table className="body white">
					<tbody>
						<tr>
							{[...Array(this.props.ln).keys()].map((i) =>
								<td key={`white-${i}`}>
									<Key  type="white" i={i} />
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
									<Key  type="black" i={i} />
								</td>
							)}
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

Board.defaultProps = {
	ln: oct
};

export default Board;
