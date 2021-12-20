import React from "react";

import "./Fader.css";

class Fader extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			val: 0,
			down: false
		};

		this.scrub = this.scrub.bind(this);
	}

	scrub(e) {
		if (this.state.down) {
			this.setState({
				val: e.nativeEvent.offsetY
			});

			this.props.refer.value = this.state.val;
		}
	}

	render() {
		return (
			<div className="fader" style={{
				height: this.props.ln
			}} onMouseDown={() => this.setState({
				down: true
			})} onMouseUp={() => this.setState({
				down: false
			})} onMouseLeave={() => this.setState({
				down: false
			})} onMouseMove={this.scrub}>
				<div className="groove">
					<div className="thumb" style={{
						marginTop: this.state.val
					}}>
						<div className="mark"></div>
					</div>
				</div>
				<svg xmlns="http://www.w3.org/2000/svg" className="inc"></svg>
			</div>
		);
	}
}

Fader.defaultProps = {
	ln: 100
};

export default Fader;
