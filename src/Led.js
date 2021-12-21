import React from "react";

class Led extends React.Component {
	constructor(props) {
		super(props);

		this.canvRef = React.createRef();
	}

	componentDidMount() {
		this.context = this.canvRef.current.getContext("2d");

		this.context.fillStyle = "red";
		this.context.fillRect(0, 0, 30, 70);
	}

	render() {
		return (
			<canvas ref={this.canvRef} />
		)
	}
}

export default Led;
