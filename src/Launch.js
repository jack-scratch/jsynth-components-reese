import React from 'react';
import Btn from './Btn';

import './Launch.css';

class Launch extends React.Component {
	render() {
		return (
			<table className='launch'>
				<tbody>
					<tr>
						{[...Array(3).keys()].map((i) =>
							<td>
								<Btn sz={this.props.sz} name={i} />
							</td>
						)}
					</tr>
				</tbody>
			</table>
		);
	}
};

export default Launch;
