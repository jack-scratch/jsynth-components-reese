import React from 'react';

class Module extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="module">
				<div className="io">
					{this.props.port.map((type) =>
						<div className="label">{type}</div>
					)}
				</div>
			</div>
		);
	}
};

export default Module;
