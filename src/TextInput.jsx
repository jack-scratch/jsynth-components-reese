import React from "react";

class TextInput extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<textarea cols={this.props.wd} rows={this.props.ln} spellCheck="false"></textarea>
		);
	}
}

TextInput.defaultProps = {
	wd: 30,
	ln: 4
};

export default TextInput;
