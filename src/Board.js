import React from "react";
import Module from "./Module";
import Key from "./Key";

import "./Board.css";

class Board extends Module {
	render() {
		return (
			<div className="board">
				<table className="body white">
					<tbody>
						<tr>
							<td>
								<Key />
							</td>
						</tr>
					</tbody>
				</table>
				<table className="body black">
					<tbody>
						<tr>
							<td>
								<Key />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
};

export default Board;
