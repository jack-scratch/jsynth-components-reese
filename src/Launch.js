import React from 'react';
import Btn from './Btn';
import Light from './Light';

import './Launch.css';

class Launch extends React.Component {
	render() {
		const x = 3;
		const y = 3;

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
								{[...Array(y).keys()].map((j) =>
									<tr>
										{[...Array(x).keys()].map((i) =>
											<td>
												<Btn sz='m' name={1 + ((j * y) + i)} />
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

export default Launch;
