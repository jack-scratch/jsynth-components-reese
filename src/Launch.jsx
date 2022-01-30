import React from "react";
import {
	Btn
} from "./Btn";
import Light from "./Light";

import "./Launch.css";

class Launch extends React.Component {
	constructor(props) {
		super(props);

		this.play = this.play.bind(this);
	}

	play(i) {
		alert(i);
	}

	render() {
		return (
			<div className="launch">
				<div className="head">
					<h1>Launchpad</h1>
					<Light />
				</div>
				<div className="body">
					<div className="group">
						<table>
							<tbody>
								{[...Array(this.props.y).keys()].map((j) =>
									<tr key={`"row-${j}"`}>
										{[...Array(this.props.x).keys()].map((i) =>
											<td key={`btn-${i}`}>
												<Btn wd={80} ht={80} name={1 + ((j * this.props.y) + i)} hookPush={() => this.play((j * this.props.x) + i)} />
											</td>
										)}
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

Launch.defaultProps = {
	x: 1,
	y: 1
};

export default Launch;
