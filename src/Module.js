import React from 'react';

import Port from './Port';
import Label from './Label';

class Module extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="module">
				<div className="head">
					<Label text={this.props.name} />
				</div>
				<div>
					{this.props.knob.map((name) =>
						<div key="{name}">{name}</div>
					)}
				</div>
				<div className="body">
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
			</div>
		);
	}
};

export default Module;
