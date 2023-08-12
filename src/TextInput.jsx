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

Text.defaultProps = {
	wd: 20,
	ln: 4
};

export default TextInput;
