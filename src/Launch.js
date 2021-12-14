import React from 'react';
import Btn from './Btn';

import './Launch.css';

class Launch extends React.Component {
	render() {
		const x = 3;
		const y = 3;

		return (
			<table className='launch'>
				<tbody>
					{[...Array(y).keys()].map((j) =>
						<tr>
							{[...Array(x).keys()].map((i) =>
								<td>
									<Btn sz={this.props.sz} name={(j * y) + i} />
								</td>
							)}
						</tr>
					)}
				</tbody>
			</table>
		);
	}
};

export default Launch;
