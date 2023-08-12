import React from "react";

class TextInput extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<textarea resize="none"></textarea>
		);
	}
}

export default TextInput;
