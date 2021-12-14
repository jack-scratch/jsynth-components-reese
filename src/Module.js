import React from 'react';
import Port from './Port';
import Label from './Label';
import Knob from './Knob';

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
				<div className="body">
					{this.props.knob.map((name) =>
						<div key={name}>
							<div className="head">
								<Label text={name} />
							</div>
							<div className="body">
								<Knob />
							</div>
						</div>
					)}
				</div>
				<div className="body">
					<div className="io">
						{this.props.port.map((type) =>
							<div key="{type}">
								<div className="head">
									<div className="mark">{type}</div>
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
