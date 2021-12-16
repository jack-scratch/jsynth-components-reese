import React from "react";
import Module from "./Module";
import Key from "./Key";

import "./Board.css";

class Board extends Module {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="board">
				<table className="body white">
					<tbody>
						<tr>
							{[...Array(this.props.ln).keys()].map((inst) =>
								<td key={inst}>
									<Key ctx={this.props.ctx} />
								</td>
							)}
						</tr>
					</tbody>
				</table>
				<table className="body black">
					<tbody>
						<tr>
							{[...Array(this.props.ln).keys()].map((inst) =>
								<td key={inst}>
									<Key ctx={this.props.ctx} />
								</td>
							)}
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
};

export default Board;
