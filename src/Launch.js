import React from 'react';
import Btn from './Btn';

import './Launch.css';

class Launch extends React.Component {
	render() {
		return (
			<table class="launch">
				<tbody>
					<tr>
						<td>
							<Btn sz={this.props.sz} />
						</td>
					</tr>
				</tbody>
			</table>
		);
	}
};

export default Launch;
