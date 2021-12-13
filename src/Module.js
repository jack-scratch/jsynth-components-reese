import React from 'react';

import Port from './Port';

class Module extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="module">
				<div className="io">
					{this.props.port.map((type) =>
						<div key="{type}">
							<div className="head">
								<div className="label">{type}</div>
							</div>
							<div className="body">
								<Port />
							</div>
						</div>
					)}
				</div>
			</div>
		);
	}
};

export default Module;
