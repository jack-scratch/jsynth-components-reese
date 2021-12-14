import React from 'react';

import Nut from './Nut';

class Port extends React.Component {
	render() {
		return (
			<svg className="port" overflow="visible">
				<circle />
				<Nut />
			</svg>
		);
	}
};

export default Port;
