import React from "react";

import "./Fader.css";

class Fader extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			val: 0,
			down: false
		};
	}
	render() {
		return (
			<div className="fader" onMouseMove={(e) => {
				if (this.state.down) {
					this.setState(() => ({
						val: e.nativeEvent.offsetY
					}))
				}
			}} onMouseUp={() => this.setState(() => ({
				down: false
			}))}>
				<div className="groove">
					<div className="thumb" style={{
						marginTop: this.state.val
					}} onMouseDown={() => this.setState(() => ({
						down: true
					}))} >
						<div className="mark"></div>
					</div>
				</div>
				<svg xmlns="http://www.w3.org/2000/svg" className="inc"></svg>
			</div>
		);
	}
}

export default Fader;
