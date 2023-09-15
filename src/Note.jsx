import React from "react";
import TextDisp from "./periph/TextDisp";
import {
	XS,
	Select
} from "./ctrl/Btn";
import {
	note
} from "./fmt";
import {
	a,
	oct
} from "./math";
import {
	clamp
} from "./util";

class Note extends React.Component {
	noteLn = oct - 1 - 1;

	fmtSemi = [
		"b",
		"",
		"#"
	];

	constructor() {
		super();

		this.state = {
			o: 4,
			t: 0,
			s: 1
		};
	}

	render() {
		return (
			<div className="cont body">
				<div className="head">
					<h1>Notes</h1>
				</div>
				<div>
					<div className="cont body">
						<TextDisp wd={6} ln={1} buff={`${note["whole"][this.state.t]}${this.fmtSemi[this.state.s]}${this.state.o}`} />
					</div>
					<div style={{
						display: "flex",
						flexDirection: "row"
					}}>
						<div className="cont body">
							<div className="body">
								<div className="mark">Octave</div>
							</div>
							<div className="body">
								<Select hookPush={() => this.setState((prevState) => ({
									o: prevState.o + 1
								}))} />
								<Select hookPush={() => this.setState((prevState) => ({
									o: Math.max(prevState.o - 1, 0)
								}))} />
							</div>
						</div>
						<div className="cont body">
							<div className="body">
								<div className="mark">Note</div>
							</div>
							<div className="body">
								<Select hookPush={() => this.setState((prevState) => ({
									t: clamp(prevState.t + 1, 0, this.noteLn)
								}))} />
								<Select hookPush={() => this.setState((prevState) => ({
									t: clamp(prevState.t - 1, 0, this.noteLn)
								}))} />
							</div>
						</div>
						<div className="cont body">
							<div className="body">
								<div className="mark">Semitone</div>
							</div>
							<div className="body">
								<Select hookPush={() => this.setState((prevState) => ({
									s: clamp(prevState.s + 1, 0, 2)
								}))}/>
								<Select hookPush={() => this.setState((prevState) => ({
									s: clamp(prevState.s - 1, 0, 2)
								}))}/>
							</div>
						</div>
					</div>
				</div>
				<div className="cont body">
					<XS hookPush={this.props.hook && this.props.hook(a * Math.pow(2, this.state.o + ((1 / 7) * this.state.t) + ((this.state.s === 1 ? 1 : -1) * (1 / 12))))} />
				</div>
			</div>
		);
	}
}

export default Note;
