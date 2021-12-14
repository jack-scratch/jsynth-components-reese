import React from 'react';
import Btn from './Btn';
import Light from './Light';

import './Launch.css';

class Launch extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='launch'>
				<div className='head'>
					<div className='mark'>{this.props.name}</div>
					<Light />
				</div>
				<div className='body'>
					<div className="group">
						<table>
							<tbody>
								{[...Array(this.props.y).keys()].map((j) =>
									<tr key={`'row-${j}'`}>
										{[...Array(this.props.x).keys()].map((i) =>
											<td>
												<Btn key={`'btn-${i}'`} sz='m' name={1 + ((j * this.props.y) + i)} />
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
};

Launch.defaultProps = {
	x: 1,
	y: 1
};

export default Launch;
